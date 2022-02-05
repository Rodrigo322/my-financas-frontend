import { Alert } from '@mui/material';
import { useState } from "react";

import "./styles.css";

export const InputsContainer = ({ addItens }) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  function handleAddItensTable() {
    const data = {
      date,
      category,
      title,
      value,
    };
    if (data.date === "") {
      alert("O campo data não pode ser vazio!");
    }
    if (data.category === "") {
      alert("O campo categoria não pode ser vazio!");
    }
    if (data.title === "") {
      alert("O campo titulo não pode ser vazio!");
    }
    if (data.value === "") {
      alert("O campo titulo não pode ser vazio!");
    } else {
      addItens({
        data,
      });
      handleClearValuesButtons();
    }
  }

  function handleClearValuesButtons() {
    setCategory("");
    setDate("");
    setValue("");
    setTitle("");
  }

  return (
    
    <section className="inputs-container">
      <div className="container-input">
        <label htmlFor="date">Data</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="container-input">
        <label htmlFor="category">Categoria</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div className="container-input">
        <label htmlFor="title">Título</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="container-input">
        <label htmlFor="value">Valor</label>
        <input
          type="number"
          name="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="container-input">
        <button onClick={handleAddItensTable}>Adicionar</button>
      </div>
    </section>
  );
};
