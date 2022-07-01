import * as C from "./home.styles";
import { RickMortyContext } from '../context/RickMortyContext'
import { useState, useContext } from 'react';
import { useApiInterface } from '../hooks/useApiInterface';
import { Navigate } from 'react-router-dom';


const Home = () => {

  const { setCharacterSelected } = useContext(RickMortyContext);

  const { charactersList , getAll } = useApiInterface()

  const [ blockDetails, setBlockDetails ] = useState(true)

  getAll();


  const HandleClick = (itemId) => {
     setCharacterSelected(itemId);
     setBlockDetails(false)
  }

  if(blockDetails !== true) {
    return (
        <Navigate to="/Details"></Navigate>
    )
  }
    
  return charactersList.sort((a, b) => (a.id < b.id) ? -1 : 1).map((item, index) => {
      if(index < 20) {
        return  (
          <C.Home>
         <div className='caracther-card'>
        <img src={ item.image } alt={ item.name } ></img>
        <C.Button onClick={ () => HandleClick(item.id) }> { item.name } </C.Button>
        <p>{ item.status }</p>
         </div>
    </C.Home>
  )
} else {
  return(<Navigate />)
  
}

  })
}

export default Home;
