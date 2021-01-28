import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import NavBar from './components/Nav/Nav'
import Shop from './components/Shop/Shop'
import ShopItem from './components/ShopItem/ShopItem'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route exact path='/shop'> <Shop /> </Route>
        <Route exact path='/shop/:id'> <ShopItem /> </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
