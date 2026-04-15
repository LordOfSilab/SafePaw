import { useState, useMemo } from 'react'
import { toxicSubstances } from '@/data/toxicity'
import type { Severity } from '@/schemas'

export type WeightUnit = 'kg' | 'lbs'

export interface CalculatorResult {
  substanceName: string
  dosePerKg: number
  thresholdUnit: string
  severity: Severity
  description: string
  notes?: string
}

export function useToxicityCalculator() {
  const [weightValue, setWeightValue] = useState<string>('')
  const [weightUnit, setWeightUnit] = useState<WeightUnit>('kg')
  const [substanceId, setSubstanceId] = useState<string>('')
  const [amountValue, setAmountValue] = useState<string>('')

  const weightKg = useMemo(() => {
    const raw = parseFloat(weightValue)
    if (isNaN(raw) || raw <= 0) return null
    return weightUnit === 'kg' ? raw : raw * 0.453592
  }, [weightValue, weightUnit])

  const substance = useMemo(
    () => toxicSubstances.find((s) => s.id === substanceId) ?? null,
    [substanceId]
  )

  const result = useMemo<CalculatorResult | null>(() => {
    if (!weightKg || !substance) return null
    const amount = parseFloat(amountValue)
    if (isNaN(amount) || amount < 0) return null

    // dose per kg in the substance's threshold unit
    const dosePerKg = amount / weightKg

    // Find the highest band whose minDosePerKg the dose meets or exceeds
    const sortedBands = [...substance.bands].sort((a, b) => b.minDosePerKg - a.minDosePerKg)
    const matched = sortedBands.find((band) => dosePerKg >= band.minDosePerKg)

    // If dose is below the first band minimum, use the first band (safe)
    const band = matched ?? substance.bands[0]

    return {
      substanceName: substance.name,
      dosePerKg,
      thresholdUnit: substance.thresholdUnit,
      severity: band.severity,
      description: band.description,
      notes: substance.notes,
    }
  }, [weightKg, substance, amountValue])

  const canCalculate =
    weightKg !== null &&
    substance !== null &&
    amountValue !== '' &&
    !isNaN(parseFloat(amountValue)) &&
    parseFloat(amountValue) >= 0

  function reset() {
    setWeightValue('')
    setSubstanceId('')
    setAmountValue('')
  }

  return {
    weightValue,
    setWeightValue,
    weightUnit,
    setWeightUnit,
    substanceId,
    setSubstanceId,
    amountValue,
    setAmountValue,
    substance,
    substances: toxicSubstances,
    result,
    canCalculate,
    reset,
  }
}
