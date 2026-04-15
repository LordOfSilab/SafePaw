import { AlertTriangle, RotateCcw } from 'lucide-react'
import { useToxicityCalculator } from '@/hooks/useToxicityCalculator'
import { SeverityResult } from '@/components/SeverityResult'
import { t } from '@/i18n/en'
import { cn } from '@/lib/utils'

export function CalculatorPage() {
  const {
    weightValue,
    setWeightValue,
    weightUnit,
    setWeightUnit,
    substanceId,
    setSubstanceId,
    amountValue,
    setAmountValue,
    substance,
    substances,
    result,
    canCalculate,
    reset,
  } = useToxicityCalculator()

  // Group substances by category
  const grouped = substances.reduce<Record<string, typeof substances>>((acc, s) => {
    ;(acc[s.category] ??= []).push(s)
    return acc
  }, {})

  return (
    <div className="mx-auto max-w-lg px-4 py-4">
      {/* Disclaimer */}
      <div className="mb-5 flex gap-2.5 rounded-2xl border-2 border-orange-200 bg-orange-50 p-3.5 dark:border-orange-800/50 dark:bg-orange-950/30">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
        <p className="text-xs leading-relaxed text-orange-800 dark:text-orange-200">
          {t.calculator.disclaimer}
        </p>
      </div>

      <div className="space-y-4">
        {/* Weight input */}
        <div className="rounded-2xl border border-amber-100 bg-white p-4 dark:border-paw-dark-border dark:bg-paw-dark-card">
          <label className="mb-2 block text-sm font-semibold text-amber-900 dark:text-amber-100">
            {t.calculator.dogWeight}
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              inputMode="decimal"
              min="0.1"
              step="0.1"
              value={weightValue}
              onChange={(e) => setWeightValue(e.target.value)}
              placeholder="e.g. 10"
              className="flex-1 rounded-xl border border-amber-200 bg-transparent px-3 py-2.5 text-sm text-amber-900 outline-none focus:ring-2 focus:ring-paw-amber dark:border-paw-dark-border dark:text-amber-50"
            />
            {/* kg / lbs toggle */}
            <div className="flex overflow-hidden rounded-xl border border-amber-200 dark:border-paw-dark-border">
              {(['kg', 'lbs'] as const).map((unit) => (
                <button
                  key={unit}
                  onClick={() => setWeightUnit(unit)}
                  className={cn(
                    'px-3 py-2.5 text-sm font-semibold transition-colors',
                    weightUnit === unit
                      ? 'bg-paw-amber text-white'
                      : 'bg-white text-amber-600 hover:bg-amber-50 dark:bg-transparent dark:text-amber-400 dark:hover:bg-white/5'
                  )}
                >
                  {t.calculator.weightUnit[unit]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Substance select */}
        <div className="rounded-2xl border border-amber-100 bg-white p-4 dark:border-paw-dark-border dark:bg-paw-dark-card">
          <label className="mb-2 block text-sm font-semibold text-amber-900 dark:text-amber-100">
            {t.calculator.substance}
          </label>
          <select
            value={substanceId}
            onChange={(e) => setSubstanceId(e.target.value)}
            className="w-full rounded-xl border border-amber-200 bg-transparent px-3 py-2.5 text-sm text-amber-900 outline-none focus:ring-2 focus:ring-paw-amber dark:border-paw-dark-border dark:bg-paw-dark-card dark:text-amber-50"
          >
            <option value="">{t.calculator.selectSubstance}</option>
            {Object.entries(grouped).map(([category, subs]) => (
              <optgroup key={category} label={category}>
                {subs.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        {/* Amount input */}
        {substance && (
          <div className="rounded-2xl border border-amber-100 bg-white p-4 dark:border-paw-dark-border dark:bg-paw-dark-card">
            <label className="mb-1 block text-sm font-semibold text-amber-900 dark:text-amber-100">
              {t.calculator.amountIngested}
            </label>
            <p className="mb-2 text-xs text-amber-500 dark:text-amber-400">
              {substance.inputLabel}
            </p>
            <div className="flex gap-2">
              <input
                type="number"
                inputMode="decimal"
                min="0"
                step="0.1"
                value={amountValue}
                onChange={(e) => setAmountValue(e.target.value)}
                placeholder="0"
                className="flex-1 rounded-xl border border-amber-200 bg-transparent px-3 py-2.5 text-sm text-amber-900 outline-none focus:ring-2 focus:ring-paw-amber dark:border-paw-dark-border dark:text-amber-50"
              />
              <span className="flex items-center rounded-xl border border-amber-200 bg-amber-50 px-3 text-sm font-semibold text-amber-600 dark:border-paw-dark-border dark:bg-paw-dark-card dark:text-amber-400">
                {substance.inputUnit}
              </span>
            </div>
            {substance.notes && (
              <p className="mt-2 text-xs text-amber-500 dark:text-amber-400">{substance.notes}</p>
            )}
          </div>
        )}

        {/* Result */}
        {result && canCalculate && (
          <SeverityResult
            severity={result.severity}
            dosePerKg={result.dosePerKg}
            thresholdUnit={result.thresholdUnit}
            description={result.description}
          />
        )}

        {/* Reset button */}
        {(weightValue || substanceId || amountValue) && (
          <button
            onClick={reset}
            className="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm text-amber-500 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-200"
          >
            <RotateCcw className="h-4 w-4" />
            {t.calculator.reset}
          </button>
        )}
      </div>
    </div>
  )
}
