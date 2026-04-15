import { ToxicSubstance } from '@/schemas'

/**
 * Toxicity data for the calculator.
 *
 * Threshold bands use dose-per-kg of dog weight.
 * inputUnit: the unit the user enters (g or mg)
 * thresholdUnit: the unit used in band comparisons
 *
 * Conversion is handled in useToxicityCalculator:
 *   - For "g" input → dose per kg = inputGrams / weightKg
 *   - For "mg" input → dose per kg = inputMg / weightKg
 */
export const toxicSubstances: ToxicSubstance[] = [
  {
    id: 'dark-chocolate',
    name: 'Dark Chocolate',
    category: 'Chocolate',
    inputUnit: 'g',
    inputLabel: 'Grams of dark chocolate eaten',
    thresholdUnit: 'g/kg',
    notes:
      'Dark chocolate contains ~5.5 mg theobromine per gram. The toxic threshold for theobromine is ~20 mg/kg (mild) to >60 mg/kg (severe).',
    bands: [
      {
        minDosePerKg: 0,
        severity: 'safe',
        description: 'Amount is below the typical concern threshold. Monitor for any unusual behaviour.',
      },
      {
        minDosePerKg: 3.6,
        severity: 'mild',
        description:
          'Mild concern. Likely mild GI upset — vomiting or diarrhea possible. Contact your vet for guidance.',
      },
      {
        minDosePerKg: 7.2,
        severity: 'moderate',
        description:
          'Moderate risk. Significant theobromine dose — expect vomiting, diarrhea, elevated heart rate. Vet visit recommended urgently.',
      },
      {
        minDosePerKg: 14,
        severity: 'severe',
        description:
          'Severe risk. High theobromine dose — tremors, seizures, cardiac arrhythmia possible. Emergency vet immediately.',
      },
      {
        minDosePerKg: 28,
        severity: 'critical',
        description:
          'CRITICAL. Potentially lethal dose. Emergency veterinary care required NOW. Do not wait for symptoms.',
      },
    ],
  },
  {
    id: 'milk-chocolate',
    name: 'Milk Chocolate',
    category: 'Chocolate',
    inputUnit: 'g',
    inputLabel: 'Grams of milk chocolate eaten',
    thresholdUnit: 'g/kg',
    notes:
      'Milk chocolate contains ~1.7 mg theobromine per gram — about 3× less than dark chocolate.',
    bands: [
      {
        minDosePerKg: 0,
        severity: 'safe',
        description: 'Amount is below typical concern threshold. Still worth monitoring.',
      },
      {
        minDosePerKg: 11.8,
        severity: 'mild',
        description:
          'Mild concern. Possible GI upset. Contact your vet, especially if your dog is small or shows symptoms.',
      },
      {
        minDosePerKg: 23.5,
        severity: 'moderate',
        description:
          'Moderate risk. GI symptoms likely, possible elevated heart rate. Vet visit recommended promptly.',
      },
      {
        minDosePerKg: 47,
        severity: 'severe',
        description:
          'Severe risk. High theobromine exposure — seek emergency veterinary care.',
      },
      {
        minDosePerKg: 94,
        severity: 'critical',
        description:
          'CRITICAL. Potentially lethal dose. Emergency vet immediately.',
      },
    ],
  },
  {
    id: 'baking-chocolate',
    name: 'Baking / Unsweetened Chocolate',
    category: 'Chocolate',
    inputUnit: 'g',
    inputLabel: 'Grams of baking chocolate eaten',
    thresholdUnit: 'g/kg',
    notes:
      'Baking chocolate contains ~16 mg theobromine per gram — the most concentrated form of chocolate.',
    bands: [
      {
        minDosePerKg: 0,
        severity: 'safe',
        description: 'Very small amount. Still contact your vet — baking chocolate is extremely concentrated.',
      },
      {
        minDosePerKg: 1.25,
        severity: 'mild',
        description:
          'Mild concern already at this dose. GI upset likely. Contact vet immediately for any amount of baking chocolate.',
      },
      {
        minDosePerKg: 2.5,
        severity: 'moderate',
        description:
          'Moderate-to-severe risk. Baking chocolate is highly dangerous. Emergency vet visit now.',
      },
      {
        minDosePerKg: 5,
        severity: 'severe',
        description: 'Severe risk. Emergency vet immediately.',
      },
      {
        minDosePerKg: 10,
        severity: 'critical',
        description: 'CRITICAL. Potentially lethal. Emergency vet NOW.',
      },
    ],
  },
  {
    id: 'white-chocolate',
    name: 'White Chocolate',
    category: 'Chocolate',
    inputUnit: 'g',
    inputLabel: 'Grams of white chocolate eaten',
    thresholdUnit: 'g/kg',
    notes:
      'White chocolate has negligible theobromine. Main risk is pancreatitis from high fat/sugar content.',
    bands: [
      {
        minDosePerKg: 0,
        severity: 'safe',
        description: 'Theobromine risk is negligible. Monitor for GI upset from fat/sugar content.',
      },
      {
        minDosePerKg: 20,
        severity: 'mild',
        description:
          'Significant fat and sugar intake. Watch for vomiting, diarrhea, and signs of pancreatitis.',
      },
      {
        minDosePerKg: 50,
        severity: 'moderate',
        description:
          'High fat load — pancreatitis risk. Contact your vet, especially in prone breeds (miniature schnauzers, cocker spaniels).',
      },
      {
        minDosePerKg: 100,
        severity: 'severe',
        description: 'Very large amount of fat/sugar. Vet visit recommended.',
      },
    ],
  },
  {
    id: 'xylitol',
    name: 'Xylitol',
    category: 'Sweetener',
    inputUnit: 'mg',
    inputLabel: 'Milligrams of xylitol (check product label)',
    thresholdUnit: 'mg/kg',
    notes:
      'Typically found in sugar-free gum (0.2–1 g/piece), candy, peanut butter, and dental products. Check labels carefully.',
    bands: [
      {
        minDosePerKg: 0,
        severity: 'safe',
        description: 'Below known thresholds. Monitor closely — individual sensitivity can vary.',
      },
      {
        minDosePerKg: 50,
        severity: 'severe',
        description:
          'DANGER: 50 mg/kg can cause severe hypoglycemia. Emergency vet care required immediately.',
      },
      {
        minDosePerKg: 500,
        severity: 'critical',
        description:
          'CRITICAL: 500 mg/kg causes acute liver failure. Emergency vet NOW. This is life-threatening.',
      },
    ],
  },
  {
    id: 'grapes',
    name: 'Grapes',
    category: 'Fruit',
    inputUnit: 'g',
    inputLabel: 'Grams of grapes eaten',
    thresholdUnit: 'g/kg',
    notes:
      'WARNING: The toxic mechanism is unknown and the reaction is idiosyncratic. Even a tiny amount can be fatal for some dogs while others show no reaction. Any ingestion should be treated as an emergency.',
    bands: [
      {
        minDosePerKg: 0,
        severity: 'moderate',
        description:
          'ANY amount of grapes is potentially dangerous. Individual sensitivity varies enormously. Contact your vet immediately even for a single grape.',
      },
      {
        minDosePerKg: 5,
        severity: 'severe',
        description:
          'Significant amount. High risk of acute kidney injury. Emergency vet immediately.',
      },
      {
        minDosePerKg: 32,
        severity: 'critical',
        description:
          'CRITICAL. Dose associated with acute renal failure in literature. Emergency vet NOW.',
      },
    ],
  },
  {
    id: 'raisins',
    name: 'Raisins',
    category: 'Fruit',
    inputUnit: 'g',
    inputLabel: 'Grams of raisins eaten',
    thresholdUnit: 'g/kg',
    notes:
      'Raisins are more concentrated than grapes. The same idiosyncratic toxicity applies. Treat ANY ingestion as an emergency.',
    bands: [
      {
        minDosePerKg: 0,
        severity: 'severe',
        description:
          'ANY amount of raisins is potentially dangerous. Contact your vet or poison control immediately for even a single raisin.',
      },
      {
        minDosePerKg: 2.8,
        severity: 'critical',
        description:
          'CRITICAL. Dose associated with acute kidney failure. Emergency vet NOW.',
      },
    ],
  },
]
