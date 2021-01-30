import { Link } from 'react-router-dom'
import { Nav, Title } from './NavStyles' 

const NavBar = ({cartSize}) => {
    return(
        <Nav back>
            
            <Title>
                <Link to="/">Skateboarders</Link>
            </Title>
                
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/cart">Cart ({cartSize})</Link>
                </li>
            </ul>
        </Nav>
    )
}

export default NavBar