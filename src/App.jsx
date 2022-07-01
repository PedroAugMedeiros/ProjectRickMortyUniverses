import * as C from './App.styles';
import { Route, Switch } from 'react-router';
import Home from './Pages/Home';
import DetailsCaracther  from './components/DetailsCaracther';

function App() {
  return (
    <Switch>
      <C.Container>
      <Route exact path="/" component={ Home } />
      <Route exact path="/Home" component={ Home } />
      <Route exact path="/Details" component={ DetailsCaracther } />
      </C.Container>
    </Switch>
  );
}

export default App;
