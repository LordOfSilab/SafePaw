import { useState } from 'react'
import { ChevronDown, ChevronUp, AlertCircle } from 'lucide-react'
import { DangerBadge } from './DangerBadge'
import { cn } from '@/lib/utils'
import { t } from '@/i18n/en'
import type { DangerLevel } from '@/schemas'

interface ItemCardProps {
  id: string
  name: string
  icon?: string
  dangerLevel: DangerLevel
  symptoms: string[]
  whatToDo: string
  moreInfo?: string
  toxicParts?: string[]
  scientificName?: string
}

export function ItemCard({
  name,
  icon,
  dangerLevel,
  symptoms,
  whatToDo,
  moreInfo,
  toxicParts,
  scientificName,
}: ItemCardProps) {
  const [expanded, setExpanded] = useState(false)

  const borderAccent: Record<DangerLevel, string> = {
    low: 'border-l-green-400',
    medium: 'border-l-yellow-400',
    high: 'border-l-orange-400',
    deadly: 'border-l-red-500',
  }

  return (
    <article
      className={cn(
        'overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition-all dark:border-paw-dark-border dark:bg-paw-dark-card',
        'border-l-4',
        borderAccent[dangerLevel]
      )}
    >
      {/* Header row — always visible */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center gap-3 p-4 text-left"
        aria-expanded={expanded}
        aria-label={`${name} — ${t.danger[dangerLevel]} danger. ${expanded ? 'Collapse' : 'Expand'} details`}
      >
        {icon && (
          <span className="text-2xl" role="img" aria-hidden>
            {icon}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-semibold text-amber-900 dark:text-amber-100">{name}</h3>
            {scientificName && (
              <span className="text-xs italic text-amber-500 dark:text-amber-400">
                {scientificName}
              </span>
            )}
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <DangerBadge level={dangerLevel} />
            {!expanded && (
              <span className="text-xs text-amber-500 dark:text-amber-400">
                {symptoms.slice(0, 2).join(', ')}
                {symptoms.length > 2 && '…'}
              </span>
            )}
          </div>
        </div>
        <span className="ml-1 shrink-0 text-amber-400">
          {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </span>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="animate-fade-in border-t border-amber-50 px-4 pb-4 dark:border-paw-dark-border">
          {toxicParts && toxicParts.length > 0 && (
            <div className="mt-3">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-amber-500">
                {t.plants.toxicParts}
              </p>
              <ul className="space-y-0.5">
                {toxicParts.map((part) => (
                  <li key={part} className="text-sm text-amber-800 dark:text-amber-200">
                    • {part}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-3">
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-amber-500">
              {t.card.symptoms}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {symptoms.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-amber-50 px-2.5 py-1 text-xs text-amber-800 dark:bg-amber-900/30 dark:text-amber-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-3 rounded-xl bg-orange-50 p-3 dark:bg-orange-950/30">
            <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-orange-600 dark:text-orange-400">
              <AlertCircle className="h-3.5 w-3.5" />
              {t.card.whatToDo}
            </p>
            <p className="text-sm text-orange-900 dark:text-orange-200">{whatToDo}</p>
          </div>

          {moreInfo && (
            <div className="mt-3">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-amber-500">
                {t.card.moreInfo}
              </p>
              <p className="text-sm text-amber-700 dark:text-amber-300">{moreInfo}</p>
            </div>
          )}
        </div>
      )}
    </article>
  )
}
