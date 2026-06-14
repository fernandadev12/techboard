import { TituloFormulario } from "../TituloFormulario";
import { CampoFormulario } from "../CampoDeFormulario";
import { BotaoFormulario } from "../Botao";
import { LabelFormulario } from "../Label";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario> Preencha para criar o evento:</TituloFormulario>
      <LabelFormulario />
      <CampoFormulario />
      <input type="text" id="nome" />
      <BotaoFormulario />
    </form>
  );
}
