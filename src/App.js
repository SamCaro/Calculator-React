import './App.css';
import { Button } from './components/Button';
import { ButtonClear } from './components/ButtonClear';
import { useState } from 'react';
import { Screen } from './components/Screen';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('')

  const addInput = val => {
    setInput(input + val)
  }

  const calculateResult = () => {
    if(input) {
      setInput(evaluate(input))
    } else {
      alert('Ingresa un valor')
    }
  }

  return (
    <div className="App">
      <div className='container-calculator'>
        <Screen input={input} />
        <div className='fila'>
          <Button handleClic={addInput}>1</Button>
          <Button handleClic={addInput}>2</Button>
          <Button handleClic={addInput}>3</Button>
          <Button handleClic={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button handleClic={addInput}>4</Button>
          <Button handleClic={addInput}>5</Button>
          <Button handleClic={addInput}>6</Button>
          <Button handleClic={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button handleClic={addInput}>7</Button>
          <Button handleClic={addInput}>8</Button>
          <Button handleClic={addInput}>9</Button>
          <Button handleClic={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button handleClic={calculateResult}>=</Button>
          <Button handleClic={addInput}>0</Button>
          <Button handleClic={addInput}>.</Button>
          <Button handleClic={addInput}>/</Button>
        </div>
        <div className='fila'>
          <ButtonClear handleClear={() => setInput('')}>
            CLEAR
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
