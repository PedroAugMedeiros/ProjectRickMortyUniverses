import * as C from './styles'; 
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <C.Header>
        <div>
          <Link to="/Home"><h2>Home</h2></Link> 
          </div>
        <div>
        <h1>Rick And Morty Universe</h1>
        </div>
      </C.Header>
  )
} 

export default Header;
