import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProofMarquee from './components/SocialProofMarquee';
import ProblemSolution from './components/ProblemSolution';
import HowItWorksGallery from './components/HowItWorksGallery';
import TwoSidesShowcase from './components/TwoSidesShowcase';
import ProfilesSection from './components/ProfilesSection';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Navbar />

      <main id="conteudo">
        {/* Hero dividido: proposta à esquerda, réplica do app à direita */}
        <Hero />
        {/* Faixa de normas e capacidades (única marquee) */}
        <SocialProofMarquee />
        {/* Antes e depois, com cabeçalho fixo à esquerda */}
        <ProblemSolution />
        {/* Galeria em acordeão com fotos */}
        <HowItWorksGallery />
        {/* Mockups à esquerda, campo e gestão à direita */}
        <TwoSidesShowcase />
        {/* Abas verticais dos 5 perfis */}
        <ProfilesSection />
        <Pricing />
        {/* FAQ em duas colunas */}
        <FAQ />
        {/* Fechamento: painel escuro com formulário */}
        <CTA />
      </main>

      <Footer />
    </>
  );
}
