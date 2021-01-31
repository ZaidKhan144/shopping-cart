import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import NavBar from './components/Nav/Nav'
import Shop from './components/Shop/Shop'
import ShopItem from './components/ShopItem/ShopItem'
import Cart from './components/Cart/Cart'
import { useState } from 'react'

const App = () => {

  const [shoppingCart, setShoppingCart] = useState([]);

  const addItemInCart = (item) => {

    // Check whether the item exist or not
    const itemIndex = shoppingCart.findIndex((i) => i.id === item.id)
    // return -1 if it didn't exist
    console.log(itemIndex)
    
    if(itemIndex !== -1){
      const newCart = [...shoppingCart];
      // increasing the quantity of an index that we have our item on
      newCart[itemIndex].quantity++
    } else {
      // Adding the item but not increasing the quantity, it's already handled at onClick.
      setShoppingCart([...shoppingCart, item])
      // shoppingCart is not empty anymore
    }
    console.log(shoppingCart)
  }
  
  return (
    <Router>
      <NavBar cartSize={shoppingCart.length} />
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route exact path="/shop"> <Shop /> </Route>
        {/* In shopItem component, extracting ID and passing it in prop through shopItemId */}
        <Route exact path="/shop/:id" render={(itemProp) => <ShopItem shopItemId={itemProp.match.params.id} addItemInCart={addItemInCart} />} />
        <Route exact path="/cart"> <Cart addItemInCart={addItemInCart} shoppingCart={shoppingCart} /> </Route> 
      </Switch> 
    </Router>
    
  );
}

export default App;


