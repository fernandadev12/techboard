// import { useState } from "react";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";
import { Tema } from "./componentes/Tema";

// function TituloFormulario({ children }) {
//   return <h2>{children}</h2>;
// }
// function CampoFormulario({ children }) {
//   return <label>{children}</label>;
// }
// function LabelFormulario({ children, htmlFor }) {
//   return <label htmlFor="{htmlFor}">{children}</label>;
// }

function App() {
  const temas = [
    {
      id: 1,
      nome: "Front-end",
    },
    {
      id: 2,
      nome: "Back-end",
    },
    {
      id: 3,
      nome: "Mobile",
    },
    {
      id: 4,
      nome: "DevOps",
    },
    {
      id: 5,
      nome: "Inteligência Artificial",
    },
    {
      id: 6,
      nome: "Cloud",
    },
  ];

  return (
    <main>
      <header>
        <img src="/Header.png"></img>
      </header>
      <section>
        <img src="/Banner.jpg"></img>
      </section>
      <FormularioDeEvento />
      <section>
        <Tema tema={temas[0]} />
      </section>
      <section>
        <Tema tema={temas[1]} />
      </section>
    </main>
  );
}

export default App;
