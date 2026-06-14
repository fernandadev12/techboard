import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function TituloFormulario({ children }) {
  return <h2>{children}</h2>;
}
function CampoFormulario({ children }) {
  return <label>{children}</label>;
}
function LabelFormulario({ children, htmlFor }) {
  return <label htmlFor="{htmlFor}">{children}</label>;
}

function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Cadastro de eventos</TituloFormulario>
      <CampoFormulario>Nome do evento: </CampoFormulario>
      <input type="text" id="nome"></input>
    </form>
  );
}

function App() {
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
