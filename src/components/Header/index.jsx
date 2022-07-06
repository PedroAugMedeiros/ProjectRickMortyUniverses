import { Link } from 'react-router-dom';
import { useContext } from 'react';
import SHeader from './styles.js';
import { RickMortyContext } from '../../context/RickMortyContext';

const Header = () => {
  
  const { setShowDetails, setSearchInput  } = useContext(RickMortyContext);
  
  const HeaderHandleClick = () => {
    setShowDetails(false);
    setSearchInput('');
  }

  return (
    <SHeader>
        <div className='Link'>
          <Link onClick={()=> { HeaderHandleClick()}} to="/Home"><h2>Home</h2></Link> 
          </div>
        <div>
        <h1>Rick And Morty Universe</h1>
        </div>
      </SHeader>
  )
} 

export default Header;
