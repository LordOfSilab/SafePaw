import { useState, useEffect } from 'react'
import { type ToxicFood, type ToxicPlant, type DangerLevel } from '@/schemas'
import { toxicFoods } from '@/data/foods'
import { toxicPlants } from '@/data/plants'
import { SHEET_URL_FOODS, SHEET_URL_PLANTS } from '@/config'

// ── Cache keys ────────────────────────────────────────────────────────────────
const CACHE_FOODS = 'safepaw_foods'
const CACHE_PLANTS = 'safepaw_plants'
const CACHE_LAST_UPDATED = 'safepaw_last_updated'

const DANGER_LEVELS = new Set<string>(['low', 'medium', 'high', 'deadly'])

// ── Helpers ───────────────────────────────────────────────────────────────────

function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/** Minimal but correct CSV parser — handles quoted fields with embedded commas/newlines. */
function parseCSV(text: string): string[][] {
  const rows: string[][] = []
  const fields: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    const next = text[i + 1]

    if (ch === '"') {
      if (inQuotes && next === '"') {
        // escaped double-quote inside a quoted field
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (ch === ',' && !inQuotes) {
      fields.push(current)
      current = ''
    } else if (ch === '\r' && next === '\n' && !inQuotes) {
      // Windows line ending — skip \r, \n handled on next iteration
    } else if (ch === '\n' && !inQuotes) {
      fields.push(current)
      rows.push([...fields])
      fields.length = 0
      current = ''
    } else {
      current += ch
    }
  }

  // flush final field / row
  if (current !== '' || fields.length > 0) {
    fields.push(current)
    if (fields.some((f) => f.trim() !== '')) rows.push([...fields])
  }

  return rows
}

function rowsToObjects(rows: string[][]): Record<string, string>[] {
  if (rows.length < 2) return []
  const headers = rows[0].map((h) => h.trim().toLowerCase())
  return rows.slice(1).flatMap((row) => {
    if (row.every((cell) => cell.trim() === '')) return []
    const obj: Record<string, string> = {}
    headers.forEach((header, i) => {
      obj[header] = (row[i] ?? '').trim()
    })
    return [obj]
  })
}

function parsePipe(value: string): string[] {
  return value
    .split('|')
    .map((s) => s.trim())
    .filter(Boolean)
}

function parseFoodsCSV(text: string): ToxicFood[] {
  const objects = rowsToObjects(parseCSV(text))
  return objects.flatMap((row): ToxicFood[] => {
    const name = row['name']
    const dangerLevel = row['danger_level'] as DangerLevel
    if (!name || !DANGER_LEVELS.has(dangerLevel)) return []

    return [
      {
        id: slugify(name),
        name,
        icon: row['emoji'] || undefined,
        dangerLevel,
        symptoms: parsePipe(row['symptoms'] ?? ''),
        whatToDo: row['what_to_do'] ?? '',
        moreInfo: row['more_info'] || undefined,
      },
    ]
  })
}

function parsePlantsCSV(text: string): ToxicPlant[] {
  const objects = rowsToObjects(parseCSV(text))
  return objects.flatMap((row): ToxicPlant[] => {
    const name = row['name']
    const dangerLevel = row['danger_level'] as DangerLevel
    if (!name || !DANGER_LEVELS.has(dangerLevel)) return []

    return [
      {
        id: slugify(name),
        name,
        scientificName: row['scientific_name'] || undefined,
        icon: row['emoji'] || undefined,
        dangerLevel,
        symptoms: parsePipe(row['symptoms'] ?? ''),
        whatToDo: row['what_to_do'] ?? '',
      },
    ]
  })
}

// ── Time-ago formatter ────────────────────────────────────────────────────────

export function formatTimeAgo(isoTimestamp: string): string {
  const diff = Date.now() - new Date(isoTimestamp).getTime()
  const mins = Math.floor(diff / 60_000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  return `${days}d ago`
}

// ── Generic loader ────────────────────────────────────────────────────────────

function loadFromCache<T>(key: string): T[] | null {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    return JSON.parse(raw) as T[]
  } catch {
    return null
  }
}

function saveToCache<T>(key: string, data: T[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch {
    // storage quota exceeded — silently ignore
  }
}

// ── Hooks ─────────────────────────────────────────────────────────────────────

export function useFoodsData() {
  const [foods, setFoods] = useState<ToxicFood[]>(() => {
    return loadFromCache<ToxicFood>(CACHE_FOODS) ?? toxicFoods
  })
  const [lastUpdated, setLastUpdated] = useState<string | null>(() =>
    localStorage.getItem(CACHE_LAST_UPDATED)
  )

  useEffect(() => {
    let cancelled = false
    fetch(SHEET_URL_FOODS)
      .then((r) => r.text())
      .then((text) => {
        if (cancelled) return
        const parsed = parseFoodsCSV(text)
        if (parsed.length === 0) return
        saveToCache(CACHE_FOODS, parsed)
        const now = new Date().toISOString()
        localStorage.setItem(CACHE_LAST_UPDATED, now)
        setFoods(parsed)
        setLastUpdated(now)
      })
      .catch(() => {
        // offline or fetch failed — keep existing data silently
      })
    return () => { cancelled = true }
  }, [])

  return { foods, lastUpdated }
}

export function usePlantsData() {
  const [plants, setPlants] = useState<ToxicPlant[]>(() => {
    return loadFromCache<ToxicPlant>(CACHE_PLANTS) ?? toxicPlants
  })
  const [lastUpdated, setLastUpdated] = useState<string | null>(() =>
    localStorage.getItem(CACHE_LAST_UPDATED)
  )

  useEffect(() => {
    let cancelled = false
    fetch(SHEET_URL_PLANTS)
      .then((r) => r.text())
      .then((text) => {
        if (cancelled) return
        const parsed = parsePlantsCSV(text)
        if (parsed.length === 0) return
        saveToCache(CACHE_PLANTS, parsed)
        const now = new Date().toISOString()
        localStorage.setItem(CACHE_LAST_UPDATED, now)
        setPlants(parsed)
        setLastUpdated(now)
      })
      .catch(() => {
        // offline or fetch failed — keep existing data silently
      })
    return () => { cancelled = true }
  }, [])

  return { plants, lastUpdated }
}
