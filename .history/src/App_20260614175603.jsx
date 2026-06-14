import "./App.css";
import { Banner } from "./componentes/Banner";
import { Tema } from "./componentes/Tema";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";

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
      <Banner />
      <FormularioDeEvento />

      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item.nome} />
          </section>
        );
      })}
    </main>
  );
}

export default App;
