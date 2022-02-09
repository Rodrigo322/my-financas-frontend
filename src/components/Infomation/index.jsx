import { useContext, useState } from "react";
import "./styles.css";

import { api } from '../../services/api'

import InfoFinancaContext from "../../context/context";

export const Information = ({ onSeach }) => {
  const [dataInicial, setDataInicial] = useState('')
  const [dataFinal, setDataFinal] = useState('')


  const [ganho, setGanho] = useState(0)
  const [dispesas, setDispesas] = useState(0)
  const [balanco, setBalanco] = useState(0)

  const { list } = useContext(InfoFinancaContext)

    list.map((financa) => {
      api.get(`/pesquisar/financa/categoria_id/${financa.categoria_id}`).then(response => {
        if (response.data.Categoria.descricao === 'Ganho') {
          setGanho(response.data.saldo)
        }
        if (response.data.Categoria.descricao === 'Dispesas') {
          setDispesas(response.data.saldo)
        }
        setBalanco(ganho - dispesas)
      })
    })

  function handleSeachFinance() {
    onSeach({ dataInicial, dataFinal })
  }

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
        <div className="container-input">
          <button onClick={handleSeachFinance}>Buscar</button>
        </div>
      </div>

      <div className="info-values">
        <p>Receita</p>
        <span className="span-green">R$ {ganho}</span>
      </div>

      <div className="info-values">
        <p>Dispesas</p>
        <span className="span-red">R$ {dispesas}</span>
      </div>

      <div className="info-values">
        <p>Balanço</p>
        <span className="span-green">R$ {balanco}</span>
      </div>
    </section>
  );
};
