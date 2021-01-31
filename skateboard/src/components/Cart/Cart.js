import { ParentCartContainer, CartContainer, Product, Price, QTY, Remove } from './CartStyles'
 

const Cart = ({addItemInCart, shoppingCart, removeItem}) => {

    return (
        <ParentCartContainer> 
        { shoppingCart.length > 0 ? 
            <div>
                <h1>Your Cart Items</h1> 
                    {
                        shoppingCart.map((item) => {
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
                                   <button onClick={() => removeItem(item, "Whole")}>Remove</button>
                                </Remove>
                            </CartContainer>
                            )
                         })
                    }
            </div>
            :  <h1>Your Cart is Empty</h1>
        }
        </ParentCartContainer>
    )
}

export default Cart

