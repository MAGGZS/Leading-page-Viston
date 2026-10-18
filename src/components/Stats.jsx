import React from 'react';
import { Clock, TrendingUp, CheckCheck, ShieldCheck } from 'lucide-react';
import SpotlightCard from './react-bits/SpotlightCard';
import CountUpTicker from './react-bits/CountUpTicker';

export default function Stats() {
  const metrics = [
    {
      to: 70,
      suffix: '%',
      label: "Mais Rapidez em Vistorias",
      desc: "Checklists padronizados no celular com laudo fotográfico gerado na hora.",
      icon: <Clock size={20} color="#F5C518" />
    },
    {
      to: 85,
      suffix: '%',
      label: "Menos Ruídos no WhatsApp",
      desc: "Fila Kanban centralizada que elimina mensagens soltas e demandas esquecidas.",
      icon: <TrendingUp size={20} color="#F5C518" />
    },
    {
      to: 100,
      suffix: '%',
      label: "Operação Offline em Subsolos",
      desc: "Gravação local que não trava em garagens e sincroniza ao reconectar.",
      icon: <CheckCheck size={20} color="#F5C518" />
    },
    {
      to: 100,
      suffix: '%',
      label: "Conformidade ABNT NBR 5674",
      desc: "Rotina técnica documentada que resguarda a segurança jurídica do condomínio.",
      icon: <ShieldCheck size={20} color="#F5C518" />
    }
  ];

  return (
    <section style={{ padding: 'clamp(56px, 7vh, 84px) 0', background: '#0B0B0B', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto clamp(32px, 5vh, 48px)' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#F5C518',
              marginBottom: '10px',
            }}
          >
            Impacto Comprovado
          </span>

          <h3 style={{ fontSize: 'clamp(24px, 2.8vw, 36px)', color: '#FFFFFF', fontWeight: 600, margin: '0 0 10px 0' }}>
            Resultados mensuráveis na rotina predial
          </h3>
          <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.65)', margin: 0 }}>
            Métricas de condomínios e administradoras que padronizaram suas vistorias com o Viston:
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px'
          }}
        >
          {metrics.map((m, idx) => (
            <SpotlightCard
              key={idx}
              style={{
                padding: '24px 20px',
                borderRadius: '14px',
                background: '#131416',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span
                  style={{
                    fontSize: '40px',
                    fontWeight: 700,
                    color: '#F5C518',
                    letterSpacing: '-0.04em',
                    lineHeight: 1
                  }}
                >
                  <CountUpTicker to={m.to} suffix={m.suffix} duration={1600} />
                </span>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(245, 197, 24, 0.1)',
                    border: '1px solid rgba(245, 197, 24, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {m.icon}
                </div>
              </div>

              <h4 style={{ fontSize: '15.5px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>
                {m.label}
              </h4>

              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5, margin: 0 }}>
                {m.desc}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
