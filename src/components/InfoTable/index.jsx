import { TableItem } from "../TableItem";
import "./styles.css";

import {
  TableCell,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

export const InfoTable = ({ list }) => {
  return (
    <div className="container-infoTable">
      <TableContainer sx={{ background: '#000', color: '#fff', borderRadius: 10 }}>
        <Table size="medium" aria-label="a dense table">
          <TableHead  >
            <TableRow>
              <TableCell sx={{ color: '#fff' }} align="center">Data</TableCell>
              <TableCell sx={{ color: '#fff' }} align="center">Categoria</TableCell>
              <TableCell sx={{ color: '#fff' }} align="center">Titulo</TableCell>
              <TableCell sx={{ color: '#fff' }} align="center">Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.length === 0 ? (
              <tr>
                <td style={{ textAlign: 'center', padding: 10 }}>Nenhuma finança encontrada!</td>
              </tr>
            ) : (
              list.map((item, index) => (
                <TableItem
                  key={index}
                  data={item.data}
                  categoria_id={item.Categorium.descricao}
                  titulo={item.titulo}
                  valor={item.valor}
                />
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};