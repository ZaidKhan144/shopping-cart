import { ShopItemContainer, ItemContainerOne, ItemImage, ItemContainerTwo} from './ShopItemStyles'
import data from '../../data'
import { Link } from "react-router-dom"


const ShopItem = (shopItemId) => {

    // this will return ID in an object
    console.log(shopItemId)

    // extracting the ID from 'shopItemId' object
    const ItemId = shopItemId.shopItemId;

    // ID is in string so here we are converting it in Integer
    const IntId = parseInt(ItemId, 10)

    let item;

    for(let i = 0; i< data.length; i++){
        // Checking if both the ID's match 
        if(data[i].id === IntId){
            // if it does then put your data in item
            item = data[i]
        }
     }

    return(
        <div>
        
            <h1>My SHOP ITEM</h1>
            

            <ShopItemContainer>
                <ItemContainerOne>
                    {/* <ItemImage></ItemImage> */}
                </ItemContainerOne>

                <ItemContainerTwo>
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                </ItemContainerTwo>
            </ShopItemContainer>
        </div>
    )
}

export default ShopItem