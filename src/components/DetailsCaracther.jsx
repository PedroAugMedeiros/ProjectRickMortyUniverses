import * as C from './detailsCaracther.styles';
import { RickMortyContext } from '../context/RickMortyContext'
import { useEffect, useContext } from 'react';
import { useApiInterface } from '../hooks/useApiInterface';

const DetailsCaracther = () => {
  
  const { charactersList  } = useApiInterface()
  const { showDetails, setShowDetails, characterSelected, setCharacterSelected } = useContext(RickMortyContext);

    const vrau = charactersList.find((item) => item.id === characterSelected).map((item) => {
      return(
      <C.DetailsCaracther>
      <img src={ item.image } alt={ item.name } ></img>
        <h1> { item.name }</h1>
        <p> { item.status }</p>
        <p>  { item.species }</p>
        <p>  { item.type }</p>
        <p> { item.gender }</p>
        <div> <p>{ item.origin.name }</p>
        <img src={ item.origin.url } alt={ item.origin.name }/></div>
        <p>{ item.name }</p>
        <p>{ item.status }</p>
    </C.DetailsCaracther>
      )
     })

     return(
      <p>xx</p>
     ) 
    }

    export default DetailsCaracther;
