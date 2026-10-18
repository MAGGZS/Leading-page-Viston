import React, { useRef, useState } from 'react';
import { Building, ClipboardCheck, ShieldCheck, Wrench, Eye, Check, Smartphone, Laptop } from 'lucide-react';
import Reveal from './Reveal';

const ROLES = [
  {
    id: 'gestor',
    icon: Building,
    title: 'Gestor',
    subtitle: 'Administra prédios e equipe',
    device: 'Computador ou celular',
    deviceIcon: Laptop,
    headline: 'Monta o prédio e decide quem faz o quê',
    description: 'É a conta que assina o plano. Cadastra prédios e andares, aprova quem pede acesso e define o papel de cada pessoa. Não faz vistorias.',
    highlights: ['Cadastro de prédios e andares', 'Aprovação de pedidos de acesso', 'Agenda de vistorias', 'Co-gestores no mesmo prédio'],
  },
  {
    id: 'inspetor',
    icon: ClipboardCheck,
    title: 'Inspetor',
    subtitle: 'Faz a vistoria',
    device: 'Celular',
    deviceIcon: Smartphone,
    headline: 'Percorre o prédio e registra o que encontrou',
    description: 'Preenche andar por andar e envia a vistoria concluída de uma vez. Se a tela fechar no meio, o rascunho continua no aparelho.',
    highlights: ['Ocorrências por andar', 'Rascunho salvo no aparelho', 'Rondas agendadas e prazos', 'Envio protegido contra duplicidade'],
  },
  {
    id: 'moderador',
    icon: ShieldCheck,
    title: 'Moderador',
    subtitle: 'Faz a triagem dos chamados',
    device: 'Computador ou celular',
    deviceIcon: Laptop,
    headline: 'Encaminha, acompanha e fecha',
    description: 'Recebe os chamados abertos pelas vistorias, encaminha ao responsável e é o único que dá o fechamento, com nota e custo.',
    highlights: ['Mesa de chamados', 'Painel com prazos e custos', 'Fechamento com nota e custo', 'Relatório em Word ou CSV'],
  },
  {
    id: 'responsavel',
    icon: Wrench,
    title: 'Responsável',
    subtitle: 'Executa o serviço',
    device: 'Celular',
    deviceIcon: Smartphone,
    headline: 'Atende o chamado e mostra o andamento',
    description: 'Confirma que recebeu, registra cada passo com texto e fotos e avisa quando terminou. Quem fecha o chamado é o moderador.',
    highlights: ['Chamados encaminhados a ele', 'Linha do tempo com fotos', 'Aviso de "aguardando terceiro"', 'Histórico do que já atendeu'],
  },
  {
    id: 'visualizador',
    icon: Eye,
    title: 'Visualizador',
    subtitle: 'Acompanha sem alterar',
    device: 'Computador',
    deviceIcon: Laptop,
    headline: 'Consulta tudo, não altera nada',
    description: 'É o papel de entrada de todo membro aprovado. Vê relatórios, histórico e painéis do prédio até o gestor definir outro papel.',
    highlights: ['Relatórios do dia', 'Histórico de vistorias', 'Mapa de calor', 'Somente leitura'],
  },
];

export default function ProfilesSection() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const role = ROLES[active];
  const DeviceIcon = role.deviceIcon;

  // Navegação por setas entre as abas (padrão WAI-ARIA Tabs).
  const onKeyDown = (e) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (!(e.key in keys)) return;
    e.preventDefault();
    const next = (active + keys[e.key] + ROLES.length) % ROLES.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="perfis" className="section">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="h2">Cada pessoa vê só o que é dela.</h2>
          <p className="lead">O papel vale por prédio: a mesma conta pode vistoriar um e só acompanhar outro.</p>
        </Reveal>

        <Reveal className="roles" delay={80}>
          <div className="roles__tabs" role="tablist" aria-orientation="vertical" aria-label="Perfis de acesso" onKeyDown={onKeyDown}>
            {ROLES.map((r, i) => {
              const Icon = r.icon;
              const selected = i === active;
              return (
                <button
                  key={r.id}
                  ref={(el) => (tabRefs.current[i] = el)}
                  type="button"
                  role="tab"
                  id={`tab-${r.id}`}
                  aria-selected={selected}
                  aria-controls="perfil-painel"
                  tabIndex={selected ? 0 : -1}
                  className="roles__tab"
                  onClick={() => setActive(i)}
                >
                  <span className="roles__tab-icon"><Icon size={18} strokeWidth={1.75} /></span>
                  <span>
                    <span className="roles__tab-title">{r.title}</span>
                    <span className="roles__tab-sub">{r.subtitle}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div id="perfil-painel" role="tabpanel" aria-labelledby={`tab-${role.id}`} className="roles__panel">
            <div key={role.id} className="roles__panel-inner">
              <p className="roles__device">
                <DeviceIcon size={15} strokeWidth={1.75} />
                <span>{role.device}</span>
              </p>
              <h3>{role.headline}</h3>
              <p className="roles__desc">{role.description}</p>
              <ul>
                {role.highlights.map((h) => (
                  <li key={h}>
                    <span className="roles__check"><Check size={13} strokeWidth={2.25} /></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
