// import { useState } from "react";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";

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
  const temas = {};
  return (
    <main>
      <header>
        <img src="/Header.png"></img>
      </header>
      <section>
        <img src="/Banner.jpg"></img>
      </section>
      <FormularioDeEvento />
    </main>
  );
}

export default App;
