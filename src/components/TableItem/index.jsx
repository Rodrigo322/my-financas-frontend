import { TableCell, TableRow } from "@mui/material";

export const TableItem = ({ data, categoria_id, titulo, valor }) => {
  let dataFormatada = data.split('-').reverse().join('-');
  return (
    <TableRow>
      <TableCell sx={{color: '#fff'}} align="center">{dataFormatada}</TableCell>
      <TableCell 
        sx={{color: '#fff',width: 10, height: 1}} 
        style={categoria_id === 'Ganho' ? {color: '#008000'} : {color: 'red'} } 
        align="center">
          {categoria_id}
      </TableCell>
      <TableCell sx={{color: '#fff'}} align="center">{titulo}</TableCell>
      <TableCell sx={categoria_id === 'Ganho' ? {color: '#008000'} : {color: 'red'}} align="center">R$ {valor},00</TableCell>
    </TableRow>
  );
};
