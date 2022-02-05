export const TableItem = ({date, category, title, value}) => {
  return (
    <tr>
      <td>{date}</td>
      <td style={{ background: "#008000", borderRadius: 2, padding: 2.5 }}>
       {category}
      </td>
      <td>{title}</td>
      <td style={{ color: "#008000" }}>R$ {value}</td>
    </tr>
  );
};
