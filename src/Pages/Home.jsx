import * as C from "./home.styles";
import { useEffect } from 'react';
import { useApiInterface } from '../hooks/useApiInterface';
import NotFound from './NotFound';

const Home = () => {
  const { charactersList , getAll } = useApiInterface()

  useEffect(() => {
    getAll();
  }, [getAll]);

  const HandleClick = (itemId) => {

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
  
  return (
    <C.Home>
      { FirstList() }
    </C.Home>
  );
}

export default Home;
