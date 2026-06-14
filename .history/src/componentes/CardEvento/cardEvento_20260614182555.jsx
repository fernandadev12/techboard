import "./cardeventostyles.css";

export function CardEvento({ evento }) {
  return (
    <div className="cardeventodiv">
      <img src={evento.capa} alt={evento.titulo} />
      <div className="corpocard">
        <p className="tag">{evento.tema.nome}</p>
        <p className="datacardevento">
          {evento.data.toLocaleDateString("pt-BR")}
        </p>
        <h4 className="tituloevento">{evento.titulo}</h4>
      </div>
    </div>
  );
}
