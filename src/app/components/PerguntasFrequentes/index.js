"use client";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import "./styles.scss";
import { useState } from "react";

const accordionData = [
  {
    id: 1,
    title: "Quais serviços ofereço como freelancer?",
    content:
      "Ofereço serviços de desenvolvimento front-end, incluindo a criação de sites responsivos, como landing pages, sites institucionais e e-commerces. Desenvolvo interfaces de usuário modernas e intuitivas, além de realizar integrações com APIs para ampliar as funcionalidades do seu projeto.",
  },
  {
    id: 2,
    title: "Você também cria o design do site?",
    content:
      "Sim, ofereço tanto a criação do layout quanto o desenvolvimento completo do site, garantindo uma solução integrada e personalizada.",
  },
  {
    id: 3,
    title: "Quais são os prazos típicos de entrega?",
    content:
      "O prazo varia conforme a complexidade do projeto, o tipo de site (landing page, e-commerce, institucional) e o número de páginas e elementos a serem desenvolvidos.",
  },
];

const AccordionItem = ({ title, content }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (e) => {
    setActive(!active);
  };

  return (
    <article id="faq" className="accordion-item">
      <button className="accordion-header" onClick={handleToggle}>
        {title}
      </button>
      {active && <p className="accordion-content">{content}</p>}
    </article>
  );
};

const Depoimento = () => {
  return (
    <section className="perguntasFrequentes">
      <div className="container container-flex">
        <article className="perguntasFrequentes-text">
          <h2>
            Perguntas <span>frequentes</span>
          </h2>
          <a href="tel:+5511941078629" aria-label="Ligar para 11 94107-8629">
            Entre em contato para mais informação <MdOutlineArrowRightAlt />
          </a>
        </article>
        <article className="accordion">
          {accordionData.map((item, index) => {
            return (
              <div key={item.id}>
                <div className="accordion-container">
                  <span className="accordion-number">{index + 1}</span>
                  <AccordionItem title={item.title} content={item.content} />
                </div>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Depoimento;
