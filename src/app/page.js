import Header from "./components/Header";
import ComoNosTrabalhamos from "./components/ComoNosTrabalhamos";
import ProjetosQueFiz from "./components/ProjetosQueFiz";
import PerguntasFrequentes from "./components/PerguntasFrequentes";
import "../styles/main.scss";
import Testimonials from "./components/Testimonials/Testimonials";

export default function Home() {
  const currentDate = new Date().getFullYear();

  return (
    <>
      <Header />
      <main className="main">
        <ComoNosTrabalhamos />
        <ProjetosQueFiz />
        <Testimonials />
        <PerguntasFrequentes />
      </main>
      <footer>
        <div className="container">
          <div className="text">
            <p>
              Designed by Guilherme Ramos @{currentDate}. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
