import * as C from './App.styles';
import {
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home/Home';
import DetailsCaracther from './components/DetailsCharacther';
import Header from './components/Header';
import SearchArea from './components/SearchArea';
import NotFound from './pages/NotFound/NotFound';

function App() {


  return (
    <C.Container>
      <Header />
     <SearchArea /> 
    <Routes>
      <Route path="*" element={ <NotFound /> } />
      <Route exact path="/" element={ <Home />} />
      <Route exact path="/Home" element={ <Home /> } />
      <Route exact path="/Details" element={ <DetailsCaracther />} />
    </Routes>
    </C.Container>

  );
}

export default App;
