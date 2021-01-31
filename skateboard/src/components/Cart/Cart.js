import { ParentCartContainer, CartContainer, Product, Price, QTY, Remove } from './CartStyles'
 

const Cart = ({addItemInCart, shoppingCart}) => {
    return (
        <ParentCartContainer> 
        
            { shoppingCart.map((item) => {
                return (
                    <CartContainer key={item.id}>
                        <Product>
                            <img src={item.img} alt={item.name}></img>
                            <p>{item.name}</p> 
                        </Product>

                        <QTY> 
                            <input type="number" value={item.quantity} />
                        </QTY>
                        
                        <Price>
                            <p>$ {item.price}</p>
                        </Price>

                        <Remove>
                            <p>Remove</p>
                        </Remove>
                    </CartContainer>
                )
            })}
        </ParentCartContainer>
    )
}

export default Cart