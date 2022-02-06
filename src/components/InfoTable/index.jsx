import { useEffect, useState } from "react";
import { TableItem } from "../TableItem";
import "./styles.css";
import {api} from '../../services/api'

export const InfoTable = ({list}) => {

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
            data={item.data}
            categoria_id={item.Categorium.descricao}
            titulo={item.titulo}
            valor={item.valor}
          />
        ))}
      </tbody>
    </table>
  );
};
