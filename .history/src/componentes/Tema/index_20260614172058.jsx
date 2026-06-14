import "./temastyles.css";

export function Tema({ tema }) {
  return <h3 className="titulotema">{tema.nome}</h3>;
}
