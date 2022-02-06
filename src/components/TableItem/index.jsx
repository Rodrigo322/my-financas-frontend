export const TableItem = ({ data, categoria_id, titulo, valor, Categorium }) => {
  let dataFormatada = data.split('-').reverse().join('-');

  return (
    <tr>
      <td>{dataFormatada}</td>
      <td>
        {categoria_id}
      </td>
      <td>{Categorium}</td>

      <td>{titulo}</td>
      <td>R${valor}</td>
    </tr>
  );
};
