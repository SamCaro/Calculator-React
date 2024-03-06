import './index.css'
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
    try{
      if (input) {
        setInput(evaluate(input).toString())
      } else {
        alert('Ingresa un valor')
      }
    } catch (error) {
      alert('Error al calcular el resultado')
    }
  }

  return (
    <div className='bg-gray-100 sm:flex'>

      <section className='flex flex-col space-y-10 mt-6'>
        <div className='flex justify-center text-white h-10 shadow-xl hue-rotate-90 -skew-x-12 -skew-y-12 shadow-black text-2xl font-thin bg-slate-10 rounded-md origin-center '>
          <div className='mr-6'>
            <h2>SAM</h2>
          </div>
        </div>
        <div className='flex justify-center text-white  h-10 rotate-45 -hue-rotate-60 shadow-xl shadow-black text-xl font-thin bg-slate-10 -skew-x-12 -skew-y-12 rounded-md origin-center'>
          <h2>CARO</h2>
        </div>

        <div>
          <div className='flex justify-center text-sky-200 font-bold h-10  rotate-0 -hue-rotate-60 shadow-xl shadow-black text-2xl bg-slate-10 -skew-x-10 -skew-y-10 rounded-md origin-center'>
            <div>
              <Screen input={input} />
            </div>
          </div>
        </div>


        <div className='ml-16 p-6'>

          <div className='mt-[-240px] ml-6 cursor-pointer'>
            <div className='absolute flex justify-center  bg-black backdrop-blur-sm text-white w-7 h-7  rounded-md -skew-x-12 -skew-y-12 rotate-45 origin-center '>
            </div>
            <div className='absolute flex justify-center  bg-gray-10 backdrop-blur-sm text-2xl text-white w-7 h-7  rounded-md -skew-x-1 -skew-y-12 rotate-45 origin-center '>
              <div className='rotate-45 ml-6 mb-6'>
                <Button handleClic={addInput} >+</Button>
              </div>
            </div>
          </div>


          <div className='mt-5 ml-14 cursor-pointer'>
            <div className='absolute flex justify-center  bg-black backdrop-blur-sm text-white w-7 h-7  rounded-md -skew-x-12 -skew-y-12 rotate-12 origin-center '>
            </div>
            <div className='absolute flex justify-center  bg-gray-10 backdrop-blur-sm text-2xl text-white w-7 h-7  rounded-md -skew-x-1 -skew-y-12 rotate-12 origin-center '>
              <div className='rotate-180 mt-8 '>
                <Button handleClic={addInput} >-</Button>
              </div>
            </div>
          </div>

          <div className='ml-[-4px] cursor-pointer'>
            <div className='absolute flex justify-center  bg-black backdrop-blur-sm text-white w-7 h-7  rounded-md -skew-x-12 -skew-y-12 rotate-45 origin-center '>
            </div>
            <div className='absolute flex justify-center  bg-gray-10 backdrop-blur-sm text-2xl text-white w-7 h-7  rounded-md -skew-x-1 -skew-y-12 rotate-45 origin-center '>
              <div className='rotate-45'>
                <Button handleClic={addInput} >*</Button>
              </div>
            </div>
          </div>

          <div className='mt-12 ml-5 cursor-pointer'>
            <div className='absolute flex justify-center  bg-black backdrop-blur-sm text-white w-7 h-7  rounded-md -skew-x-12 -skew-y-12 rotate-12 origin-center '>
            </div>
            <div className='absolute flex justify-center  bg-gray-10 backdrop-blur-sm  text-white w-7 h-7  rounded-md -skew-x-1 -skew-y-12 rotate-12 origin-center '>
              <div className='rotate-0 mb-6'>
                <Button handleClic={addInput} >/</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='p-4 sm:p-16 mt-[-100px] sm:mt-0'>
        <div className='ml-24'>
          <div className='mt-1 absolute flex justify-center  bg-black backdrop-blur-sm text-white w-6 h-10  rounded-md -skew-x-12 -skew-y-12 rotate-45 origin-center '>
          </div>
          <div className='absolute flex justify-center  bg-gray-10 backdrop-blur-sm text-xl text-white w-6 h-10  rounded-md -skew-x-1 -skew-y-12 rotate-45 origin-center '>
            <div className=' p-2 mr-2'>
              <Button handleClic={addInput} >2</Button>
            </div>
          </div>
        </div>

        <div className='ml-36'>
          <div className='absolute flex justify-center  bg-black backdrop-blur-sm text-white w-6 h-10  rounded-md -skew-x-12 -skew-y-12 rotate-45 origin-center '>
          </div>
          <div className='absolute flex justify-center  bg-gray-10 backdrop-blur-sm text-xl text-white w-6 h-10  rounded-md -skew-x-1 -skew-y-12 rotate-45 origin-center '>
            <div className='p-1 mr-1'>
              <Button handleClic={addInput} >3</Button>
            </div>
          </div>
        </div>

        <div className='ml-12'>
          <div className='mt-1 absolute flex justify-center  bg-black backdrop-blur-sm text-white w-6 h-10  rounded-md -skew-x-12 -skew-y-12 rotate-45 origin-center '>
          </div>
          <div className='absolute flex justify-center  bg-gray-10 backdrop-blur-sm text-xl text-white w-6 h-10  rounded-md -skew-x-1 -skew-y-12 rotate-45 origin-center '>
            <div className=' p-2 mr-2'>
              <Button handleClic={addInput} >1</Button>
            </div>
          </div>
        </div>

        <div className='p-6 mt-8 mb-2'>
          <div className='mt-1 absolute flex justify-center  bg-black backdrop-blur-sm text-white w-6 h-10  rounded-md -skew-x-12 -skew-y-12 rotate-45 origin-center '>
          </div>
          <div className='absolute flex justify-center  bg-gray-10 backdrop-blur-sm text-xl text-white w-6 h-10  rounded-md -skew-x-1 -skew-y-12 rotate-45 origin-center '>
            <div className=' p-2 mr-2'>
              <Button handleClic={addInput} >4</Button>
            </div>
          </div>
        </div>


        <div className='ml-20 mt-[-40px]'>
          <div className='mt-1 absolute flex justify-center  bg-black backdrop-blur-sm text-white w-6 h-10  rounded-md -skew-x-12 -skew-y-12 rotate-45 origin-center '>
          </div>
          <div className='absolute flex justify-center  bg-gray-10 backdrop-blur-sm text-xl text-white w-6 h-10  rounded-md -skew-x-1 -skew-y-12 rotate-45 origin-center '>
            <div className=' p-2 mr-2'>
              <Button handleClic={addInput} >5</Button>
            </div>
          </div>
        </div>


        <div className='mt-[-20px] ml-32'>
          <div className='mt-1 absolute flex justify-center  bg-black backdrop-blur-sm text-white w-6 h-10  rounded-md -skew-x-12 -skew-y-12 rotate-45 origin-center '>
          </div>
          <div className='absolute flex justify-center  bg-gray-10 backdrop-blur-sm text-xl text-white w-6 h-10  rounded-md -skew-x-1 -skew-y-12 rotate-45 origin-center '>
            <div className=' p-2 mr-2'>
              <Button handleClic={addInput} >6</Button>
            </div>
          </div>
        </div>


        <div className='ml-44'>
          <div className='mt-1 absolute flex justify-center  bg-black backdrop-blur-sm text-white w-6 h-10  rounded-md -skew-x-12 -skew-y-12 rotate-45 origin-center '>
          </div>
          <div className='absolute flex justify-center  bg-gray-10 backdrop-blur-sm text-xl text-white w-6 h-10  rounded-md -skew-x-1 -skew-y-12 rotate-45 origin-center '>
            <div className=' p-2 mr-2'>
              <Button handleClic={addInput} >7</Button>
            </div>
          </div>
        </div>


        <div className='mt-14 ml-16'>
          <div className='mt-1 absolute flex justify-center  bg-black backdrop-blur-sm text-white w-6 h-10  rounded-md -skew-x-12 -skew-y-12 rotate-45 origin-center '>
          </div>
          <div className='absolute flex justify-center  bg-gray-10 backdrop-blur-sm text-xl text-white w-6 h-10  rounded-md -skew-x-1 -skew-y-12 rotate-45 origin-center '>
            <div className=' p-2 mr-2'>
              <Button handleClic={addInput} >8</Button>
            </div>
          </div>
        </div>


        <div className=' ml-28'>
          <div className='mt-1 absolute flex justify-center  bg-black backdrop-blur-sm text-white w-6 h-10  rounded-md -skew-x-12 -skew-y-12 rotate-45 origin-center '>
          </div>
          <div className='absolute flex justify-center  bg-gray-10 backdrop-blur-sm text-xl text-white w-6 h-10  rounded-md -skew-x-1 -skew-y-12 rotate-45 origin-center '>
            <div className=' p-2 mr-2'>
              <Button handleClic={addInput} >9</Button>
            </div>
          </div>
        </div>

        <div className=' ml-40'>
          <div className='mt-1 absolute flex justify-center  bg-black backdrop-blur-sm text-white w-6 h-10  rounded-md -skew-x-12 -skew-y-12 rotate-45 origin-center '>
          </div>
          <div className='absolute flex justify-center  bg-gray-10 backdrop-blur-sm text-xl text-white w-6 h-10  rounded-md -skew-x-1 -skew-y-12 rotate-45 origin-center '>
            <div className=' p-2 mr-2'>
              <Button handleClic={addInput} >0</Button>
            </div>
          </div>
        </div>

        <div className='p-10 ml-10'>
          <div className='mt-1 absolute flex justify-center  bg-black backdrop-blur-sm text-white w-6 h-10  rounded-md -skew-x-12 -skew-y-12 rotate-45 origin-center '>
          </div>
          <div className='absolute flex justify-center  bg-gray-10 backdrop-blur-sm text-xl text-white w-6 h-10  rounded-md -skew-x-1 -skew-y-12 rotate-45 origin-center '>
            <div className=' p-2 mr-2'>
              <Button handleClic={calculateResult} >=</Button>
            </div>
          </div>
        </div>

        <div className='ml-32 mt-[-40px]'>
          <div className='mt-1 absolute flex justify-center  bg-black backdrop-blur-sm text-white w-6 h-10  rounded-md -skew-x-12 -skew-y-12 rotate-45 origin-center '>
          </div>
          <div className='absolute flex justify-center  bg-gray-10 backdrop-blur-sm text-xl text-white w-6 h-10  rounded-md -skew-x-1 -skew-y-12 rotate-45 origin-center '>
            <div className=' p-2 mr-2'>
              <Button handleClic={addInput} >.</Button>
            </div>
          </div>
        </div>

        <div className='text-3xl text-sky-200 font-extrabold ml-48 cursor-pointer '>
          <ButtonClear handleClear={() => setInput('')}>
            CLEAR
          </ButtonClear>
        </div>
      </section>
    </div>

  );
}

export default App;

