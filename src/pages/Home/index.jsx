import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Information } from "../../components/Infomation";
import { InfoTable } from "../../components/InfoTable";
import { InputsContainer } from "../../components/InputsContainer";
import { api } from "../../services/api";

import './styles.css'
import InfoFinancaContexts from '../../context/context'

export const Home = () => {
  const [list, setList] = useState([])
  const [ganho, setGanho] = useState(0)
  const [dispesas, setDispesas] = useState(0)
  const [balanco, setBalanco] = useState(0)
  let page = 0

  useEffect(() => {
    api.get(`/listar/financa/${page}`).then(response => {
      setList(response.data.rows)
    })
  }, [])

  function hadleSaveItem(item) {
    const data = item.dados
    api.post("/criar/financa", data).catch(error => console.log(error))
    api.get(`/listar/financa/${page}`).then(response => {
      setList(response.data.rows)
    })
  }

  function handleSeachFinance(data) {
    api.get(`/listar/financa/dataInicial/${data.dataInicial}/dataFinal/${data.dataInicial}/page/0`)
      .then(response => {
        setList(response.data.rows)
      })
  }


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


  return (
    <InfoFinancaContexts.Provider value={{ list }}>
      <div className="container">
        <Header />
        <Information onSeach={handleSeachFinance} />
        <InputsContainer addItens={hadleSaveItem} />
        <InfoTable list={list} />
      </div>
    </InfoFinancaContexts.Provider>
  )
};

