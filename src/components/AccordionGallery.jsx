import React, { useState } from 'react';
import { CalendarClock, Layers, Kanban, Wrench, FileCheck2, Check, Smartphone, Laptop } from 'lucide-react';

const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=70`;

const ITEMS = [
  {
    id: 'agenda',
    label: 'Agenda de vistorias',
    icon: CalendarClock,
    device: 'Gestor',
    deviceIcon: Laptop,
    headline: 'A ronda já nasce com data e prazo',
    summary: 'O gestor agenda a vistoria, escolhe os andares e o inspetor. Na véspera do prazo, o inspetor recebe o lembrete.',
    points: ['Data, prazo e andares da ronda', 'Inspetor definido ou em aberto', 'Lembrete automático antes de vencer'],
    image: img('photo-1503387762-592deb58ef4e'),
  },
  {
    id: 'vistoria',
    label: 'Vistoria andar por andar',
    icon: Layers,
    device: 'Inspetor, no celular',
    deviceIcon: Smartphone,
    headline: 'Cada andar com suas ocorrências',
    summary: 'O inspetor percorre o prédio e registra o que encontrou: tipo, categoria, prioridade e descrição. Andar sem problema fica OK.',
    points: ['13 tipos de manutenção', 'Preventiva, corretiva ou emergencial', 'Rascunho salvo se a tela fechar'],
    image: img('photo-1590674899484-d5640e854abe'),
  },
  {
    id: 'triagem',
    label: 'Triagem de chamados',
    icon: Kanban,
    device: 'Moderador, no computador',
    deviceIcon: Laptop,
    headline: 'O moderador decide quem resolve',
    summary: 'Cada ocorrência enviada chega como chamado aberto. O moderador encaminha ao responsável certo e acompanha a fila.',
    points: ['Novos, em processamento e finalizados', 'Encaminhamento ao responsável', 'Painel com prazos e custos'],
    image: img('photo-1486312338219-ce68d2c6f44d'),
  },
  {
    id: 'execucao',
    label: 'Execução do serviço',
    icon: Wrench,
    device: 'Responsável, no celular',
    deviceIcon: Smartphone,
    headline: 'O andamento fica registrado',
    summary: 'O responsável confirma que recebeu, registra cada passo com texto e fotos e avisa quando terminou.',
    points: ['Linha do tempo com fotos', 'Aviso de "aguardando terceiro"', 'Conclusão informada pelo celular'],
    image: img('photo-1621905251189-08b45d6a269e'),
  },
  {
    id: 'fechamento',
    label: 'Fechamento e relatórios',
    icon: FileCheck2,
    device: 'Moderador e gestor',
    deviceIcon: Laptop,
    headline: 'Fechado, com nota e custo',
    summary: 'Só o moderador fecha o chamado, com nota de manutenção e custo. Tudo alimenta o histórico e os relatórios.',
    points: ['Relatório do dia em Excel', 'Relatório de chamados em Word ou CSV', 'Histórico e mapa de calor'],
    image: img('photo-1486406146926-c627a92ad1ab'),
  },
];

export default function AccordionGallery() {
  const [active, setActive] = useState(0);

  return (
    <div className="acc">
      {ITEMS.map((item, i) => {
        const isActive = active === i;
        const Icon = item.icon;
        const DeviceIcon = item.deviceIcon;
        return (
          <div
            key={item.id}
            className="acc__panel"
            data-active={isActive}
            onMouseEnter={() => setActive(i)}
          >
            <img className="acc__img" src={item.image} alt="" loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
            <div className="acc__scrim" />

            <button
              type="button"
              className="acc__trigger"
              aria-expanded={isActive}
              aria-controls={`acc-${item.id}`}
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="acc__icon"><Icon size={19} strokeWidth={1.75} /></span>
              <span className="acc__label">{item.label}</span>
            </button>

            <div id={`acc-${item.id}`} className="acc__body" aria-hidden={!isActive}>
              <p className="acc__device">
                <DeviceIcon size={14} strokeWidth={1.75} />
                <span>{item.device}</span>
              </p>
              <h3>{item.headline}</h3>
              <p className="acc__summary">{item.summary}</p>
              <ul>
                {item.points.map((pt) => (
                  <li key={pt}>
                    <Check size={15} strokeWidth={2} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
