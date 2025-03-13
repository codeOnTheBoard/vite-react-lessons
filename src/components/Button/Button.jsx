import './button.css';

// function Button({label, onClick, btnStyled }) {
//   return (
//     <button className="button-style" onClick={onClick} style={btnStyled} >{label}</button>
//   )
// }


function Button(props) {
  return (
    <button className="button-style" onClick={props.onClick} style={props.btnStyled} >{props.label || 'Кнопка по умолчанию'}</button>
  )
}


export default Button;
