import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { t } from '@/i18n/en'
import type { Theme } from '@/hooks/useTheme'

interface ThemeToggleProps {
  theme: Theme
  onToggle: () => void
  className?: string
}

export function ThemeToggle({ theme, onToggle, className }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={t.theme.toggle}
      title={theme === 'light' ? t.theme.dark : t.theme.light}
      className={cn(
        'flex h-9 w-9 items-center justify-center rounded-xl text-amber-700 transition-colors hover:bg-amber-100 dark:text-amber-300 dark:hover:bg-paw-dark-card',
        className
      )}
    >
      {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  )
}
