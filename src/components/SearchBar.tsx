import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { t } from '@/i18n/en'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  className?: string
}

export function SearchBar({ value, onChange, className }: SearchBarProps) {
  return (
    <div className={cn('relative', className)}>
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-400"
        aria-hidden
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t.search.placeholder}
        aria-label={t.search.placeholder}
        className="w-full rounded-xl border border-amber-200 bg-white py-2.5 pl-10 pr-10 text-sm outline-none ring-offset-white placeholder:text-amber-300/70 focus:ring-2 focus:ring-paw-amber focus:ring-offset-2 dark:border-paw-dark-border dark:bg-paw-dark-card dark:text-amber-50 dark:placeholder:text-amber-400/40"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          aria-label={t.search.clearSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-amber-400 hover:text-amber-600 dark:hover:text-amber-200"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
