'use client'

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Page error:", error)
  }, [error])

  return (
    <div className="min-h-dvh flex items-center justify-center bg-black px-6">
      <div className="text-center max-w-md">
        <p className="text-rose-400 text-sm font-medium mb-4">Что-то пошло не так</p>
        <h1 className="text-2xl font-bold text-white mb-4">Ошибка загрузки страницы</h1>
        <p className="text-neutral-400 text-sm mb-8">
          Попробуйте обновить страницу. Если проблема повторяется — напишите нам.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold px-6 py-3 transition-colors"
        >
          Попробовать снова
        </button>
      </div>
    </div>
  )
}
