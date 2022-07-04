import * as C from './styles';
import { RickMortyContext } from '../../context/RickMortyContext'
import { useContext } from 'react';
import { useApiInterface } from '../../hooks/useApiInterface';

export const DetailsCaracther = () => {
  
  const { getAll, charactersList } = useApiInterface();

  getAll();


  const {  characterSelected } = useContext(RickMortyContext);
 
  return charactersList.filter((item) => item.id === characterSelected).map((item, index) => {
      return  (
        <C.DetailsCaracther>
       <div className='caracther-card'>
      <img src={ item.image } alt={ item.name } ></img>
      <p>Name: { item.name }</p>
      <p>Status: { item.status }</p>
      <p>Specie: { item.species }</p>
      { item.type === '' ? (<p>Type: ?</p>) : <p>Type: { item.type }</p> }
      <p> Gender: { item.gender }</p>
       </div>
  </C.DetailsCaracther>
      )
    } 
  )
}

    export default DetailsCaracther;
