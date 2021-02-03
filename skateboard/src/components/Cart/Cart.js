import { ParentContainer, 
        Product, 
        Price, 
        QTY, 
        Remove, DaddyCart, CartItemsHeading, CartStructure, CartItems, OrderSummary, PlusSign, MinusSign, RemoveIcon, EmptyCart } from './CartStyles'
import { Link } from "react-router-dom" 

const Cart = ({addItemInCart, shoppingCart, removeItem, purchase}) => {
    return (
       <div> {
           shoppingCart.length > 0 ? 
           <ParentContainer>
                <DaddyCart>
                    <CartItemsHeading>
                        <h1>Your Cart Items</h1>
                    </CartItemsHeading>
                    <CartStructure>
                        {
                            shoppingCart.map((item) => {
                                return (
                                    <CartItems key={item.id}>
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
                                            <RemoveIcon onClick={() => removeItem(item, "Whole")} />
                                        </Remove>
                                    </CartItems>
                                )
                            })
                        }
                    </CartStructure>
                </DaddyCart>

                <OrderSummary>
                    <h1>Order Summary</h1>
                    <div>
                        <p>Total Price: </p> 
                            <p> 
                                ${
                                    shoppingCart.reduce((total, item) => {
                                        return total + item.price * item.quantity 
                                    }, 0).toFixed(2) 
                                }
                            </p>
                    </div>
                    <Link to="/complete" onClick={() => purchase()} >Pay</Link>
                    <Link to="/shop">Continue Shopping</Link>
                </OrderSummary>
            </ParentContainer>

            :  <EmptyCart>
                    <h1>There is nothing in your cart yet.</h1>
                    <Link to="/shop">Go to shop</Link>
                </EmptyCart>
       }
            
       </div> 
       
    )
}

export default Cart

