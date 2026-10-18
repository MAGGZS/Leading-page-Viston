import React from 'react';
import { X, Check } from 'lucide-react';
import Reveal from './Reveal';

const ROWS = [
  {
    before: 'A ronda vira anotação em papel ou planilha solta, sem padrão entre um inspetor e outro.',
    after: 'Ocorrências registradas por andar',
    detail: 'Tipo, categoria e prioridade em cada item. O status do andar sai da prioridade mais alta.',
  },
  {
    before: 'O problema é avisado num grupo de mensagens e ninguém sabe quem ficou com ele.',
    after: 'Cada ocorrência vira um chamado',
    detail: 'O moderador encaminha ao responsável, acompanha o andamento e é o único que fecha.',
  },
  {
    before: 'A vistoria do mês depende de alguém lembrar de fazer.',
    after: 'Rondas agendadas com prazo',
    detail: 'O gestor escolhe data, andares e inspetor. O lembrete sai na véspera do vencimento.',
  },
  {
    before: 'Montar o relatório do dia toma a tarde de alguém.',
    after: 'Relatório do dia pronto em Excel',
    detail: 'Um documento por dia, com o nome de todos os inspetores que passaram pelo prédio.',
  },
];

export default function ProblemSolution() {
  return (
    <section id="resolucao" className="section">
      <div className="container compare">
        <Reveal className="compare__head">
          <h2 className="h2">Do improviso à rotina técnica documentada.</h2>
          <p className="lead">
            O que muda na manutenção do prédio quando cada vistoria e cada chamado deixam rastro.
          </p>
        </Reveal>

        <ol className="compare__list">
          {ROWS.map((row, i) => (
            <Reveal as="li" key={row.after} className="compare__row" delay={i * 70}>
              <p className="compare__before">
                <X size={16} strokeWidth={1.75} aria-hidden="true" />
                <span><span className="sr-only">Antes: </span>{row.before}</span>
              </p>
              <div className="compare__after">
                <span className="compare__check" aria-hidden="true">
                  <Check size={16} strokeWidth={2} />
                </span>
                <div>
                  <h3>{row.after}</h3>
                  <p>{row.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
