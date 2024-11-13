import {
  MdOutlineArrowRightAlt,
  MdOutlineContactPage,
  MdImageSearch,
  MdCode,
  MdDesignServices,
} from "react-icons/md";
import "./styles.scss";

const portfolioServices = {
  service1: {
    icon: <MdOutlineContactPage />,
    name: "Landing Page",
    description:
      "Crio landing pages otimizadas para conversão, com design responsivo, carregamento rápido e navegação intuitiva.",
  },
  service2: {
    icon: <MdImageSearch />,
    name: "Wireframing",
    description:
      "Crio wireframes funcionais para páginas e aplicativos, garantindo navegação intuitiva e organização eficiente.",
  },
  service3: {
    icon: <MdDesignServices />,
    name: "UX / Design",
    description:
      "Desenvolvo experiências de usuário e designs visuais, focando em usabilidade, acessibilidade e estética.",
  },
  service4: {
    icon: <MdCode />,
    name: "Desenvolvimento",
    description:
      "Implanto soluções web com código limpo, escalável e focado em performance, segurança e eficiência.",
  },
};

const ComoNosTrabalhamos = () => {
  return (
    <section id="servicos" className="comoNosTrabalhamos">
      <div className="container container-flex">
        <article className="comoNosTrabalhamos-text">
          <h2>
            Como nos <span>trabalhamos</span>
          </h2>
          <p>
            Meu processo é colaborativo e ágil, focado em
            <span>entender as necessidades do cliente e entregar</span>
            <span> soluções eficazes.</span>
          </p>
          <a href="tel:+5511941078629" aria-label="Ligar para 11 94107-8629">
            Entre em contato comigo <MdOutlineArrowRightAlt />
          </a>
        </article>
        <article className="comoNosTrabalhamos-cards">
          {Object.keys(portfolioServices).map((key) => {
            const service = portfolioServices[key];
            return (
              <div key={key} className="comoNosTrabalhamos-itens">
                <span>{service.icon}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default ComoNosTrabalhamos;
