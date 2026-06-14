import { TituloFormulario } from "../TituloFormulario";
import { CampoFormulario } from "../CampoDeFormulario";
import { BotaoFormulario } from "../Botao";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario />
      <CampoFormulario />
      <input type="text" id="nome" />
      <BotaoFormulario />
    </form>
  );
}
