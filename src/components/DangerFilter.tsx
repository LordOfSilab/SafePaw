import { cn } from '@/lib/utils'
import { t } from '@/i18n/en'
import type { DangerLevel } from '@/schemas'

type FilterLevel = DangerLevel | 'all'

interface DangerFilterProps {
  value: FilterLevel
  onChange: (value: FilterLevel) => void
  className?: string
}

const levels: { value: FilterLevel; label: string; className: string }[] = [
  {
    value: 'all',
    label: t.danger.all,
    className:
      'data-[active=true]:bg-amber-800 data-[active=true]:text-white data-[active=false]:text-amber-700 dark:data-[active=false]:text-amber-400',
  },
  {
    value: 'low',
    label: t.danger.low,
    className:
      'data-[active=true]:bg-green-500 data-[active=true]:text-white data-[active=false]:text-green-700 dark:data-[active=false]:text-green-400',
  },
  {
    value: 'medium',
    label: t.danger.medium,
    className:
      'data-[active=true]:bg-yellow-500 data-[active=true]:text-white data-[active=false]:text-yellow-700 dark:data-[active=false]:text-yellow-400',
  },
  {
    value: 'high',
    label: t.danger.high,
    className:
      'data-[active=true]:bg-orange-500 data-[active=true]:text-white data-[active=false]:text-orange-700 dark:data-[active=false]:text-orange-400',
  },
  {
    value: 'deadly',
    label: t.danger.deadly,
    className:
      'data-[active=true]:bg-red-500 data-[active=true]:text-white data-[active=false]:text-red-700 dark:data-[active=false]:text-red-400',
  },
]

export function DangerFilter({ value, onChange, className }: DangerFilterProps) {
  return (
    <div
      role="group"
      aria-label="Filter by danger level"
      className={cn('flex gap-1.5 overflow-x-auto pb-1', className)}
    >
      {levels.map((level) => (
        <button
          key={level.value}
          data-active={value === level.value}
          onClick={() => onChange(level.value)}
          className={cn(
            'shrink-0 rounded-full border px-3 py-1 text-xs font-semibold transition-all',
            'border-transparent bg-amber-50 dark:bg-white/5',
            level.className
          )}
          aria-pressed={value === level.value}
        >
          {level.label}
        </button>
      ))}
    </div>
  )
}
