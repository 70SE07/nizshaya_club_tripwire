import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Низшая Лига — AI-клуб'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #171717 50%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Rose accent glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(225,29,72,0.15) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#e11d48',
              display: 'flex',
            }}
          />
          <span style={{ color: '#fb7185', fontSize: '24px' }}>
            Стримы каждую неделю
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: '#fafafa',
            lineHeight: 1.1,
            marginBottom: '24px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>Из низшей лиги</span>
          <span>в высшую.</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '28px',
            color: '#a3a3a3',
            maxWidth: '700px',
            lineHeight: 1.5,
            display: 'flex',
          }}
        >
          Клуб в котором не обсуждают нейросети — а зарабатывают на них.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
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
        </div>
      </div>
    ),
    { ...size }
  )
}
