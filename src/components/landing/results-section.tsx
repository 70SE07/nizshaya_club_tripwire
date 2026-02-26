'use client'

import { Clock, Zap, TrendingUp, Gem, Check } from "lucide-react"
import { RESULTS_REVEAL } from "@/constants/animations"
import { resultsMetrics, resultsOutcomes } from "@/constants/content"
import { AnimatedSection } from "@/components/landing/animated-section"

const metricIcons = [Clock, Zap, TrendingUp, Gem]

export function ResultsSection() {
  return (
    <AnimatedSection
      reveal={RESULTS_REVEAL}
      label="Результат"
      title="Что изменится. Конкретно."
      headerClassName="results-header"
    >
      {/* Metrics -- 4 tiles */}
      <div className="results-metrics grid-section mb-sp-md">
        {resultsMetrics.map((m, i) => {
          const Icon = metricIcons[i]
          return (
            <div key={i} className="results-metric card-base text-center">
              <Icon className="w-6 h-6 text-rose-400 mx-auto mb-sp-xs" />
              <p className="text-white font-bold text-2xl mb-sp-xs">{m.value}</p>
              <p className="text-sm text-body">{m.desc}</p>
            </div>
          )
        })}
      </div>

      {/* Outcomes */}
      <div className="results-outcomes grid-section mb-sp-md">
        <div className="col-full">
          <p className="text-lg leading-[1.65] text-body mb-sp-sm">
            После первого месяца ты уходишь с:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-sp-xs">
            {resultsOutcomes.map((item, i) => (
              <div key={i} className="results-outcome flex items-start gap-3">
                <Check className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-sm text-body">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
