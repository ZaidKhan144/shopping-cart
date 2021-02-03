import { ParentCartContainer, 
    CartContainer, 
    Product, 
    Price, 
    QTY, 
    Remove, PlusSign, MinusSign, RemoveIcon, PriceContainer, CartAndPrice, ShoppingCartHeading } from './CartStyles'
import { Link } from "react-router-dom" 

const Cart = ({addItemInCart, shoppingCart, removeItem}) => {

    return (
        <ParentCartContainer> 
        { shoppingCart.length > 0 ? 
            <div>
                <ShoppingCartHeading>
                    <h1>Your Cart Items </h1>
                    <h1 className="order">Order Summary</h1>
                </ShoppingCartHeading>
                
                  <CartAndPrice>
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
                                        <RemoveIcon onClick={() => removeItem(item, "Whole")} />
                                    </Remove>
                                </CartContainer>
                                
                                )
                            })
                        }
                        
                    <PriceContainer>
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
                       
                        <Link to="/complete">Pay</Link>
                        <Link to="/shop">Continue Shopping</Link>
                    </PriceContainer>
                </CartAndPrice>
            </div>
                
             : 
            <div className="emptyCart">
                <h1>Your Cart is Empty</h1>
                <Link to="/shop">Go Back</Link>
            </div>
             
        }
        </ParentCartContainer>
    )
}

export default Cart

