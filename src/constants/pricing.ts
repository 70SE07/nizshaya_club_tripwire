import type { ValueStackRow, Bonus, Tariff } from "@/types/content"

export const valueStack: readonly ValueStackRow[] = [
  { item: "2 стрима в месяц с разбором экрана + записи", price: "$200/мес" },
  { item: "Готовые AI-агенты и рабочие воркфлоу", price: "$500" },
  { item: "Ежедневный проверенный стек нейронок", price: "$100/мес" },
  { item: "Закрытая группа 50+ практиков", price: "$200/мес" },
  { item: "Joker Speaker: Стас Цис — контент-заводы и YouTube", price: "$500", bonus: true },
  { item: "Joker Speaker: Дэн — Clowbot для автоматизации продаж", price: "$500", bonus: true },
  { item: "Готовые воркфлоу контент-завода для инстаблогеров", price: "$300", bonus: true },
  { item: "Q&A с разбором кейса лично с Владом (тариф 3 мес)", price: "$500/час", bonus: true },
]

export const bonuses: readonly Bonus[] = [
  {
    title: "Бонус #1 — Joker Speaker: Стас Цис",
    desc: "Закрытый эфир по контент-заводам и YouTube. Как построить систему, которая производит 50+ единиц контента в день — без копирайтера и SMM-менеджера.",
    note: "Рыночная стоимость: $500 · Включено в любой тариф",
  },
  {
    title: "Бонус #2 — Joker Speaker: Дэн (Clowbot)",
    desc: "Закрытый эфир по Clowbot: автоматизация продаж и клиентской коммуникации. Как убрать ручную обработку входящих, сохранить личный тон и не потерять ни одного лида.",
    note: "Рыночная стоимость: $500 · Включено в любой тариф",
  },
  {
    title: "Бонус #3 — Воркфлоу контент-завода для инстаблогеров",
    desc: "Готовый пакет схем: Reels, сторис, Telegram-посты, лендинги. Скачиваешь → адаптируешь под нишу → запускаешь.",
    note: "Рыночная стоимость: $300 · Включено в любой тариф",
  },
  {
    title: "Бонус #4 — Q&A с личным разбором кейса",
    desc: "Раз в месяц — живой созвон. Приходишь со своей задачей, Влад разбирает её прямо на звонке: какой агент применить, где ошибка, как масштабировать.",
    note: "Рыночная стоимость: $500/час · Только в 3-месячном тарифе",
    premium: true,
  },
]

export const tariffs: readonly Tariff[] = [
  {
    label: "Подписка · 1 месяц",
    price: "$79",
    priceNote: "/мес",
    extraFeatures: [{ label: "Q&A-сессии не входят", included: false }],
    cta: { text: "Вступить за $79" },
  },
  {
    label: "Подписка · 3 месяца",
    price: "$150",
    priceNote: undefined,
    oldPrice: "$237",
    discountBadge: "-37%",
    highlighted: true,
    extraFeatures: [
      { label: "Q&A: личный разбор кейса с Владом", included: true },
      { label: "Приоритетный доступ к материалам", included: true },
    ],
    cta: { text: "Взять 3 месяца за $150", highlighted: true },
  },
]

export const monthlyFeatures = [
  "2 стрима/мес с записью",
  "Ежедневный стек нейронок",
  "Готовые AI-агенты и воркфлоу",
  "Закрытая группа практиков",
  "Joker Speaker: Стас Цис",
  "Joker Speaker: Дэн (Clowbot)",
  "Воркфлоу контент-завода",
] as const
