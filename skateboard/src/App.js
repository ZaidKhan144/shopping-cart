import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import NavBar from './components/Nav/Nav'
import Shop from './components/Shop/Shop'


const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route exact path='/shop'> <Shop /> </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
