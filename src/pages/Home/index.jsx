import { useState } from "react";
import { Header } from "../../components/Header";
import { Information } from "../../components/Infomation";
import { InfoTable } from "../../components/InfoTable";
import { InputsContainer } from "../../components/InputsContainer";

import './styles.css'

export const Home = () => {
  const [list, setList] = useState([])

  function hadleSaveItem(item) {
    let newList  = [...list];

    newList.push(item);

    setList(newList);
    console.log(list)
    console.log(item)
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

