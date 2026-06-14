import { TituloFormulario } from "../TituloFormulario";
import { CampoFormulario } from "../CampoDeFormulario";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario />
      <CampoFormulario />
      <input type="text" id="nome" />
    </form>
  );
}
