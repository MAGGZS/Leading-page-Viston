import React from 'react';
import AccordionGallery from './AccordionGallery';
import Reveal from './Reveal';

export default function HowItWorksGallery() {
  return (
    <section id="como-funciona" className="section">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Como funciona</p>
          <h2 className="h2">Da ronda agendada ao chamado fechado.</h2>
          <p className="lead">Cinco etapas, cada uma com quem faz e onde faz.</p>
        </Reveal>

        <Reveal delay={80}>
          <AccordionGallery />
        </Reveal>
      </div>
    </section>
  );
}
