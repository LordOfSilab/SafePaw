import { z } from 'zod'

// ── Danger level ───────────────────────────────────────────────────────────────
export const DangerLevelSchema = z.enum(['low', 'medium', 'high', 'deadly'])
export type DangerLevel = z.infer<typeof DangerLevelSchema>

// ── Toxic Foods ────────────────────────────────────────────────────────────────
export const ToxicFoodSchema = z.object({
  id: z.string(),
  name: z.string(),
  dangerLevel: DangerLevelSchema,
  symptoms: z.array(z.string()),
  whatToDo: z.string(),
  moreInfo: z.string().optional(),
  icon: z.string().optional(),
  tags: z.array(z.string()).optional(),
})
export type ToxicFood = z.infer<typeof ToxicFoodSchema>

// ── Toxic Plants ───────────────────────────────────────────────────────────────
export const ToxicPlantSchema = z.object({
  id: z.string(),
  name: z.string(),
  scientificName: z.string().optional(),
  dangerLevel: DangerLevelSchema,
  symptoms: z.array(z.string()),
  whatToDo: z.string(),
  moreInfo: z.string().optional(),
  icon: z.string().optional(),
  toxicParts: z.array(z.string()).optional(),
})
export type ToxicPlant = z.infer<typeof ToxicPlantSchema>

// ── Toxicity Calculator ────────────────────────────────────────────────────────
export const SeveritySchema = z.enum(['safe', 'mild', 'moderate', 'severe', 'critical'])
export type Severity = z.infer<typeof SeveritySchema>

export const ThresholdBandSchema = z.object({
  minDosePerKg: z.number(), // amount of substance per kg dog weight
  severity: SeveritySchema,
  description: z.string(),
})
export type ThresholdBand = z.infer<typeof ThresholdBandSchema>

export const ToxicSubstanceSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  inputUnit: z.string(), // e.g. "g" or "mg"
  inputLabel: z.string(), // e.g. "grams of chocolate eaten"
  thresholdUnit: z.string(), // unit for dose/kg (e.g. "g/kg" or "mg/kg")
  bands: z.array(ThresholdBandSchema),
  notes: z.string().optional(),
})
export type ToxicSubstance = z.infer<typeof ToxicSubstanceSchema>

// ── Emergency Contacts ─────────────────────────────────────────────────────────
export const EmergencyServiceSchema = z.object({
  name: z.string(),
  phone: z.string(),
  available24h: z.boolean(),
  notes: z.string().optional(),
  website: z.string().optional(),
  isFree: z.boolean().optional(),
})
export type EmergencyService = z.infer<typeof EmergencyServiceSchema>

export const EmergencyContactSchema = z.object({
  country: z.string(),
  countryCode: z.string(), // ISO 3166-1 alpha-2
  locales: z.array(z.string()), // BCP 47 locale prefixes
  flag: z.string(),
  services: z.array(EmergencyServiceSchema),
})
export type EmergencyContact = z.infer<typeof EmergencyContactSchema>
