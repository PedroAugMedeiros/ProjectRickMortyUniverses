import * as C from "./styles";
import { RickMortyContext } from '../../context/RickMortyContext';
import { filters } from "../../helpers/filters";
import { useState, useContext } from 'react';
import { useApiInterface } from '../../hooks/useApiInterface';
import { Navigate } from 'react-router-dom';


const Home = () => {

  const { setCharacterSelected, searchInput, typeFilter  } = useContext(RickMortyContext);

  const { charactersList , getAll } = useApiInterface()

  const [ blockDetails, setBlockDetails ] = useState(true)

  getAll();


  const HandleClick = (itemId) => {
     setCharacterSelected(itemId);
     setBlockDetails(false)
  }


  const FiltredByName = () => {
    if( typeFilter === filters.FiltredByName) {
      return charactersList.sort((a, b) => (a.id < b.id) ? -1 : 1).filter((item) => item.name.includes(searchInput)).map((item, index) => {
        if(index < 20) {
          return  (
           <div className='caracther-card'>
          <img src={ item.image } alt={ item.name } ></img>
          <C.Button onClick={ () => HandleClick(item.id) }> { item.name } </C.Button>
          <p>{ item.status }</p>
           </div>

    )
  } else {
    return(<Navigate to='/NotFound'/>)
    
  }
  
    })
    }
  }
  
  if( typeFilter === filters.FiltredByName){
    return ( <C.Home>
    {FiltredByName()}
    </C.Home>
    )
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
  return(<Navigate to='/NotFound'/>)
  
}

  })
}

export default Home;
