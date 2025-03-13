import { MyName } from "../MyName/MyName";
import HeaderWrape from "../Header/Header";
import Button from "../Button/Button";
import HomePage from "../../pages/HomePage/HomePage";
import { SecondBlock } from "../SecondBlock/SecondBlock";
import { FooterFun } from "../Footer/Footer";
import './App.css'

function App() {

  const handlClick = () => {
    alert('Меня визвали не дали поспасть ');
  }

  return (
    <>
        < HeaderWrape/>
        < HomePage/>
      <div>
        <h1>Перевірка файлів</h1>
        <h2>Ура, запрацювало</h2>
        < Button label="Замовити товар" btnStyled={{ borderWidth:20, borderColor: 'blue'}} onClick={()=>{handlClick()}} />
  <hr></hr>
        < MyName />
        < SecondBlock/>
        < FooterFun />
      </div>
    </>
  )
}

export default App
