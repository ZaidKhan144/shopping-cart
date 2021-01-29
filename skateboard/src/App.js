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
        <Route exact path="/shop"> <Shop /> </Route>
        {/* In shopItem component, extracting ID and passing it in prop through shopItemId */}
        <Route exact path="/shop/:id" render={(itemProp) => <ShopItem shopItemId={itemProp.match.params.id} />} />
      </Switch> 
    </Router>
    
  );
}

export default App;


// 