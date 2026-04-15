import { useState, useMemo } from 'react'
import { DangerLevel } from '@/schemas'

interface Searchable {
  name: string
  dangerLevel: DangerLevel
  symptoms: string[]
  tags?: string[]
  scientificName?: string
}

export function useSearch<T extends Searchable>(items: T[]) {
  const [query, setQuery] = useState('')
  const [filterLevel, setFilterLevel] = useState<DangerLevel | 'all'>('all')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()

    return items.filter((item) => {
      // Danger level filter
      if (filterLevel !== 'all' && item.dangerLevel !== filterLevel) return false

      // Text search
      if (!q) return true

      return (
        item.name.toLowerCase().includes(q) ||
        item.symptoms.some((s) => s.toLowerCase().includes(q)) ||
        item.tags?.some((tag) => tag.toLowerCase().includes(q)) ||
        item.scientificName?.toLowerCase().includes(q)
      )
    })
  }, [items, query, filterLevel])

  return { query, setQuery, filterLevel, setFilterLevel, results }
}
