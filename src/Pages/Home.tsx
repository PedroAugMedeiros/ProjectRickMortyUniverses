import * as C from "./home.styles";
import { useApiInterface } from '../hooks/useApiInterface';

  const { charactersList } = useApiInterface()

  const FirstList = () => {
    return charactersList.sort((a, b) => (a.id < b.id) ? -1 : 1).map((item, index) => {
      if(index < 10){
        return  (
         <div className= "caracther-card">
        <p>{ item.image }</p>
        <p>{ item.name }</p>
        <p>{ item.status }</p>
         </div>
        )
      }
      else {
        return (
          null
        )
      }
     })
  }

const Home = () => {
  return (
    /* list 20 characters */
    <C.Home>
      {FirstList()}
    </C.Home>
   
  );
}

export default Home;
