import { ThemeToggle } from './ThemeToggle'
import type { Theme } from '@/hooks/useTheme'

interface HeaderProps {
  title: string
  subtitle?: string
  theme: Theme
  onToggleTheme: () => void
}

export function Header({ title, subtitle, theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-amber-100 bg-paw-cream/90 backdrop-blur-sm dark:border-paw-dark-border dark:bg-paw-dark-bg/90">
      <div className="mx-auto flex max-w-lg items-center justify-between px-4 py-3">
        <div>
          <h1 className="text-lg font-bold leading-tight text-amber-900 dark:text-amber-100">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs text-amber-600 dark:text-amber-400">{subtitle}</p>
          )}
        </div>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  )
}
