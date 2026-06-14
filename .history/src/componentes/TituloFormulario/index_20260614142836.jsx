import "./titulostyle.css";

// export function TituloFormulario() {
//   return <h3 class="tituloform">Preencha para criar um evento:</h3>;
// }
export function TituloFormulario({ children }) {
  return <h2 className="tituloform">{children}</h2>;
}
