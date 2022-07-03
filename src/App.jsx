import * as C from './App.styles';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import DetailsCaracther from './components/DetailsCharacter/DetailsCaracther';
import Header from './components/Header/Header';

function App() {
  return (
    <C.Container>
      <Header />
    <Routes>
      <Route exact path="/" element={ <Home />} />
      <Route exact path="/Home" element={ <Home /> } />
      <Route exact path="/Details" element={ <DetailsCaracther />} />
    </Routes>
    </C.Container>

  );
}

export default App;
