'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="ru" className="dark">
      <body className="bg-black text-white antialiased">
        <div className="min-h-dvh flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <p className="text-rose-400 text-sm font-medium mb-4">Критическая ошибка</p>
            <h1 className="text-2xl font-bold mb-4">Страница не загрузилась</h1>
            <p className="text-neutral-400 text-sm mb-8">
              Попробуйте обновить страницу.
            </p>
            <button
              onClick={reset}
              className="inline-flex items-center justify-center rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold px-6 py-3 transition-colors"
            >
              Обновить
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
