import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useTheme } from '@/hooks/useTheme'
import { usePWAInstall } from '@/hooks/usePWAInstall'
import { Header } from '@/components/Header'
import { BottomNav } from '@/components/BottomNav'
import { InstallBanner } from '@/components/InstallBanner'
import { FoodsPage } from '@/pages/Foods'
import { PlantsPage } from '@/pages/Plants'
import { CalculatorPage } from '@/pages/Calculator'
import { EmergencyPage } from '@/pages/Emergency'
import { t } from '@/i18n/en'

const pageMeta: Record<string, { title: string; subtitle: string }> = {
  '/': { title: t.foods.title, subtitle: t.foods.subtitle },
  '/plants': { title: t.plants.title, subtitle: t.plants.subtitle },
  '/calculator': { title: t.calculator.title, subtitle: t.calculator.subtitle },
  '/emergency': { title: t.emergency.title, subtitle: t.emergency.subtitle },
}

function AppShell() {
  const { theme, toggleTheme } = useTheme()
  const { showBanner, install, dismiss } = usePWAInstall()
  const location = useLocation()

  const meta = pageMeta[location.pathname] ?? pageMeta['/']

  // Update document title on route change
  useEffect(() => {
    document.title = `${meta.title} — ${t.appName}`
  }, [meta.title])

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        title={meta.title}
        subtitle={meta.subtitle}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 pb-20">
        <Routes>
          <Route path="/" element={<FoodsPage />} />
          <Route path="/plants" element={<PlantsPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
        </Routes>
      </main>

      <BottomNav />

      {showBanner && <InstallBanner onInstall={install} onDismiss={dismiss} />}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
