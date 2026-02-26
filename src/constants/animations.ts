import { MOTION, type RevealEntry } from "@/lib/animation-presets"

export const FOR_WHO_REVEAL: RevealEntry[] = [
  { selector: ".for-who-header > *", trigger: "section", ...MOTION.header },
  { selector: ".pain-item", trigger: ".pain-list", direction: "left", duration: 0.5, stagger: 0.07, offset: 16 },
  { selector: ".for-who-footer", duration: 0.5, offset: 16, start: "top 85%" },
]

export const EXPERT_REVEAL: RevealEntry[] = [
  { selector: ".expert-header > *", trigger: "section", ...MOTION.header },
  { selector: ".expert-card", duration: 0.7, offset: 32, start: "top 85%" },
]

export const PROGRAM_REVEAL: RevealEntry[] = [
  { selector: ".program-row", trigger: ".program-mobile", direction: "left", duration: 0.4, stagger: 0.08, offset: 20 },
  { selector: ".program-header > *", trigger: "section", ...MOTION.header },
  { selector: ".program-card", trigger: ".program-desktop", ...MOTION.list, offset: 20 },
]

export const HOW_IT_WORKS_REVEAL: RevealEntry[] = [
  { selector: ".hiw-header > *", trigger: "section", ...MOTION.header },
  { selector: ".hiw-step", trigger: ".hiw-steps", duration: 0.5, stagger: 0.1, offset: 24 },
]

export const RESULTS_REVEAL: RevealEntry[] = [
  { selector: ".results-header > *", trigger: "section", ...MOTION.header },
  { selector: ".results-metric", trigger: ".results-metrics", ...MOTION.card },
  { selector: ".results-outcome", trigger: ".results-outcomes", direction: "left", ...MOTION.list },
]

export const MEMBERS_REVEAL: RevealEntry[] = [
  { selector: ".members-header > *", trigger: "section", ...MOTION.header },
  { selector: ".member-strip", trigger: ".members-strips", direction: "left", duration: 0.4, stagger: 0.06, offset: 20 },
  { selector: ".members-counter", direction: "fade", duration: 0.6, start: "top 90%" },
]

export const OFFER_REVEAL: RevealEntry[] = [
  { selector: ".offer-header > *", trigger: "section", ...MOTION.header },
  { selector: ".offer-tariff", trigger: ".offer-tariffs", duration: 0.7, stagger: 0.15, offset: 32 },
  { selector: ".offer-value-item", trigger: ".offer-value-grid", ...MOTION.list, offset: 20 },
  { selector: ".offer-bonus", trigger: ".offer-bonuses", direction: "left", duration: 0.4, stagger: 0.08, offset: 16 },
]

export const TOPICS_REVEAL: RevealEntry[] = [
  { selector: ".topics-header > *", trigger: "section", ...MOTION.header },
  { selector: ".topic-card", trigger: ".topics-grid", ...MOTION.card, offset: 24 },
  { selector: ".topics-schedule", duration: 0.6, offset: 20, start: "top 85%" },
]

export const GUARANTEE_REVEAL: RevealEntry[] = [
  { selector: ".guarantee-header > *", trigger: "section", ...MOTION.header },
  { selector: ".guarantee-content", duration: 0.6, offset: 24 },
]

export const FAQ_REVEAL: RevealEntry[] = [
  { selector: ".faq-header > *", trigger: "section", ...MOTION.header },
  { selector: ".faq-item", trigger: ".faq-list", ...MOTION.list },
  { selector: ".faq-cta", duration: 0.5, offset: 16, start: "top 90%" },
]

export const FINAL_CTA_REVEAL: RevealEntry[] = [
  { selector: ".cta-header > *", trigger: "section", ...MOTION.header },
  { selector: ".cta-urgency", duration: 0.6, offset: 24 },
  { selector: ".cta-buttons", duration: 0.5, offset: 20, start: "top 85%" },
]
