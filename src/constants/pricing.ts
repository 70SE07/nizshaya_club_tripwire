import type { ValueStackRow, Bonus, Tariff } from "@/types/content"
import type { Lang } from "@/i18n/context"

// Russian versions
const valueStack_ru: readonly ValueStackRow[] = [
  { item: "2 стрима в месяц с разбором экрана + записи", price: "$200/мес" },
  { item: "Готовые AI-ассистенты и рабочие воркфлоу", price: "$500" },
  { item: "Еженедельный проверенный стек нейронок", price: "$100/мес" },
  { item: "Закрытая группа практиков", price: "$200/мес" },
  { item: "Joker Speaker: Стас Цис — контент-маркетинг и YouTube", price: "$500", bonus: true },
  { item: "Joker Speaker: Дэн — Clowbot для автоматизации продаж", price: "$500", bonus: true },
  { item: "Готовый контент-план под любую нишу", price: "$300", bonus: true },
  { item: "Q&A с разбором кейса лично с Владом (тариф 3 мес)", price: "$500/час", bonus: true },
]

const bonuses_ru: readonly Bonus[] = [
  {
    title: "Бонус #1 — Joker Speaker: Стас Цис",
    desc: "Закрытый эфир по контент-маркетингу и YouTube. Как выстроить систему производства контента — без копирайтера и SMM-менеджера.",
    note: "Рыночная стоимость: $500 · Включено в любой тариф",
  },
  {
    title: "Бонус #2 — Joker Speaker: Дэн (Clowbot)",
    desc: "Закрытый эфир по Clowbot: автоматизация продаж и клиентской коммуникации. Как убрать ручную обработку входящих, сохранить личный тон и не потерять ни одного лида.",
    note: "Рыночная стоимость: $500 · Включено в любой тариф",
  },
  {
    title: "Бонус #3 — Готовый контент-план под любую нишу",
    desc: "Готовый план: темы, форматы, прогрев, Telegram-посты, лендинги. Скачиваешь → адаптируешь под нишу → запускаешь.",
    note: "Рыночная стоимость: $300 · Включено в любой тариф",
  },
  {
    title: "Бонус #4 — Q&A с личным разбором кейса",
    desc: "Раз в месяц — живой созвон с Владом и командой. Приходишь со своей задачей, разбираем её прямо на звонке: какой инструмент применить, где ошибка, как масштабировать.",
    note: "Рыночная стоимость: $500/час · Только в 3-месячном тарифе",
    premium: true,
  },
]

const tariffs_ru: readonly Tariff[] = [
  {
    label: "Подписка · 1 месяц",
    price: "$79",
    priceNote: "/мес",
    extraFeatures: [{ label: "Q&A и стратсессии не входят", included: false }],
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
      { label: "Q&A и стратсессии: личный разбор кейса с Владом", included: true },
      { label: "Приоритетный доступ к материалам", included: true },
    ],
    cta: { text: "Взять 3 месяца за $150", highlighted: true },
  },
]

const monthlyFeatures_ru = [
  "2 стрима/мес с записью",
  "Еженедельный стек нейронок",
  "Готовые AI-ассистенты и воркфлоу",
  "Закрытая группа практиков",
  "Joker Speaker: Стас Цис",
  "Joker Speaker: Дэн (Clowbot)",
  "Готовый контент-план",
] as const

// Ukrainian versions
const valueStack_uk: readonly ValueStackRow[] = [
  { item: "2 стріми на місяць з розбором екрана + записи", price: "$200/міс" },
  { item: "Готові AI-асистенти та робочі воркфлоу", price: "$500" },
  { item: "Щотижневий перевірений стек нейронок", price: "$100/міс" },
  { item: "Закрита група практиків", price: "$200/міс" },
  { item: "Joker Speaker: Стас Цис — контент-маркетинг і YouTube", price: "$500", bonus: true },
  { item: "Joker Speaker: Ден — Clowbot для автоматизації продажів", price: "$500", bonus: true },
  { item: "Готовий контент-план під будь-яку нішу", price: "$300", bonus: true },
  { item: "Q&A з розбором кейса особисто з Владом (тариф 3 міс)", price: "$500/год", bonus: true },
]

const bonuses_uk: readonly Bonus[] = [
  {
    title: "Бонус #1 — Joker Speaker: Стас Цис",
    desc: "Закритий ефір з контент-маркетингу та YouTube. Як вибудувати систему виробництва контенту — без копірайтера й SMM-менеджера.",
    note: "Ринкова вартість: $500 · Включено в будь-який тариф",
  },
  {
    title: "Бонус #2 — Joker Speaker: Ден (Clowbot)",
    desc: "Закритий ефір по Clowbot: автоматизація продажів і клієнтської комунікації. Як прибрати ручну обробку вхідних, зберегти особистий тон і не втратити жодного ліда.",
    note: "Ринкова вартість: $500 · Включено в будь-який тариф",
  },
  {
    title: "Бонус #3 — Готовий контент-план під будь-яку нішу",
    desc: "Готовий план: теми, формати, прогрів, Telegram-пости, лендінги. Завантажуєш → адаптуєш під нішу → запускаєш.",
    note: "Ринкова вартість: $300 · Включено в будь-який тариф",
  },
  {
    title: "Бонус #4 — Q&A з особистим розбором кейса",
    desc: "Раз на місяць — живий дзвінок з Владом і командою. Приходиш зі своєю задачею, розбираємо її прямо на дзвінку: який інструмент застосувати, де помилка, як масштабувати.",
    note: "Ринкова вартість: $500/год · Тільки в 3-місячному тарифі",
    premium: true,
  },
]

const tariffs_uk: readonly Tariff[] = [
  {
    label: "Підписка · 1 місяць",
    price: "$79",
    priceNote: "/міс",
    extraFeatures: [{ label: "Q&A та стратсесії не входять", included: false }],
    cta: { text: "Вступити за $79" },
  },
  {
    label: "Підписка · 3 місяці",
    price: "$150",
    priceNote: undefined,
    oldPrice: "$237",
    discountBadge: "-37%",
    highlighted: true,
    extraFeatures: [
      { label: "Q&A та стратсесії: особистий розбір кейса з Владом", included: true },
      { label: "Пріоритетний доступ до матеріалів", included: true },
    ],
    cta: { text: "Взяти 3 місяці за $150", highlighted: true },
  },
]

const monthlyFeatures_uk = [
  "2 стріми/міс із записом",
  "Щотижневий стек нейронок",
  "Готові AI-асистенти та воркфлоу",
  "Закрита група практиків",
  "Joker Speaker: Стас Цис",
  "Joker Speaker: Ден (Clowbot)",
  "Готовий контент-план",
] as const

export function getPricing(lang: Lang) {
  return lang === "uk" ? {
    valueStack: valueStack_uk,
    bonuses: bonuses_uk,
    tariffs: tariffs_uk,
    monthlyFeatures: monthlyFeatures_uk,
  } : {
    valueStack: valueStack_ru,
    bonuses: bonuses_ru,
    tariffs: tariffs_ru,
    monthlyFeatures: monthlyFeatures_ru,
  }
}
