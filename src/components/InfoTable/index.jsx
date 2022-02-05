import { TableItem } from "../TableItem";
import "./styles.css";

export const InfoTable = ({ list }) => {
  return (
    <table className="container-infoTable">
      <thead>
        <tr>
          <th>Data</th>
          <th>Categoria</th>
          <th>Título</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem
            key={index}
            date={item.data.date}
            category={item.data.category}
            title={item.data.title}
            value={item.data.value}
          />
        ))}
      </tbody>
    </table>
  );
};
