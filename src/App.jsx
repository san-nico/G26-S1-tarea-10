import "./reset.css";
import "./App.css";

import logo from "./assets/logo.png";
import hero from "./assets/hero.png";

import contenido from "./data/contenido.json";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Pilares from "./components/sections/Pilares";
import Relatores from "./components/sections/Relatores";
import Footer from "./components/layout/Footer";
import StackSeccion from "./components/sections/Stack";
import { TileBg } from "./components/background/TileBg";
import { Divisor } from "./components/ui/Divisor";
import { Formulario } from "./components/sections/Formulario";

function App() {
  return (
    <>
      <TileBg />
      <Navbar logo={logo} nav={contenido.header.nav} />
      <Divisor />

      <Hero
        data={contenido.hero}
        hero={hero}
        cards={contenido.relatores.cards}
      />
      <Divisor />
      <Pilares
        titulo={contenido.pilares.title}
        cards={contenido.pilares.cards}
      />
      <Divisor />
      <StackSeccion
        titulo={contenido.stack.title}
        cards={contenido.stack.cards}
      />
      <Divisor />
      <Relatores
        titulo={contenido.relatores.title}
        cards={contenido.relatores.cards}
      />
      <Divisor />
      <Formulario />
      <Divisor />
      <Footer data={contenido.footer} />
    </>
  );
}

export default App;
