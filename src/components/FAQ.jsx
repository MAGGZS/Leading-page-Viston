import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Como o Viston atende administradoras com dezenas de condomínios?",
      a: "O Viston possui arquitetura multicondomínios nativa. O Gestor tem acesso a uma visão executiva consolidada de todos os prédios da carteira, podendo alternar entre eles em 1 clique, gerenciar colaboradores de cada edifício e consultar a fila de chamados global ou individual."
    },
    {
      q: "O que é a Chave de Compartilhamento de Prédio do Viston?",
      a: "É o mecanismo prático para associar novos colaboradores ao edifício. O Gestor gera a chave e a fornece ao inspetor ou técnico. Ao informar a chave, o colaborador solicita entrada no prédio e o Gestor define o papel que ele terá naquele local (Inspetor, Moderador, Responsável ou Visualizador)."
    },
    {
      q: "Como funciona a vistoria em garagens ou subsolos sem sinal de internet?",
      a: "O aplicativo conta com salvamento de rascunho em tempo real. O inspetor pode preencher os checklists dos andares, fotografar inconformidades e registrar observações técnicas mesmo sem conexão. Assim que o aparelho reencontra conexão, os dados são sincronizados com a nuvem."
    },
    {
      q: "Como são gerados e compartilhados os laudos das vistorias?",
      a: "Com apenas um clique, o sistema compila todas as informações da vistoria em um laudo fotográfico técnico em PDF. O documento inclui data, hora, responsável, fotos antes/depois e severidade de cada inconformidade, pronto para ser anexado a atas de assembleia ou auditorias."
    },
    {
      q: "É possível personalizar os checklists por tipo de equipamento ou condomínio?",
      a: "Sim. O Viston permite estruturar checklists específicos para os diferentes subsistemas prediais: bombas de recalque, reservatórios de água potável, geradores, sistemas de combate a incêndio, elevadores, coberturas, fachadas e áreas de lazer."
    }
  ];

  return (
    <section id="faq" style={{ padding: '100px 0', background: '#0F0F0F', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#F5C518',
              background: 'rgba(245, 197, 24, 0.08)',
              border: '1px solid rgba(245, 197, 24, 0.25)',
              padding: '4px 16px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '18px'
            }}
          >
            Tire Suas Dúvidas
          </div>

          <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 42px)', color: '#FFFFFF', marginBottom: '16px', fontWeight: 800 }}>
            Perguntas Frequentes sobre o Viston
          </h2>

          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.65)' }}>
            Esclarecimentos diretos sobre a implantação, rotinas de vistoria e gestão de chamados.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  border: '1px solid',
                  borderColor: isOpen ? 'rgba(245, 197, 24, 0.4)' : 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '18px',
                  background: isOpen ? '#181818' : '#141414',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '22px 26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    gap: '16px'
                  }}
                >
                  <span style={{ fontSize: '16px', fontWeight: 700, color: isOpen ? '#F5C518' : '#FFFFFF' }}>
                    {item.q}
                  </span>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      color: isOpen ? '#F5C518' : 'rgba(255, 255, 255, 0.4)'
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 26px 24px', fontSize: '15px', color: 'rgba(255, 255, 255, 0.68)', lineHeight: 1.6 }}>
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
