import { ShopItemContainer, ItemContainerOne, ItemImage, ItemContainerTwo} from './ShopItemStyles'

const ShopItem = () => {
    return(
        <div>
            <h1>My SHOP ITEM</h1>

            <ShopItemContainer>
                <ItemContainerOne>
                    <ItemImage> </ItemImage>
                </ItemContainerOne>

                <ItemContainerTwo>

                </ItemContainerTwo>
            </ShopItemContainer>
        </div>
    )
}

export default ShopItem