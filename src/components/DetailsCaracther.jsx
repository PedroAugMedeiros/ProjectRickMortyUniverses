import * as C from './detailsCaracther.styles'
import { useApiInterface } from '../hooks/useApiInterface';

//
const characterId = 5;

const DetailsCaracther = () => {
  
  const { charactersList } = useApiInterface();

  return charactersList.find((item) => item.id === characterId).map((item) => {
     return  (
      <C.DetailsCaracther>
      <img src={ item.image } alt={ item.name } ></img>
        <p> Nome: { item.name }</p>
        <p> Status: { item.status }</p>
        <p> Especie: { item.species }</p>
        <p> Tipo: { item.type }</p>
        <p> Genero:{ item.gender }</p>
        <div> <p>{ item.origin.name }</p>
        <img src={ item.origin.url } alt={ item.origin.name }/></div>
        <p>{ item.name }</p>
        <p>{ item.status }</p>
    </C.DetailsCaracther>
      )
    })
    
}

export default DetailsCaracther;
