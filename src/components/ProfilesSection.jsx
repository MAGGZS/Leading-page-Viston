import React, { useState } from 'react';
import { Building, ClipboardCheck, ShieldCheck, Wrench, Eye, Check, ArrowRight } from 'lucide-react';

export default function ProfilesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const roles = [
    {
      id: 'manager',
      roleCode: 'MANAGER',
      icon: <Building size={22} />,
      title: 'Gestor Predial',
      subtitle: 'Administração de Prédios & Colaboradores',
      headline: 'Visão executiva multicondomínios e governança patrimonial centralizada',
      description: 'O Gestor cadastra novos edifícios, gera chaves de compartilhamento para sua equipe, aprova a entrada de colaboradores e acompanha os indicadores de manutenção e vistorias de toda a sua carteira em um único painel.',
      highlights: [
        'Cadastro e parametrização de múltiplos prédios e pavimentos',
        'Gestão e aprovação de colaboradores através de chave de compartilhamento',
        'Visão em tempo real de chamados abertos e concluídos',
        'Dossiês consolidados para prestação de contas com o conselho'
      ],
      tag: 'Painel Desktop'
    },
    {
      id: 'inspector',
      roleCode: 'INSPECTOR',
      icon: <ClipboardCheck size={22} />,
      title: 'Inspetor de Campo',
      subtitle: 'Vistoria Andar por Andar no Mobile',
      headline: 'Roteiros de inspeção rápidos e padronizados direto na ponta dos dedos',
      description: 'O Inspetor percorre o edifício realizando vistorias guiadas por checklists técnicos. Registra evidências fotográficas imediatas com apontamento de severidade (Baixa, Média, Alta ou Crítica) e salva rascunhos automaticamente.',
      highlights: [
        'Checklists técnicos divididos por pavimentos e áreas comuns',
        'Modo rascunho com salvamento automático para garagens e subsolos',
        'Registro fotográfico imediato com anotações e severidade',
        'Abertura automática de chamado caso seja detectada avaria grave'
      ],
      tag: 'App Mobile'
    },
    {
      id: 'moderador',
      roleCode: 'MODERADOR',
      icon: <ShieldCheck size={22} />,
      title: 'Moderador',
      subtitle: 'Triagem & Fila Kanban de Chamados',
      headline: 'A torre de controle que despacha e valida os chamados do condomínio',
      description: 'O Moderador recebe todos os chamados originados pelas vistorias ou reportados pela comunidade. É ele quem tria as ocorrências, evita duplicidades, direciona a ordem de serviço para o técnico correto e valida a finalização.',
      highlights: [
        'Fila de chamados em Kanban (Novos, Em Processamento, Finalizados)',
        'Direcionamento de ordem de serviço para o técnico especialista',
        'Validação técnica da evidência fotográfica antes do encerramento',
        'Controle do tempo de resposta (SLA) para evitar atrasos'
      ],
      tag: 'Desktop & Mobile'
    },
    {
      id: 'responsavel',
      roleCode: 'RESPONSAVEL',
      icon: <Wrench size={22} />,
      title: 'Responsável Técnico',
      subtitle: 'Execução de Ordens de Serviço',
      headline: 'Um aplicativo sem burocracia para quem está com a mão na massa',
      description: 'O Responsável recebe em seu smartphone a lista de chamados designados para ele. Ele visualiza a foto do problema, o local exato do prédio, atende a ocorrência e encerra anexando a foto de comprovação do reparo finalizado.',
      highlights: [
        'Lista diária de chamados priorizados por severidade',
        'Informação clara do pavimento, local e histórico do chamado',
        'Upload de foto de comprovação do reparo executado',
        'Encerramento do chamado sem papelada'
      ],
      tag: 'App Mobile'
    },
    {
      id: 'viewer',
      roleCode: 'VIEWER',
      icon: <Eye size={22} />,
      title: 'Visualizador',
      subtitle: 'Consulta de Relatórios & Histórico',
      headline: 'Transparência total para síndicos, conselheiros e auditorias',
      description: 'O Visualizador possui permissão de leitura para consultar o histórico ampliado de todas as vistorias, laudos fotográficos e relatórios de manutenções realizadas no edifício ao longo do tempo.',
      highlights: [
        'Acesso ao histórico completo e vitalício do edifício',
        'Visualização e exportação de laudos fotográficos em PDF',
        'Acompanhamento do índice de resolutividade do condomínio',
        'Consulta sem permissão de edição acidental'
      ],
      tag: 'Painel Desktop'
    }
  ];

  const current = roles[activeTab];

  return (
    <section id="papeis" style={{ padding: '100px 0', background: '#0B0B0B', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">

        {/* Cabeçalho */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px' }}>
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
            Matriz de Permissões & Papéis
          </div>

          <h2 style={{ fontSize: 'clamp(30px, 4.2vw, 46px)', color: '#FFFFFF', marginBottom: '18px', fontWeight: 800 }}>
            Uma Plataforma, Perfis Específicos para Cada Necessidade
          </h2>

          <p style={{ fontSize: '16.5px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
            No Viston, as permissões são estruturadas por prédio. Quem vistoria tem uma interface de campo ágil; 
            quem gerencia tem ferramentas analíticas profundas.
          </p>
        </div>

        {/* Seletor de Papéis (Tabs) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px',
            marginBottom: '40px'
          }}
        >
          {roles.map((r, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={r.id}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: '16px 18px',
                  borderRadius: '16px',
                  textAlign: 'left',
                  border: '1.5px solid',
                  borderColor: isActive ? '#F5C518' : 'rgba(255, 255, 255, 0.08)',
                  background: isActive ? 'rgba(245, 197, 24, 0.1)' : '#141414',
                  boxShadow: isActive ? '0 0 25px rgba(245, 197, 24, 0.15)' : 'none',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: isActive ? '#F5C518' : '#222222',
                    color: isActive ? '#000000' : 'rgba(255, 255, 255, 0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {r.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)' }}>
                    {r.title}
                  </h4>
                  <span style={{ fontSize: '11.5px', color: isActive ? '#F5C518' : 'rgba(255, 255, 255, 0.45)', fontWeight: 600 }}>
                    {r.roleCode}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Card Detalhado do Papel Ativo */}
        <div
          style={{
            background: 'linear-gradient(145deg, #161616 0%, #111111 100%)',
            borderRadius: '26px',
            padding: '50px 44px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '44px',
            alignItems: 'center'
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#F5C518',
                color: '#000000',
                padding: '4px 14px',
                borderRadius: '9999px',
                fontSize: '11px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '18px'
              }}
            >
              <span>{current.tag}</span>
              <span>•</span>
              <span>{current.roleCode}</span>
            </div>

            <h3 style={{ fontSize: 'clamp(22px, 2.6vw, 32px)', color: '#FFFFFF', fontWeight: 800, marginBottom: '16px' }}>
              {current.headline}
            </h3>

            <p style={{ fontSize: '15.5px', color: 'rgba(255, 255, 255, 0.68)', lineHeight: 1.6, marginBottom: '32px' }}>
              {current.description}
            </p>

            <a href="#demonstracao" className="btn-gold" style={{ padding: '13px 28px', fontSize: '15px' }}>
              <span>Ver Demonstração de {current.title}</span>
              <ArrowRight size={16} />
            </a>
          </div>

          <div
            style={{
              background: '#1A1A1A',
              borderRadius: '20px',
              padding: '36px 32px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          >
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '22px' }}>
              O que está incluído neste perfil:
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {current.highlights.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'rgba(245, 197, 24, 0.15)',
                      color: '#F5C518',
                      border: '1px solid rgba(245, 197, 24, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.82)', fontWeight: 500, lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
