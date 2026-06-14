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
        placeholder="Nome do Evento"
        name="nomeEvento"
      />

      <LabelFormulario htmlFor="dataEvento">Data do evento</LabelFormulario>
      <CampoFormulario />
      <input type="date" id="dataEvento" name="dataEvento" />
    </form>
  );
}
