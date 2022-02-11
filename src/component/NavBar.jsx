import pokemon from '../assets/pokemon.jpg'
import Buscar from './buscar'
import style from '../styles/NavBar.module.css'


export default function({Filter}){
          return (
            <div className={style.contenedor}>
              <img className={style.img} src={pokemon}/>
              <Buscar Filter={Filter}/>
            </div>
            
          )
}