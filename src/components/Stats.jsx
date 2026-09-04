import React from 'react';
import { TrendingUp, Clock, CheckCheck, FileSearch } from 'lucide-react';

export default function Stats() {
  const metrics = [
    {
      value: "70%",
      label: "Mais Rapidez em Vistorias",
      desc: "Inspeções padronizadas andar por andar com laudos fotográficos gerados instantaneamente.",
      icon: <Clock size={22} color="#F5C518" />
    },
    {
      value: "85%",
      label: "Menos Ruídos no WhatsApp",
      desc: "Canal oficial que elimina mensagens soltas fora de hora e cobranças desorganizadas.",
      icon: <TrendingUp size={22} color="#F5C518" />
    },
    {
      value: "100%",
      label: "Rastreabilidade do Prédio",
      desc: "Histórico vitalício de todas as ocorrências, peças trocadas e manutenções preventivas.",
      icon: <CheckCheck size={22} color="#F5C518" />
    },
    {
      value: "Zero",
      label: "Manutenções Esquecidas",
      desc: "Rotina programada de inspeção periódica que evita quebras de alto custo em bombas e elevadores.",
      icon: <FileSearch size={22} color="#F5C518" />
    }
  ];

  return (
    <section style={{ padding: '90px 0', background: '#0B0B0B', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '28px'
          }}
        >
          {metrics.map((m, idx) => (
            <div
              key={idx}
              style={{
                padding: '30px 24px',
                borderRadius: '22px',
                background: '#141414',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span
                  style={{
                    fontSize: '44px',
                    fontWeight: 900,
                    color: '#F5C518',
                    letterSpacing: '-0.04em',
                    lineHeight: 1
                  }}
                >
                  {m.value}
                </span>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(245, 197, 24, 0.1)',
                    border: '1px solid rgba(245, 197, 24, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {m.icon}
                </div>
              </div>

              <h4 style={{ fontSize: '16.5px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                {m.label}
              </h4>

              <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.5 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
