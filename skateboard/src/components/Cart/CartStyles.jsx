import styled, { css } from 'styled-components'
import { PlusCircle, MinusCircle }  from '@styled-icons/boxicons-regular'
import { RemoveShoppingCart } from '@styled-icons/material'

export const ParentContainer = styled.div`
    display: grid;
    max-width: 1180px;
    margin: 0 auto;
    grid-template-columns: 2fr 1fr;
    padding-top: 50px;
    min-height: 80vh;
    grid-gap: 80px;
`

export const DaddyCart = styled.div`
    margin-top: 20px;
    
`

export const CartItemsHeading = styled.div`
    display: flex;
   
    & h1{
        margin: 0;
    }
`

export const CartStructure = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    margin-bottom: 80px;
`

export const CartItems = styled.div`
    
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    margin-top: 15px;
    min-height: 40px;
    grid-column: 1/5;
    padding-bottom: 10px;
    border-bottom: 2px solid #b3aaaa;
`
export const OrderSummary = styled.div`
       
        margin-top: 15px;
    & h1 {
        margin: 0;
    }

    & div {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        & p{
            font-size: 1.4em;
            text-transform: uppercase;
            margin-bottom: 60px;
        }
    }

    & a {
        display: block;
        text-decoration: none;
        text-transform: uppercase;
        background-color: #677764;
        color: #fff;
        margin-bottom: 40px;
        padding: 15px;
        text-align: center;
        border-radius: 4px;
        font-weight: bold;
    }

    & a:nth-child(4){
        background-color: #fff;
        color: #000;
        border: 2px solid #000;
        margin-bottom: 0;
    }
`

export const Product = styled.div`
    
    padding-top: 20px;
    & img {
        width: 80px;
        height: 80px;
    }
    & p {
        margin-top: 10px;
        font-size: 1.1em;
    }
`

export const Price = styled.div`
    
        display: flex;
    & p {
        margin: auto;
        font-size: 1.2em;
    }
`
const QTYIconsSharedStyle = css`
    margin: auto;
    height: 25px;
    width: 25px;
    cursor: pointer;
`

export const PlusSign = styled(PlusCircle)``
export const MinusSign = styled(MinusCircle)``

export const QTY = styled.div`
        
        display: flex;
    & p {
        margin: auto 0;
        width: 30%;
        padding: 5px 0;
        text-align: center;
        font-size: 1.2em;
    }
    ${PlusSign}{
        ${QTYIconsSharedStyle}
    }
    ${MinusSign}{
        ${QTYIconsSharedStyle}
    }
`

export const RemoveIcon = styled(RemoveShoppingCart)``

export const Remove = styled.div`
        display: flex;
        
        ${RemoveIcon}{
            height: 25px;
            width: 25px;
            cursor: pointer;
            margin: auto;
        }
`

export const EmptyCart = styled.div`
        width: 50%;
        margin: 0 auto;
        margin-top: 80px;
        text-align: center;

        & a{
            display: block;
            text-decoration: none;
            text-transform: uppercase;
            background-color: #677764;
            color: #fff;
            padding: 15px;
            text-align: center;
            border-radius: 4px;
            font-weight: bold;
            width: 30%;
            margin: 80px auto;
        }
` 



