import * as C from './styles';
import { Link } from "react-router-dom";
import { RickMortyContext } from '../../context/RickMortyContext';
import { useContext } from 'react';

const Header = () => {
  
  const { setShowDetails  } = useContext(RickMortyContext);
  
  return (
    <C.Header>
        <div className='Link'>
          <Link onClick={()=> { setShowDetails(false)}} to="/Home"><h2>Home</h2></Link> 
          </div>
        <div>
        <h1>Rick And Morty Universe</h1>
        </div>
      </C.Header>
  )
} 

export default Header;
