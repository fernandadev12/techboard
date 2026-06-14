import { TituloFormulario } from "../TituloFormulario";
import { CampoFormulario } from "../CampoDeFormulario";
import { LabelFormulario } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";
import "/formularioEventoStyles.css";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario> Preencha para criar o evento:</TituloFormulario>
      <CampoFormulario>
        <LabelFormulario htmlFor="nome">Qual o nome do evento?</LabelFormulario>
        <CampoDeEntrada
          type="text"
          id="nome"
          placeholder="Nome do Evento"
          name="nomeEvento"
        />
      </CampoFormulario>

      <CampoFormulario>
        <LabelFormulario htmlFor="dataEvento">Data do evento</LabelFormulario>
        <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
      </CampoFormulario>
    </form>
  );
}
