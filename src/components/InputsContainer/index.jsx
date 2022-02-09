import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../services/api";

import "./styles.css";

export const InputsContainer = ({ addItens }) => {
  const [data, setData] = useState("");
  const [categoria_id, setCategoriaId] = useState("");
  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState("");

  const [nameCategoria, setNameCategoria] = useState([])

  useEffect(() => {
    api.get('/listar/categoria/0').then(response => {
      setNameCategoria(response.data.rows)
    })
  }, [])

  function handleAddItensTable() {
    const dados = {
      data,
      categoria_id,
      titulo,
      valor
    };
    if (dados.data === "") {
      alert("O campo data não pode ser vazio!");
    }
    if (dados.titulo === "") {
      alert("O campo titulo não pode ser vazio!");
    }
    if (dados.valor === "") {
      alert("O campo titulo não pode ser vazio!");
    } else {
      addItens({
        dados,
      });
      handleClearValuesButtons();
    }
  }

  function handleClearValuesButtons() {
    setCategoriaId("");
    setData("");
    setValor("");
    setTitulo("");
  }

  return (

    <section className="inputs-container">
      <div className="container-input">
        <label htmlFor="date">Data</label>
        <input
          type="date"
          name="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>

      <div className="container-input">
        <label htmlFor="category">Categoria</label>
        {/* <input
          type="text"
          name="category"
          value={categoria_id}
          onChange={(e) => setCategoriaId(e.target.value)}
        /> */}
        <select
          name="category"
          id="category"
          value={categoria_id}
          onChange={e => setCategoriaId(e.target.value)}
        >
          {nameCategoria.map((item) => (
            <option key={item.id} value={item.id}>{item.descricao}</option>
          ))}
        </select>
      </div>

      <div className="container-input">
        <label htmlFor="title">Título</label>
        <input
          type="text"
          name="title"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>

      <div className="container-input">
        <label htmlFor="value">Valor</label>
        <input
          type="number"
          name="value"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </div>

      <div className="container-input">
        <button onClick={handleAddItensTable}>Adicionar</button>
      </div>
    </section>
  );
};
