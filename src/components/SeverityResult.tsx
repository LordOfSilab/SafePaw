import { AlertTriangle, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { t } from '@/i18n/en'
import type { Severity } from '@/schemas'

interface SeverityResultProps {
  severity: Severity
  dosePerKg: number
  thresholdUnit: string
  description: string
  className?: string
}

const config: Record<
  Severity,
  { label: string; icon: React.ElementType; bg: string; border: string; text: string; iconColor: string }
> = {
  safe: {
    label: t.calculator.severity.safe,
    icon: CheckCircle,
    bg: 'bg-green-50 dark:bg-green-950/30',
    border: 'border-green-200 dark:border-green-800',
    text: 'text-green-900 dark:text-green-200',
    iconColor: 'text-green-500',
  },
  mild: {
    label: t.calculator.severity.mild,
    icon: AlertCircle,
    bg: 'bg-yellow-50 dark:bg-yellow-950/30',
    border: 'border-yellow-200 dark:border-yellow-800',
    text: 'text-yellow-900 dark:text-yellow-200',
    iconColor: 'text-yellow-500',
  },
  moderate: {
    label: t.calculator.severity.moderate,
    icon: AlertTriangle,
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    border: 'border-orange-200 dark:border-orange-800',
    text: 'text-orange-900 dark:text-orange-200',
    iconColor: 'text-orange-500',
  },
  severe: {
    label: t.calculator.severity.severe,
    icon: AlertTriangle,
    bg: 'bg-red-50 dark:bg-red-950/30',
    border: 'border-red-200 dark:border-red-800',
    text: 'text-red-900 dark:text-red-200',
    iconColor: 'text-red-500',
  },
  critical: {
    label: t.calculator.severity.critical,
    icon: XCircle,
    bg: 'bg-red-100 dark:bg-red-950/50',
    border: 'border-red-400 dark:border-red-600',
    text: 'text-red-900 dark:text-red-100',
    iconColor: 'text-red-600',
  },
}

export function SeverityResult({ severity, dosePerKg, thresholdUnit, description, className }: SeverityResultProps) {
  const c = config[severity]
  const Icon = c.icon

  return (
    <div className={cn('animate-fade-in rounded-2xl border-2 p-4', c.bg, c.border, className)}>
      {/* Title row */}
      <div className="mb-3 flex items-center gap-2">
        <Icon className={cn('h-6 w-6 shrink-0', c.iconColor)} />
        <span className={cn('text-base font-bold', c.text)}>{c.label}</span>
      </div>

      {/* Dose */}
      <div className="mb-3 flex items-center justify-between rounded-xl bg-white/60 px-3 py-2 dark:bg-black/20">
        <span className={cn('text-xs font-medium', c.text)}>{t.calculator.results.dosePerKg}</span>
        <span className={cn('font-mono text-sm font-bold', c.text)}>
          {dosePerKg < 0.01 ? '<0.01' : dosePerKg.toFixed(2)} {thresholdUnit}
        </span>
      </div>

      {/* Description */}
      <p className={cn('text-sm leading-relaxed', c.text)}>{description}</p>
    </div>
  )
}
