import Tarjeta from "./Tarjeta"


export default function Contenedor({arreglo}){
  return (
    <div>
      {
        arreglo.map((elemento, index)=>(
          <Tarjeta
          key={index}
            name= {elemento.name}
            url= {elemento.url}
          />
        ))
      }
      {console.log('arreglo:' + arreglo)}

    </div>
  )
}