import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../services/api";
import "./styles.css";

export const Information = () => {
  const [dataInicial, setDataInicial] = useState('')
  const [dataFinal, setDataFinal] = useState('')

  console.log(dataInicial, dataFinal)
  useEffect(() => {
    api.get(`/listar/financa/dataInicial/${dataInicial}/dataFinal/${dataInicial}/page/0`).then(response => {
      console.log(response)
    })
  }, [setDataFinal])

  return (
    <section>
      <div className="input-date">
        <div className="container-input">
          <label htmlFor="initial-date">Data inicial</label>
          <input
            type="date"
            name="initial-date"
            value={dataInicial}
            onChange={(e) => setDataInicial(e.target.value)}
          />
        </div>

        <div className="container-input">
          <label htmlFor="final-date">Data final</label>
          <input
            type="date"
            name="final-date"
            value={dataFinal}
            onChange={(e) => setDataFinal(e.target.value)}
          />
        </div>
      </div>

      <div className="info-values">
        <p>Receita</p>
        <span className="span-green">R$ 3500</span>
      </div>

      <div className="info-values">
        <p>Dispesas</p>
        <span className="span-red">R$ 500</span>
      </div>

      <div className="info-values">
        <p>Balanço</p>
        <span className="span-green">R$ 3000</span>
      </div>
    </section>
  );
};
