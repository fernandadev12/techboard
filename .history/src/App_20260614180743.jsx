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
      capa: "https://raw.githubusercontent.com/viniciosneves/techoard-assets/refs/heads/main/image_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
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
            <Tema tema={item} />
            <CardEvento evento={eventos[0]} />
          </section>
        );
      })}
    </main>
  );
}

export default App;
