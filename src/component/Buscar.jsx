import style from '../styles/Buscar.module.css'
import { useState } from 'react'




export default function Buscar({Filter}){
  const [contenidoInput, setContenidoInput]= useState('');


  function capturar(e){
    setContenidoInput(e.target.value);
  }
  
  
  return(
      <form onSubmit={e=>{
        e.preventDefault();
        Filter(contenidoInput)
      }

      }>
        <input type='text' placeholder='Buscar...' onChange={capturar} value={contenidoInput}/>
        <input type='submit' value='Buscar'/>
      </form>

  )
}