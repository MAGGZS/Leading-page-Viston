import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import TwoSidesShowcase from './components/TwoSidesShowcase';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="viston-landing-page">
      <Navbar />
      <main>
        {/* Bloco 1: Hero com 3D Hand Mockup */}
        <Hero />
        
        {/* Bloco 2: A Resolução em 1 Olhar (Antes caótico vs Depois com Viston) */}
        <ProblemSolution />
        
        {/* Bloco 3: Campo & Gestão (Smartphone em campo vs Desktop de gestão + Mockups Isométricos 3D) */}
        <TwoSidesShowcase />
        
        {/* Bloco 4: Planos & Licenças (3 Cards Fictícios) */}
        <Pricing />
        
        {/* Bloco 5: Chamada Final de Apresentação / Contato (15 minutos) */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}


