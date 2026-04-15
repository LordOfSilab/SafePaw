import { useState, useMemo } from 'react'
import { Phone, Globe, Clock, ChevronDown } from 'lucide-react'
import { emergencyContacts } from '@/data/emergency'
import { t } from '@/i18n/en'
import { cn } from '@/lib/utils'
import type { EmergencyContact } from '@/schemas'

function detectCountryCode(): string {
  try {
    const locale = navigator.language || navigator.languages?.[0] || 'en-US'
    const langCode = locale.toLowerCase()

    for (const contact of emergencyContacts) {
      if (contact.locales.some((l) => langCode.startsWith(l.toLowerCase()))) {
        return contact.countryCode
      }
    }
  } catch {
    // ignore
  }
  return 'US'
}

function formatPhone(phone: string): string {
  // Return a human-readable version (keep "+" and digits, add spaces for readability)
  return phone
    .replace(/^\+1(\d{3})(\d{3})(\d{4})$/, '+1 ($1) $2-$3')
    .replace(/^\+39(\d{2,3})(\d{7,8})$/, '+39 $1 $2')
    .replace(/^\+44(\d{4})(\d{6})$/, '+44 $1 $2')
    .replace(/^\+33(\d)(\d{2})(\d{2})(\d{2})(\d{2})$/, '+33 $1 $2 $3 $4 $5')
    .replace(/^\+34(\d{2})(\d{3})(\d{2})(\d{2})$/, '+34 $1 $2 $3 $4')
    .replace(/^\+49(\d{3})(\d{7,8})$/, '+49 $1 $2')
    .replace(/^\+611(\d{3})(\d{3})(\d{3})$/, '+61 $1 $2 $3')
}

function ServiceCard({ service }: { service: EmergencyContact['services'][0] }) {
  return (
    <div className="rounded-2xl border border-amber-100 bg-white p-4 dark:border-paw-dark-border dark:bg-paw-dark-card">
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-amber-900 dark:text-amber-100">{service.name}</h3>
        <div className="flex shrink-0 items-center gap-1.5">
          {service.available24h && (
            <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-900/40 dark:text-green-300">
              <Clock className="h-2.5 w-2.5" />
              {t.emergency.available24h}
            </span>
          )}
          {service.isFree === false && (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
              Fee
            </span>
          )}
          {service.isFree === true && (
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              {t.emergency.freeCall}
            </span>
          )}
        </div>
      </div>

      {service.notes && (
        <p className="mb-3 text-xs text-amber-600 dark:text-amber-400">{service.notes}</p>
      )}

      <div className="flex flex-wrap gap-2">
        <a
          href={`tel:${service.phone}`}
          className="flex items-center gap-2 rounded-xl bg-paw-amber px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-500 active:bg-amber-600"
          aria-label={`Call ${service.name}: ${formatPhone(service.phone)}`}
        >
          <Phone className="h-4 w-4" />
          {t.emergency.callNow} · {formatPhone(service.phone)}
        </a>

        {service.website && (
          <a
            href={service.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl border border-amber-200 px-3 py-2.5 text-xs font-semibold text-amber-700 transition-colors hover:bg-amber-50 dark:border-paw-dark-border dark:text-amber-300 dark:hover:bg-white/5"
            aria-label={`Visit ${service.name} website`}
          >
            <Globe className="h-3.5 w-3.5" />
            Website
          </a>
        )}
      </div>
    </div>
  )
}

export function EmergencyPage() {
  const [selectedCode, setSelectedCode] = useState<string>(detectCountryCode)
  const [pickerOpen, setPickerOpen] = useState(false)

  const detectedCode = useMemo(() => detectCountryCode(), [])

  const selectedCountry = emergencyContacts.find((c) => c.countryCode === selectedCode)

  return (
    <div className="mx-auto max-w-lg px-4 py-4">
      {/* Country selector */}
      <div className="mb-4">
        <div className="relative">
          <button
            onClick={() => setPickerOpen((v) => !v)}
            className="flex w-full items-center justify-between gap-3 rounded-2xl border border-amber-200 bg-white px-4 py-3 text-left transition-colors hover:bg-amber-50 dark:border-paw-dark-border dark:bg-paw-dark-card dark:hover:bg-white/5"
            aria-haspopup="listbox"
            aria-expanded={pickerOpen}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">{selectedCountry?.flag}</span>
              <div>
                <p className="text-sm font-semibold text-amber-900 dark:text-amber-100">
                  {selectedCountry?.country}
                </p>
                {selectedCode === detectedCode && (
                  <p className="text-xs text-amber-500 dark:text-amber-400">
                    {t.emergency.autoDetected}
                  </p>
                )}
              </div>
            </div>
            <ChevronDown
              className={cn(
                'h-5 w-5 text-amber-400 transition-transform',
                pickerOpen && 'rotate-180'
              )}
            />
          </button>

          {pickerOpen && (
            <ul
              role="listbox"
              aria-label={t.emergency.selectCountry}
              className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-lg dark:border-paw-dark-border dark:bg-paw-dark-card"
            >
              {emergencyContacts.map((contact) => (
                <li key={contact.countryCode} role="option" aria-selected={contact.countryCode === selectedCode}>
                  <button
                    onClick={() => {
                      setSelectedCode(contact.countryCode)
                      setPickerOpen(false)
                    }}
                    className={cn(
                      'flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-amber-50 dark:hover:bg-white/5',
                      contact.countryCode === selectedCode
                        ? 'bg-amber-50 font-semibold text-paw-amber dark:bg-white/10'
                        : 'text-amber-900 dark:text-amber-100'
                    )}
                  >
                    <span className="text-xl">{contact.flag}</span>
                    {contact.country}
                    {contact.countryCode === detectedCode && (
                      <span className="ml-auto text-xs text-amber-400">{t.emergency.autoDetected}</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Services */}
      {selectedCountry ? (
        <ul className="space-y-3" role="list">
          {selectedCountry.services.map((service) => (
            <li key={service.phone}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-sm text-amber-500">{t.search.noResults}</p>
      )}
    </div>
  )
}
