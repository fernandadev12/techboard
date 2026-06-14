import { TituloFormulario } from "../TituloFormulario";
import { CampoFormulario } from "../CampoDeFormulario";
import { LabelFormulario } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";
import "./formularioEventoStyles.css";
import { BotaoFormulario } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDeEvento({ temas }) {
  function FormSubmetido(formData) {
    const evento = {
      capa: formData.get("capa"),
      tema: temas.find(function (item) {
        return item.id == formData.get("tema");
      }),
      data: new Date(formData.get("dataEvento")),
      titulo: formData.get("nomeEvento"),
    };
    console.log("dados" + evento);
  }
  return (
    <form className="form-evento" action={FormSubmetido}>
      <TituloFormulario> Preencha para criar o evento:</TituloFormulario>
      <div className="campor">
        <CampoFormulario>
          <LabelFormulario htmlFor="nome">
            Qual o nome do evento?
          </LabelFormulario>
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

        <CampoFormulario>
          <LabelFormulario htmlFor="temaEvento">Tema do evento</LabelFormulario>
          <ListaSuspensa id="tema" name="tema" itens={temas} />
        </CampoFormulario>
      </div>

      <div className="acoes">
        <BotaoFormulario>Criar Evento</BotaoFormulario>
      </div>
    </form>
  );
}
