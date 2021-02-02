import styled, { css } from 'styled-components'

export const ShopItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 50%;
    margin: 0 auto;
    margin-top: 80px;
    border: 2px solid #000;
    grid-gap: 20px;
    
`

export const ItemContainerOne = styled.div`
    padding: 20px 0 20px 20px;
`

export const ItemImage = styled.img`
    width: 100%;
`

const BtnLinkSharedStyles = css`
    position: absolute; 
    text-transform: uppercase; 
    text-decoration: none;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    font-weight: bold;
    left: 0;
`

export const ItemContainerTwo = styled.div`
    position: relative;

    & h2 {
        font-family: 'Roboto', sans-serif;
        margin-top: 20px;
        font-size: 1.8em;
        border-bottom: 1px solid #818080;
        width: 80%;
    }

    & p {
        font-family: 'Roboto', sans-serif;
        margin-top: 30px;
        font-size: 2em;
        border-bottom: 1px solid #818080;
        width: 25%;
    }

    & button {
        padding: 20px;
        border: none;
        background-color: #677764;
        top: 30%;
        cursor: pointer;
        margin-top: 50px;
        font-size: 1em;

        ${BtnLinkSharedStyles}
    }

    & .checkout {
        background-color: #6d3232;
        padding: 20px;
        top: 60%;
        right: 0;
        width: 50%;
        margin: 0 auto;

        ${BtnLinkSharedStyles}
    }

     & .back{
        bottom: 22px;
        width: 20%;
        margin: 0;
        padding: 10px;
        background-color: #677764;

        ${BtnLinkSharedStyles}
    } 
`

