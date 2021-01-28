// import { Nav, Title } from '../Nav/NavStyles'
// import NavBar from '../Nav/Nav'
import { ShopPageTitle, ImgDiv } from './ShopStyles'
import Catalog from '../../data'
import { Link } from "react-router-dom"

const Shop = () => {
    const skates = Catalog
    
    return(
        <div>
            <ShopPageTitle>Complete Skateboards</ShopPageTitle>
            
            <div>
                {skates.map((skate) => {
                    return (
                        <Link key={skate.id} to={`shop/${skate.id}`}>
                            <ImgDiv style={{
                                backgroundImage: `url(${skate.img})`
                            }}>

                            </ImgDiv>
                        <h1>{skate.name}</h1>
                        <p>$ {skate.price}</p>
                        </Link>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Shop