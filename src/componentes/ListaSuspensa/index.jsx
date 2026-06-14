import "./listasuspensastyles.css";

export function ListaSuspensa({ itens, ...rest }) {
  return (
    <select {...rest} className="listasuspensaform" defaultValue="">
      <option value="" disabled>
        Selecione uma opção
      </option>
      {itens.map(function (item) {
        return (
          <option key={item.id} value={item.id}>
            {item.nome}
          </option>
        );
      })}
    </select>
  );
}
