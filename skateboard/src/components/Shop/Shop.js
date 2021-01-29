// import { Nav, Title } from '../Nav/NavStyles'
// import NavBar from '../Nav/Nav'
import { ShopPageTitle, ImgDiv, ShopPageContainer } from './ShopStyles'
import data from '../../data'
import { Link } from "react-router-dom"

const Shop = () => {
    const skates = data
    
    return(
        <div>
           
            <ShopPageTitle>Complete Skateboards</ShopPageTitle>
            
            <ShopPageContainer>
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
            </ShopPageContainer>
            
        </div>
    )
}

export default Shop