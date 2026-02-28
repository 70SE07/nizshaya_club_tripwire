import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Низшая Лига — закрытое AI комьюнити практиков'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Rose accent glow — top-left like Spotlight on site */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            left: '-100px',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(244,63,94,0.12) 0%, transparent 65%)',
            display: 'flex',
          }}
        />

        {/* Badge — pill like hero badge on site */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '32px',
            background: 'rgba(244,63,94,0.1)',
            border: '1.5px solid rgba(244,63,94,0.2)',
            borderRadius: '9999px',
            padding: '8px 20px',
            alignSelf: 'flex-start',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#f43f5e',
              display: 'flex',
            }}
          />
          <span style={{ color: '#fb7185', fontSize: '22px', fontWeight: 500 }}>
            Закрытое AI комьюнити практиков
          </span>
        </div>

        {/* Title — white like hero h1 */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: '#fafafa',
            lineHeight: 1.1,
            marginBottom: '28px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>Первый результат —</span>
          <span style={{
            background: 'linear-gradient(to right, #fb7185, #ec4899)',
            backgroundClip: 'text',
            color: 'transparent',
          }}>уже на первом стриме.</span>
        </div>

        {/* Subtitle — body color */}
        <div
          style={{
            fontSize: '28px',
            color: '#a3a3a3',
            maxWidth: '700px',
            lineHeight: 1.5,
            display: 'flex',
          }}
        >
          Никакой теории — готовые связки, ассистенты и воркфлоу. Берёшь, копируешь, зарабатываешь.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            right: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              fontSize: '22px',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #fb7185, #ec4899)',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'flex',
            }}
          >
            nizshaya.club
          </span>

          {/* CTA button — rose→pink gradient like site */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(to right, #f43f5e, #db2777)',
              color: '#ffffff',
              fontSize: '20px',
              fontWeight: 600,
              padding: '12px 28px',
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(244,63,94,0.25)',
            }}
          >
            Вступить от $50 / мес
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
