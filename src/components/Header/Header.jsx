import * as C from './styles'; 
import { Link } from "react-router-dom";
import MenuImg from '../../images/Menu.png';

const Header = () => {
  return (
    <C.Header>
        <div>
          <Link to="/Home"><h2>Home</h2></Link> 
          </div>
        <div>
        <h1>Rick And Morty Universe</h1>
        </div>
        <div>
            <img src={MenuImg}></img>
          </div>
        
      </C.Header>
  )
} 

export default Header;
