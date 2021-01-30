import styled from 'styled-components'

export const ShopItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 50%;
    margin: 0 auto;
    /* background-color: #4b1414; */
    margin-top: 80px;
    border: 5px solid #000;
    grid-gap: 20px;
    
`

export const ItemContainerOne = styled.div`
    padding: 20px 0 20px 20px;
`

export const ItemImage = styled.img`
    width: 100%;
`

export const ItemContainerTwo = styled.div`
    position: relative;

    & h2 {
        font-family: 'Roboto', sans-serif;
        margin-top: 20px;
        font-size: 1.8em;
    }
    & p {
        font-family: 'Roboto', sans-serif;
        margin-top: 20px;
        font-size: 2em;
    }
    & button {
        padding: 20px;
        border: none;
        background-color: #323232;
        color: #fff;
        border-radius: 4px;
        position: absolute;
        top: 30%;
        cursor: pointer;
    }
    & a {
        text-decoration: none;
        background-color: #323232;
        color: #fff;
        padding: 20px;
        border-radius: 4px;
        position: absolute;
        bottom: 20px;
    }
    & .back{
        right: 40px;
        padding: 10px;
    }
`

