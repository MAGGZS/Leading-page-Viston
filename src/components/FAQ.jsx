import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from './Reveal';

const FAQS = [
  {
    q: 'Preciso pagar para começar?',
    a: 'Não. Toda conta de gestor nasce no plano Livre, com 1 prédio e sem prazo de expiração. Quando a equipe crescer, você assina o Essencial ou o Pro de dentro do app.',
  },
  {
    q: 'Inspetor e responsável pagam?',
    a: 'Não. Quem assina é quem administra o prédio. As contas de quem vistoria, atende chamado ou só acompanha são gratuitas, e no Essencial e no Pro não têm limite de quantidade.',
  },
  {
    q: 'Como a equipe entra no prédio?',
    a: 'Pela chave de compartilhamento do prédio, por QR Code ou por link direto. A pessoa pede acesso, o gestor aprova e ela entra como visualizadora. Depois o gestor define o papel: inspetor, moderador ou responsável.',
  },
  {
    q: 'E se o celular perder sinal ou a tela fechar no meio da vistoria?',
    a: 'O rascunho fica salvo no próprio aparelho enquanto a vistoria é preenchida, e sobrevive a uma ligação ou à tela fechada. A vistoria é enviada concluída, de uma vez, quando houver conexão, e um reenvio não cria vistoria duplicada.',
  },
  {
    q: 'Como funciona o relatório?',
    a: 'A unidade do relatório é o dia, não a vistoria. Se três inspetores passarem pelo mesmo prédio no mesmo dia, sai um documento só, com os três nomes. A planilha em Excel fica em armazenamento privado e é baixada por link temporário.',
  },
  {
    q: 'Quem fecha o chamado?',
    a: 'Só o moderador. O responsável informa que terminou, e o moderador dá o fechamento, podendo registrar nota de manutenção e custo. O relatório dos chamados do período sai em Word ou CSV.',
  },
  {
    q: 'O plano é por prédio ou por conta?',
    a: 'Por conta de gestor. Os prédios que você cadastra entram nela. O Essencial aceita até 2 prédios extras e o Pro até 20, cobrados por unidade.',
  },
  {
    q: 'O que acontece se eu cancelar?',
    a: 'A assinatura vale até o fim do período pago. Depois a conta volta ao Livre, e os prédios além do limite ficam inativos. Nada é apagado, e tudo volta quando você reassinar.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section">
      <div className="container faq">
        <Reveal className="faq__head">
          <h2 className="h2">Perguntas frequentes</h2>
          <p className="lead">Planos, equipe, vistoria em campo e chamados.</p>
        </Reveal>

        <Reveal className="faq__list" delay={80}>
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="faq__item" data-open={isOpen}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <Plus size={20} strokeWidth={1.75} className="faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className="faq__answer" inert={isOpen ? undefined : ''}>
                  <div><p>{item.a}</p></div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
