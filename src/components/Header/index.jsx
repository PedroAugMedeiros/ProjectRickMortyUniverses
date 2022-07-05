import * as C from './styles';
import { Link } from "react-router-dom";
import { RickMortyContext } from '../../context/RickMortyContext';
import { useContext } from 'react';

const Header = () => {
  
  const { setShowDetails, setSearchInput  } = useContext(RickMortyContext);
  
  const HeaderHandleClick = () => {
    setShowDetails(false);
    setSearchInput('')
  }

  return (
    <C.Header>
        <div className='Link'>
          <Link onClick={()=> { HeaderHandleClick()}} to="/Home"><h2>Home</h2></Link> 
          </div>
        <div>
        <h1>Rick And Morty Universe</h1>
        </div>
      </C.Header>
  )
} 

export default Header;
