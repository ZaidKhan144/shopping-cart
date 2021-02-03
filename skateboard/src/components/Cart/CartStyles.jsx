import styled, { css } from 'styled-components'
import { PlusCircle, MinusCircle }  from '@styled-icons/boxicons-regular'
import { RemoveShoppingCart } from '@styled-icons/material'


export const ParentCartContainer = styled.div`
    position: absolute;
    top: 15%;
    left: 0;
    bottom: 0;
    right: 0;
    
`

export const ShoppingCartHeading = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    & h1{
        text-align: center;
        width: 46%;
        max-width: 888px;
    }
    & .order{
        width: 38.4%;
        max-width: 900px;
        text-align: left;
    }
`

export const CartAndPrice = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 70%;
    margin: 0 auto;
    grid-gap: 20px;
`

export const CartContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    
    
    /* width: 50%;
    margin: 0 auto; */
    border-bottom: 2px solid #b3aaaa;
    /* background-color: orange; */
    padding: 20px;
    grid-auto-flow: column;
`

export const PriceContainer = styled.div`
    /* background-color: yellow; */
    /* width: 50%;
    margin: 0 auto; */
    /* text-align: center;
    display: flex;
    justify-content: space-evenly; */

    & div {
        display: flex;
        justify-content: space-between;
        width: 100%;

        & p{
            font-size: 1.4em;
            text-transform: uppercase;
            margin-bottom: 30px;
        }
    }

    & a {
        display: block;
        text-decoration: none;
        text-transform: uppercase;
        background-color: #677764;
        color: #fff;
        margin-bottom: 20px;
        padding: 15px;
        text-align: center;
        border-radius: 4px;
        font-weight: bold;
    }

    & a:nth-child(3){
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





