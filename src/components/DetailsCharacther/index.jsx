import * as C from './styles';
import * as D from '../../App.styles';
import { RickMortyContext } from '../../context/RickMortyContext'
import { useContext } from 'react';
import { useApiInterface } from '../../hooks/useApiInterface';

export const DetailsCaracther = () => {
  
  const { getAll, charactersList } = useApiInterface();

  getAll();


  const {  characterSelected } = useContext(RickMortyContext);
 
  return charactersList.filter((item) => item.id === characterSelected).map((item) => {
      return  (
        <D.Container>
          <C.DetailsCaracther>
       <div className='caracther-card'>
      <img src={ item.image } alt={ item.name } ></img>
      <h1>{ item.name }</h1>
      { item.status !== 'Alive'?  <p className='characterStatusColorAlive'> Status: { item.status }</p> : <p className='characterStatusColorDead'> Status: { item.status }</p> }
      <p>Specie: { item.species }</p>
      { item.type === '' ? (<p>Type: ?</p>) : <p>Type: { item.type }</p> }
      <p> Gender: { item.gender }</p>
       </div>
          </C.DetailsCaracther>
       </D.Container>
      )
    } 
  )
}

export default DetailsCaracther;
