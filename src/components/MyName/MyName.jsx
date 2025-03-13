/* Створення компоненту  */
/* існує 2 способа експорту компонентів
іменований export function MyName()
import { MyName } from "../MyName/MyName";



імпорт за замовчуванням:

function nameF(){
}

export default nameF;

import nameF from "../MyName/MyName";

*/
import './MyNameStyle.css'


export function MyName() {
  const myNameDev = 'Егорище';
  return <h2 className="title_site">Моє ім'я - {myNameDev }</h2>;
}
