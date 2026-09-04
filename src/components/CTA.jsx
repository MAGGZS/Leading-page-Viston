import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [condos, setCondos] = useState('1-5');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="demonstracao" style={{ padding: '80px 0 100px', background: '#FFFFFF', borderTop: '1px solid var(--color-line)' }}>
      <div className="container">
        
        {/* Bloco de Apresentação Direto (Sem brilhos artificiais) */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            background: '#101317',
            borderRadius: '16px',
            padding: '52px 40px',
            color: '#FFFFFF',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <span
            style={{
              display: 'inline-block',
              fontSize: '11.5px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-accent)',
              marginBottom: '14px'
            }}
          >
            Apresentação Prática de 15 Minutos
          </span>

          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#FFFFFF', fontWeight: 600, marginBottom: '14px', lineHeight: 1.2 }}>
            Pronto para profissionalizar a vistoria do seu patrimônio?
          </h2>

          <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.65)', maxWidth: '580px', margin: '0 auto 32px', lineHeight: 1.6 }}>
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
            <form onSubmit={handleSubmit} style={{ maxWidth: '540px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                <input
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: '#1A1D23',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '13.5px',
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
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: '#1A1D23',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '13.5px',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <select
                  value={condos}
                  onChange={(e) => setCondos(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '12px 14px',
                    borderRadius: '12px',
                    background: '#1A1D23',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '13.5px',
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
                    padding: '12px 24px',
                    fontSize: '14px',
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
