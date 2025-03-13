import { MyName } from "../MyName/MyName";
import HeaderWrape from "../Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
import { SecondBlock } from "../SecondBlock/SecondBlock";
import { FooterFun } from "../Footer/Footer";
import './App.css'

function App() {

  return (
    <>
        < HeaderWrape/>
        < HomePage/>
      <div>
        <h1>Перевірка файлів</h1>
        <h2>Ура, запрацювало</h2>
        < MyName/>
        < SecondBlock/>
        < FooterFun />
      </div>
    </>
  )
}

export default App
