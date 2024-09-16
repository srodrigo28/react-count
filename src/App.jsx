import { useState } from 'react'
import './App.css'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  const somar = () => {
    if ( count < 10 ){
      setCount (count + 1)
    }else{
      toast('Limite de compra por cpf é: 10', {
        position: "top-left",
        className: 'foo-bar'
      })
      return false
    }
  }

  const subtrair = () => {
    if ( count > 0 ){
      setCount (count - 1)
    }else{
      return false
    }
  }

  return (
    <>
    <h1>Adicionar e remover Produto</h1>
    <div>
      <h2>{count}</h2>
      
      <button onClick={ subtrair } style={{margin: 10, background: 'red', fontSize: 15}}> - </button>
      <button onClick={ somar } > + </button>

    </div>  
      
    </>
  )
}

export default App
