import { ShopItemContainer, ItemContainerOne, ItemImage, ItemContainerTwo} from './ShopItemStyles'
import data from '../../data'
import { Link } from "react-router-dom"
import { useState } from 'react'
import { motion } from 'framer-motion'
 

const ShopItem = ({shopItemId, addItemInCart}) => {

    const [showCheckoutBtn, setShowCheckoutBtn] = useState(false)

    // ID is in string so here we are converting it in Integer
    const IntId = parseInt(shopItemId, 10)
    let item;

    for(let i = 0; i< data.length; i++){
        // Checking if both the ID's match 
        if(data[i].id === IntId){
            // if it does then put your data in item
            item = data[i]
        }
     }

    // on click set the quantity to 1 and pass the item
    const handleClick = () => {
        addItemInCart({ ...item, quantity: 1}) 
        setShowCheckoutBtn(true)
    }
        
    const LinkMotion = motion.custom(Link) 

    const CartBtnAnimation = {
        initial: { y: -250},
        animate: { y: -10}
    }

    return(
        <div>
        
            <ShopItemContainer>
                <ItemContainerOne>
                    <ItemImage src={item.img} />
                </ItemContainerOne>

                <ItemContainerTwo>
                    <h2>{item.name}</h2>
                    <p>${item.price}</p>
                    <motion.button animate={CartBtnAnimation.animate} initial={CartBtnAnimation.initial} onClick={handleClick}>Add to cart</motion.button>
                    { showCheckoutBtn ? <LinkMotion initial={{ x: '-100vw'}} animate={{ x: 0}} className="checkout" to="/cart">Checkout</LinkMotion> : null }
                    
                        <Link className="back" to="/shop">Back</Link>
                    
                    
                </ItemContainerTwo>
            </ShopItemContainer>
        </div>
    )
}

export default ShopItem