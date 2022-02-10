import { useState, useEffect } from 'react';
import NavBar from './component/NavBar.jsx';
import Buscar from './component/Buscar.jsx';
import Contenedor from './component/Contenedor.jsx';



export default function App() {

  const [pokemons, setPokemons] = useState([]);
  useEffect(()=>{
    getAPIKey();
  },[])

  const APIKey = 'https://pokeapi.co/api/v2/pokemon/';
  let unaVez=false;

  const getAPIKey= ()=>{
    fetch(APIKey)
      .then((response)=>response.json())
      .then((data)=> getData(data))
  }
  
  const getData = (data)=>{
    const {results} = data;
    setPokemons(results);
  }
  console.log(pokemons)
  
  return(
    <div>
      <NavBar/>
      <Contenedor
        arreglo={pokemons}
      />
    </div>
  )
}
