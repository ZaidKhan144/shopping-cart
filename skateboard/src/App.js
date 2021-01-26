import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/Nav/Nav'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/"> <Home /> </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
