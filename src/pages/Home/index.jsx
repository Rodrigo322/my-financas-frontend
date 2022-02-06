import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Information } from "../../components/Infomation";
import { InfoTable } from "../../components/InfoTable";
import { InputsContainer } from "../../components/InputsContainer";
import { api } from "../../services/api";

import './styles.css'

export const Home = () => {
  const [list, setList] = useState([])
  let page = 0

  useEffect(() => {
    api.get(`/listar/financa/${page}`).then(response => {
      setList(response.data.rows)
    })
  },[])

  function hadleSaveItem(item) {
    const data = item.dados
    api.post("/criar/financa", data).catch(error => console.log(error))
    api.get(`/listar/financa/${page}`).then(response => {
      setList(response.data.rows)
    })
  }
  return (
    <div className="container">
      <Header />
      <Information />
      <InputsContainer addItens={hadleSaveItem} />
      <InfoTable list={list} />
    </div>
  )
};

