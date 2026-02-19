export default function PolicyPage() {
  return (
    <main className="bg-black min-h-screen px-8 md:px-16 py-16">
      <div className="max-w-3xl">
        <a href="/" className="text-rose-400 text-sm hover:underline mb-8 inline-block">← Назад</a>
        <h1 className="text-3xl font-bold text-white mb-8">Политика конфиденциальности</h1>
        <div className="text-neutral-400 space-y-6 leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">1. Общие положения</h2>
            <p>Настоящая Политика конфиденциальности описывает порядок сбора, использования и защиты персональных данных пользователей сервиса «Низшая Лига» (далее — «Сервис»).</p>
            <p className="mt-2">Используя Сервис, вы соглашаетесь с условиями данной Политики.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">2. Какие данные мы собираем</h2>
            <p>При оплате и регистрации мы можем собирать: адрес электронной почты, имя или никнейм, данные об оплате (обрабатываются платёжным провайдером, мы не храним данные карт).</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">3. Цели использования данных</h2>
            <p>Персональные данные используются для: предоставления доступа к материалам, связи с пользователем, обработки платежей и возвратов, улучшения качества сервиса.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">4. Передача данных третьим лицам</h2>
            <p>Мы не продаём и не передаём персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством, а также платёжным провайдерам для обработки транзакций.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">5. Хранение и защита данных</h2>
            <p>Данные хранятся на защищённых серверах. Мы принимаем разумные меры для предотвращения несанкционированного доступа, изменения или уничтожения данных.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">6. Файлы cookie</h2>
            <p>Сервис может использовать файлы cookie для аналитики и улучшения пользовательского опыта. Вы можете отключить cookie в настройках браузера.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">7. Права пользователя</h2>
            <p>Вы вправе запросить удаление своих персональных данных, направив запрос на электронную почту Сервиса. Запрос обрабатывается в течение 10 рабочих дней.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">8. Изменения политики</h2>
            <p>Мы оставляем за собой право обновлять данную Политику. Актуальная версия всегда доступна на данной странице.</p>
          </section>

        </div>
      </div>
    </main>
  )
}
