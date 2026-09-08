import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [condos, setCondos] = useState('1-5');
  const [cardRef, cardInView] = useInView({ threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="demonstracao"
      className="section-viewport-fit"
      style={{ background: '#FFFFFF', borderTop: '1px solid var(--color-line)' }}
    >
      <div className="container">
        
        {/* Bloco de Apresentação Direto (Sem brilhos artificiais) */}
        <div
          ref={cardRef}
          className={`reveal-aperture cta-ambient-card ${cardInView ? 'is-visible' : ''}`}
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            background: '#101317',
            borderRadius: '16px',
            padding: 'clamp(28px, 4.5vh, 48px) clamp(20px, 3.5vw, 42px)',
            color: '#FFFFFF',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <span
            className="reveal-badge-text"
            style={{
              display: 'inline-block',
              fontSize: 'clamp(11px, 0.8vw, 11.5px)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-accent)',
              marginBottom: 'clamp(8px, 1.2vh, 14px)'
            }}
          >
            Apresentação Prática de 15 Minutos
          </span>

          <div className="text-mask-wrapper" style={{ marginBottom: 'clamp(8px, 1.2vh, 14px)' }}>
            <h2 style={{ fontSize: 'clamp(22px, 2.6vw, 36px)', color: '#FFFFFF', fontWeight: 600, margin: 0, lineHeight: 1.18 }}>
              <span className="reveal-text-line line-delay-1">Pronto para profissionalizar a </span>{' '}
              <span className="reveal-text-line line-delay-2">vistoria do seu patrimônio?</span>
            </h2>
          </div>

          <p className="reveal-sub-text" style={{ fontSize: 'clamp(13px, 1vw, 15px)', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '580px', margin: '0 auto clamp(16px, 2.4vh, 28px)', lineHeight: 1.55 }}>
            Veja na prática como estruturar vistorias no smartphone e centralizar chamados em Kanban 
            para o seu condomínio ou administradora.
          </p>

          {submitted ? (
            <div style={{ padding: '24px 0' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'rgba(245, 197, 24, 0.15)',
                  color: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}
              >
                <CheckCircle2 size={28} />
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>
                Solicitação Recebida!
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                Nosso consultor entrará em contato para agendar o horário mais conveniente.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ maxWidth: '540px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 1.2vh, 12px)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(8px, 1.2vh, 12px)' }}>
                <input
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    padding: 'clamp(10px, 1.4vh, 12px) 16px',
                    borderRadius: '12px',
                    background: '#1A1D23',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    padding: 'clamp(10px, 1.4vh, 12px) 16px',
                    borderRadius: '12px',
                    background: '#1A1D23',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: 'clamp(8px, 1.2vh, 12px)', flexWrap: 'wrap' }}>
                <select
                  value={condos}
                  onChange={(e) => setCondos(e.target.value)}
                  style={{
                    flex: 1,
                    padding: 'clamp(10px, 1.4vh, 12px) 14px',
                    borderRadius: '12px',
                    background: '#1A1D23',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                >
                  <option value="1">1 Edifício / Condomínio</option>
                  <option value="2-5">2 a 5 Edifícios</option>
                  <option value="6-20">6 a 20 Edifícios</option>
                  <option value="20+">Mais de 20 Edifícios</option>
                </select>

                <button
                  type="submit"
                  className="btn-gold"
                  style={{
                    padding: 'clamp(10px, 1.4vh, 12px) 24px',
                    fontSize: '13.5px',
                    flexShrink: 0
                  }}
                >
                  <span>Solicitar Contato</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
