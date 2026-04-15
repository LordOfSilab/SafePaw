/**
 * SafePaw — English string constants
 * All user-visible text lives here to make future i18n straightforward.
 */
export const t = {
  // App
  appName: 'SafePaw',
  appTagline: 'Dog Safety Guide',
  dedication: 'In memory of Gimi goodest boy 🐾',

  // Bottom nav
  nav: {
    foods: 'Foods',
    plants: 'Plants',
    calculator: 'Calculator',
    emergency: 'Emergency',
  },

  // Search
  search: {
    placeholder: 'Search…',
    noResults: 'No results found.',
    clearSearch: 'Clear search',
  },

  // Danger levels
  danger: {
    low: 'Low',
    medium: 'Medium',
    high: 'High',
    deadly: 'Deadly',
    all: 'All',
  },

  // Foods page
  foods: {
    title: 'Toxic Foods',
    subtitle: 'Foods that are dangerous or lethal for dogs',
    count: (n: number) => `${n} item${n === 1 ? '' : 's'}`,
  },

  // Plants page
  plants: {
    title: 'Toxic Plants',
    subtitle: 'Plants that are dangerous or lethal for dogs',
    count: (n: number) => `${n} plant${n === 1 ? '' : 's'}`,
    toxicParts: 'Toxic parts',
  },

  // Item card / detail
  card: {
    symptoms: 'Symptoms',
    whatToDo: 'What to do',
    moreInfo: 'More info',
    tapForDetails: 'Tap for details',
    close: 'Close',
  },

  // Calculator page
  calculator: {
    title: 'Toxicity Calculator',
    subtitle: 'Estimate risk based on your dog\'s weight and substance ingested',
    disclaimer:
      '⚠️ This tool is for informational guidance only and is NOT a substitute for professional veterinary advice. If you suspect your dog has been poisoned, contact a vet or poison control immediately.',
    dogWeight: 'Dog weight',
    weightUnit: {
      kg: 'kg',
      lbs: 'lbs',
    },
    substance: 'Substance ingested',
    selectSubstance: 'Select a substance…',
    amountIngested: 'Amount ingested',
    calculate: 'Calculate risk',
    results: {
      title: 'Risk Assessment',
      dosePerKg: 'Dose per kg',
      severity: 'Severity',
      recommendation: 'Recommendation',
    },
    severity: {
      safe: 'Likely Safe',
      mild: 'Mild Concern',
      moderate: 'Moderate Risk',
      severe: 'Severe Risk',
      critical: 'Critical — Emergency!',
    },
    reset: 'Reset',
  },

  // Emergency page
  emergency: {
    title: 'Emergency Contacts',
    subtitle: 'Veterinary poison control and emergency lines',
    callNow: 'Call now',
    available24h: '24/7',
    selectCountry: 'Select country',
    autoDetected: 'Auto-detected',
    freeCall: 'Free',
    paidCall: 'Consultation fee may apply',
  },

  // Install banner
  install: {
    title: 'Install SafePaw',
    body: 'Add to home screen for instant offline access',
    install: 'Install',
    dismiss: 'Not now',
  },

  // Theme
  theme: {
    light: 'Light mode',
    dark: 'Dark mode',
    toggle: 'Toggle theme',
  },

  // Offline notice
  offline: {
    banner: 'You are offline — all data is still available.',
  },
}
