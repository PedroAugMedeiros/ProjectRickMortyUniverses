import * as C from "./home.styles";
import { useEffect } from 'react';
import { useApiInterface } from '../hooks/useApiInterface';

const Home = () => {
  const { charactersList , getAll } = useApiInterface()

  useEffect(() => {
    getAll();
  }, [getAll]);

  const FirstList = () => {
    return charactersList.sort((a, b) => (a.id < b.id) ? -1 : 1).map((item, index) => {
      if(index < 10){
        return  (
         <div className= "caracther-card">
        <img src={ item.image }></img>
        <p>{ item.name }</p>
        <p>{ item.status }</p>
         </div>
        )
      }
      else {
        return (
          'ull'
        )
      }
     })
  }
  
  return (
    /* list 20 characters */
    <C.Home>
      { FirstList() }
    </C.Home>
   
  );
}



export default Home;
