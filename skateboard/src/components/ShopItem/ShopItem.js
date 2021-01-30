import { ShopItemContainer, ItemContainerOne, ItemImage, ItemContainerTwo} from './ShopItemStyles'
import data from '../../data'
import { Link } from "react-router-dom"


const ShopItem = ({shopItemId, addItemInCart}) => {

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
     const handleClick = () => addItemInCart({ ...item, quantity: 1})
    return(
        <div>
        
            <ShopItemContainer>
                <ItemContainerOne>
                    <ItemImage src={item.img} />
                </ItemContainerOne>

                <ItemContainerTwo>
                    <h2>{item.name}</h2>
                    <p>$ {item.price}</p>
                    <button onClick={handleClick}>Add to cart</button>
                    <Link to="/checkout">Checkout</Link>
                    <Link className="back" to="/shop">Back</Link>
                </ItemContainerTwo>
            </ShopItemContainer>
        </div>
    )
}

export default ShopItem