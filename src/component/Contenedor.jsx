import Tarjeta from "./Tarjeta"


export default function Contenedor({arreglo}){
  return (
    <div>
      {
        arreglo.map((elemento)=>(
          <Tarjeta
            name= {elemento.name}
            url= {elemento.url}
          />
        ))
  }

    </div>
  )
}