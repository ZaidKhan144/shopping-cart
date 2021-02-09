import { Link } from 'react-router-dom'
import { Nav, Title, GitLogo } from './NavStyles' 

const NavBar = ({cartSize}) => {
    return(
        <Nav>
            
            <Title>
                <Link to="/">Skateboarders</Link>
            </Title>

            <a href="https://github.com/ZaidKhan144/shopping-cart" target="_blank" rel="noreferrer"><GitLogo></GitLogo></a>

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