import { ParentCartContainer, CartContainer, Product, Price, QTY, Remove, PlusSign, MinusSign } from './CartStyles'
 

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
                                    <MinusSign onClick={() => item.quantity > 1 && removeItem(item)} />
                                    <p>{item.quantity}</p>
                                    <PlusSign onClick={() => addItemInCart(item)} />
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
                    <p>Total Price: {shoppingCart.reduce((total, item) => {
                        return total + item.price * item.quantity
                    }, 0).toFixed(2)}</p>
            </div>
            :  <h1>Your Cart is Empty</h1>
        }
        </ParentCartContainer>
    )
}

export default Cart

