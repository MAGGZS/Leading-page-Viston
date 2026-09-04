import React from 'react';
import { 
  ClipboardCheck, 
  Kanban, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Building, 
  Camera, 
  Clock, 
  FileCheck2 
} from 'lucide-react';
import MobileMockup from './MobileMockup';

export default function Features() {
  return (
    <section id="vistorias" style={{ padding: '100px 0', background: '#0F0F0F', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">

        {/* Cabeçalho da Seção */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 80px' }}>
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
            Arquitetura Operacional
          </div>

          <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 46px)', color: '#FFFFFF', marginBottom: '18px', fontWeight: 800 }}>
            Tecnologia de Ponta a Ponta: Do Celular ao Painel Executivo
          </h2>

          <p style={{ fontSize: '16.5px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
            O Viston foi construído para quem está em campo inspecionando e para quem precisa de dados limpos 
            para tomar decisões de investimento e manutenção predial.
          </p>
        </div>

        {/* Bloco 1: Vistorias Andar por Andar */}
        <div
          style={{
            background: '#141414',
            borderRadius: '28px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '52px 44px',
            marginBottom: '48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}
        >
          <div>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(245, 197, 24, 0.12)',
                border: '1px solid rgba(245, 197, 24, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F5C518',
                marginBottom: '22px'
              }}
            >
              <ClipboardCheck size={26} />
            </div>

            <span style={{ fontSize: '13px', fontWeight: 700, color: '#F5C518', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Módulo Mobile de Vistoria
            </span>

            <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 34px)', color: '#FFFFFF', margin: '10px 0 16px', fontWeight: 800 }}>
              Inspeção Técnica Andar por Andar
            </h3>

            <p style={{ fontSize: '15.5px', color: 'rgba(255, 255, 255, 0.68)', lineHeight: 1.6, marginBottom: '26px' }}>
              O inspetor percorre o edifício pavimento por pavimento. Cada área comum, casa de bombas, 
              quadro elétrico ou cobertura tem seu checklist técnico normativo. Em caso de anomalia, 
              o sistema exige foto da evidência e classificação da severidade.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '34px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)' }}>
                <CheckCircle2 size={18} color="#F5C518" />
                <span>Navegação sequencial estruturada por pavimentos e áreas técnicas</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)' }}>
                <CheckCircle2 size={18} color="#F5C518" />
                <span>Modo rascunho: continue a vistoria mesmo em garagens sem sinal</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)' }}>
                <CheckCircle2 size={18} color="#F5C518" />
                <span>Geração automática do laudo fotográfico e histórico ampliado</span>
              </li>
            </ul>

            <a href="#demonstracao" className="btn-ghost-gold" style={{ padding: '11px 24px', fontSize: '14px' }}>
              <span>Conhecer Checklist de Campo</span>
              <ArrowRight size={15} />
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MobileMockup
              size="default"
              title="Vistoria Técnica de Pavimento"
              subtitle="Formulário andar por andar, itens de inspeção e anexo de fotos"
              badge="Inspetor de Campo"
            />
          </div>
        </div>

        {/* Bloco 2: Kanban de Chamados e Ocorrências */}
        <div
          style={{
            background: 'linear-gradient(145deg, #181818 0%, #111111 100%)',
            borderRadius: '28px',
            border: '1px solid rgba(245, 197, 24, 0.2)',
            padding: '52px 44px',
            marginBottom: '48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            boxShadow: '0 20px 45px rgba(0,0,0,0.6)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', order: 2 }} className="feature-flip-mockup">
            <MobileMockup
              size="default"
              title="Quadro de Chamados"
              subtitle="Colunas: Novos, Em Processamento e Finalizados com SLA"
              badge="Kanban Viston"
            />
          </div>

          <div style={{ order: 1 }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(245, 197, 24, 0.12)',
                border: '1px solid rgba(245, 197, 24, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F5C518',
                marginBottom: '22px'
              }}
            >
              <Kanban size={26} />
            </div>

            <span style={{ fontSize: '13px', fontWeight: 700, color: '#F5C518', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Gestão de Ocorrências
            </span>

            <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 34px)', color: '#FFFFFF', margin: '10px 0 16px', fontWeight: 800 }}>
              Fila Kanban: Novos, Em Processamento e Finalizados
            </h3>

            <p style={{ fontSize: '15.5px', color: 'rgba(255, 255, 255, 0.68)', lineHeight: 1.6, marginBottom: '26px' }}>
              Toda ocorrência identificada em vistoria ou aberta por moradores entra automaticamente na fila. 
              O quadro Kanban permite acompanhar o ciclo de vida completo do reparo, com histórico imutável 
              de comentários, prazos de atendimento e aprovações.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '34px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)' }}>
                <CheckCircle2 size={18} color="#F5C518" />
                <span>Notificações em tempo real a cada avanço no chamado</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)' }}>
                <CheckCircle2 size={18} color="#F5C518" />
                <span>Comprovação da finalização com fotos de Antes e Depois</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)' }}>
                <CheckCircle2 size={18} color="#F5C518" />
                <span>Filtros avançados por edifício, categoria, severidade e técnico</span>
              </li>
            </ul>

            <a href="#demonstracao" className="btn-gold" style={{ padding: '11px 26px', fontSize: '14px' }}>
              <span>Experimentar Fila Kanban</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Bloco 3: Triagem do Moderador & Painel do Gestor */}
        <div
          style={{
            background: '#141414',
            borderRadius: '28px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '52px 44px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}
        >
          <div>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(245, 197, 24, 0.12)',
                border: '1px solid rgba(245, 197, 24, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F5C518',
                marginBottom: '22px'
              }}
            >
              <Users size={26} />
            </div>

            <span style={{ fontSize: '13px', fontWeight: 700, color: '#F5C518', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Moderação & Despacho
            </span>

            <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 34px)', color: '#FFFFFF', margin: '10px 0 16px', fontWeight: 800 }}>
              Triagem Rápida e Atribuição de Responsáveis
            </h3>

            <p style={{ fontSize: '15.5px', color: 'rgba(255, 255, 255, 0.68)', lineHeight: 1.6, marginBottom: '26px' }}>
              No Viston, a figura do <strong>Moderador</strong> atua como a torre de controle: analisa chamados, 
              evita duplicidades, aprova orçamentos preliminares e despacha para o <strong>Responsável Técnico</strong> 
              adequado.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '34px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)' }}>
                <CheckCircle2 size={18} color="#F5C518" />
                <span>Despacho de ordens de serviço por especialidade (elétrica, hidráulica, pintura)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)' }}>
                <CheckCircle2 size={18} color="#F5C518" />
                <span>Chaves de compartilhamento de prédio para inclusão segura de novos colaboradores</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)' }}>
                <CheckCircle2 size={18} color="#F5C518" />
                <span>Visão multicondomínios para administradoras com carteiras de dezenas de edifícios</span>
              </li>
            </ul>

            <a href="#demonstracao" className="btn-ghost-gold" style={{ padding: '11px 24px', fontSize: '14px' }}>
              <span>Ver Painel do Gestor</span>
              <ArrowRight size={15} />
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MobileMockup
              size="default"
              title="Triagem de Chamado"
              subtitle="Encaminhamento para responsável e validação de encerramento"
              badge="Painel do Moderador"
            />
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .feature-flip-mockup {
            order: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
