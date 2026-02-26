export interface SolutionRow {
  old: string
  now: string
}

export interface ProgramItem {
  freq: string
  title: string
  desc: string
  list?: readonly string[]
  premium?: boolean
}

export interface HowItWorksStep {
  title: string
  desc: string
}

export interface ResultMetric {
  value: string
  desc: string
}

export interface Member {
  name: string
  role: string
  desc: string
  metric: string
  photo: string
}

export interface TopicHighlight {
  tag: string
  title: string
  desc: string
  full?: boolean
}

export interface FaqItem {
  q: string
  a: string
}

export interface ValueStackRow {
  item: string
  price: string
  bonus?: boolean
}

export interface Bonus {
  title: string
  desc: string
  note: string
  premium?: boolean
}
