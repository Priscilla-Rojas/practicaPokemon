import { useState, useEffect } from 'react';
import NavBar from './component/NavBar.jsx';
import Buscar from './component/Buscar.jsx';
import Contenedor from './component/Contenedor.jsx';
import Render from './component/reneder.jsx';


export default function App() {

  const [pokemons, setPokemons] = useState([]);
  const [pokemonsAMostrar, setpokemonsAMostrar] = useState([]);

  useEffect(()=>{
    getAPIKey();
  },[])

  const APIKey = 'https://pokeapi.co/api/v2/pokemon/';

  const getAPIKey= ()=>{
    fetch(APIKey)
      .then((response)=>response.json())
      .then((data)=> getData(data))
  }
  
  const getData = (data)=>{
    const {results} = data;
    setPokemons(results);
  }
  function Filter(pokemon){
    const busqueda = pokemons.filter(elemento => elemento.name === pokemon);
    if(busqueda.length === 0){
      alert('Pokemon no encontrado, verifica el nombre')
    }else{
      setpokemonsAMostrar([...pokemonsAMostrar, ...busqueda])
    }
  }
  
  return(
    <div>
      <NavBar Filter={Filter}/>
      <Contenedor
        arreglo={pokemonsAMostrar}
      />
      

    </div>
  )
}
