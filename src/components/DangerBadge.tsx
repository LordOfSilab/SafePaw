import { cn } from '@/lib/utils'
import type { DangerLevel } from '@/schemas'
import { t } from '@/i18n/en'

interface DangerBadgeProps {
  level: DangerLevel
  className?: string
}

const styles: Record<DangerLevel, string> = {
  low: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
  high: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
  deadly: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
}

const dots: Record<DangerLevel, string> = {
  low: 'bg-green-500',
  medium: 'bg-yellow-500',
  high: 'bg-orange-500',
  deadly: 'bg-red-500',
}

export function DangerBadge({ level, className }: DangerBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold',
        styles[level],
        className
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', dots[level])} aria-hidden />
      {t.danger[level]}
    </span>
  )
}
