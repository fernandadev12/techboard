import "./App.css";
import { Banner } from "./componentes/Banner";
import { Tema } from "./componentes/Tema";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
import { CardEvento } from "./componentes/CardEvento/cardEvento";

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

  const eventos = [
    {
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7nX74F7LW_IModAqhZs7nfpiq3CmlLL2rg&s",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
    },
  ];

  function adicionarEvento(evento) {
    eventos.push(evento);
    console.log("eventos =>", eventos);
  }
  return (
    <main>
      <header>
        <img src="/Header.png"></img>
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />

      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item} />
            {eventos.map(function (item, index) {
              <CardEvento evento={item} key={index} />;
            })}
          </section>
        );
      })}
    </main>
  );
}

export default App;
