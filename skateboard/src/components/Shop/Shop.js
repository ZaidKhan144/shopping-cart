import { ShopPageTitle, ImgDiv, ShopPageContainer } from './ShopStyles'
import data from '../../data'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'

const Shop = () => {
    const skates = data
    
    const HoverShopItem = motion.custom(Link) 

    return(
        <motion.div
            initial={{ x: '100vw'}}
            animate={{x: 0}}
            transition={{type: 'spring', delay: 0.1, stiffness: 60}}
        >
           
            <ShopPageTitle>Complete Skateboards</ShopPageTitle>
            
            <ShopPageContainer>
                {skates.map((skate) => {
                    return (
                        <HoverShopItem 
                        key={skate.id} to={`shop/${skate.id}`}>
                            <ImgDiv style={{
                                backgroundImage: `url(${skate.img})`
                            }}>

                            </ImgDiv>
                        <h1>{skate.name}</h1>
                        <p>${skate.price}</p>
                        </HoverShopItem>
                    )
                })}
            </ShopPageContainer>
            
        </motion.div>
    )
}

export default Shop