import * as C from './styles'; 
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <C.Header>
        <div>
        <h1>
          <Link to="/Home"><h1>Home</h1></Link> 
          </h1>
        </div>
        <div>
        <h1>Rick And Morty Universe</h1>
        </div>
      </C.Header>
  )
} 

export default Header;
