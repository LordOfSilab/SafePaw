import { NavLink } from 'react-router-dom'
import { UtensilsCrossed, Leaf, Calculator, PhoneCall } from 'lucide-react'
import { cn } from '@/lib/utils'
import { t } from '@/i18n/en'

const navItems = [
  { to: '/', label: t.nav.foods, Icon: UtensilsCrossed, end: true },
  { to: '/plants', label: t.nav.plants, Icon: Leaf, end: false },
  { to: '/calculator', label: t.nav.calculator, Icon: Calculator, end: false },
  { to: '/emergency', label: t.nav.emergency, Icon: PhoneCall, end: false },
]

export function BottomNav() {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-amber-100 bg-paw-cream/95 pb-safe backdrop-blur-sm dark:border-paw-dark-border dark:bg-paw-dark-bg/95"
    >
      <div className="mx-auto flex max-w-lg items-stretch">
        {navItems.map(({ to, label, Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              cn(
                'flex flex-1 flex-col items-center gap-0.5 px-2 py-2.5 text-[10px] font-medium transition-colors',
                isActive
                  ? 'text-paw-amber'
                  : 'text-amber-400 hover:text-amber-600 dark:text-amber-500 dark:hover:text-amber-300'
              )
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  className={cn(
                    'h-5 w-5 transition-transform',
                    isActive && 'scale-110'
                  )}
                />
                <span>{label}</span>
                {isActive && (
                  <span className="absolute bottom-0 h-0.5 w-10 rounded-t-full bg-paw-amber" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
