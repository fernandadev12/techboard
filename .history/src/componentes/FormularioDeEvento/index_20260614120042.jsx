import { TituloFormulario } from "../TituloFormulario"
import { CampoFormulario }
import { LabelFormulario } from "../Label"


export function FormularioDeEvento() {
  return (
    <form className="form-evento">
        <TituloFormulario/>
        <CampoFormulario/>
        <input type="text" id="nome"/>
    </form>
  );
}
