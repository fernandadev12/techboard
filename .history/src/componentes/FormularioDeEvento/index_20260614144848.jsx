import { TituloFormulario } from "../TituloFormulario";
import { CampoFormulario } from "../CampoDeFormulario";
import { BotaoFormulario } from "../Botao";
import { LabelFormulario } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario> Preencha para criar o evento:</TituloFormulario>
      <LabelFormulario htmlFor="nome">Qual o nome do evento?</LabelFormulario>
      <CampoDeEntrada
        type="text"
        id="nome"
        placeholder="nome do evento"
        name="nomeEvento"
      />

      <CampoFormulario />
      <input type="text" id="nome" />
      <BotaoFormulario />
    </form>
  );
}
