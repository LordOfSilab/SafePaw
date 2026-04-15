import { Download, X } from 'lucide-react'
import { t } from '@/i18n/en'

interface InstallBannerProps {
  onInstall: () => void
  onDismiss: () => void
}

export function InstallBanner({ onInstall, onDismiss }: InstallBannerProps) {
  return (
    <div className="animate-slide-up fixed bottom-20 left-3 right-3 z-50 flex items-center gap-3 rounded-2xl border border-amber-200 bg-white p-3 shadow-lg dark:border-paw-dark-border dark:bg-paw-dark-card sm:left-auto sm:right-4 sm:w-80">
      {/* Paw icon */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-paw-amber">
        <span className="text-xl">🐾</span>
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-amber-900 dark:text-amber-100">{t.install.title}</p>
        <p className="truncate text-xs text-amber-600 dark:text-amber-300">{t.install.body}</p>
      </div>

      <div className="flex shrink-0 items-center gap-1">
        <button
          onClick={onInstall}
          className="flex items-center gap-1 rounded-lg bg-paw-amber px-3 py-1.5 text-xs font-semibold text-white hover:bg-amber-500 active:bg-amber-600"
          aria-label={t.install.install}
        >
          <Download className="h-3.5 w-3.5" />
          {t.install.install}
        </button>
        <button
          onClick={onDismiss}
          className="flex h-7 w-7 items-center justify-center rounded-lg text-amber-400 hover:bg-amber-50 hover:text-amber-600 dark:hover:bg-white/10"
          aria-label={t.install.dismiss}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
