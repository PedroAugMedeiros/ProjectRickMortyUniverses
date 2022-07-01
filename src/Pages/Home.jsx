import * as C from "./home.styles";
import { RickMortyContext } from '../context/RickMortyContext'
import { useEffect, useState, useContext } from 'react';
import { useApiInterface } from '../hooks/useApiInterface';
import NotFound from './NotFound';
import { Redirect } from 'react-router-dom'


const Home = () => {

  const { setCharacterSelected } = useContext(RickMortyContext);

  const { charactersList , getAll } = useApiInterface()

  const [ blockDetails, setBlockDetails ] = useState(true)


  useEffect(() => {
    getAll();
  }, [getAll]);

  const HandleClick = (itemId) => {
     setCharacterSelected(itemId);
     setBlockDetails(false);
  }
 

  const FirstList = () => {
    return charactersList.sort((a, b) => (a.id < b.id) ? -1 : 1).map((item, index) => {
      if(index < 20) {
        return  (
         <div className='caracther-card'>
        <img src={ item.image } alt={ item.name } ></img>
        <p value={ item.id } className='carachter-name' onClick={() => HandleClick(item.id) }>{ item.name }</p>
        <p>{ item.status }</p>
         </div>
        )
      }
      else {
        return (
          <NotFound />
        )
      }
     })
  }

  if(blockDetails !== true) {
    return (
        <Redirect to='/Details'></Redirect>
    )
  }
  
  return (
    <C.Home>
      { FirstList() }
    </C.Home>
  );
}

export default Home;
