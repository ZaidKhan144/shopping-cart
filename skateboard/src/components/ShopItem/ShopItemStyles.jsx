import styled from 'styled-components'

export const ShopItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 50%;
    margin: 0 auto;
    /* background-color: #4b1414; */
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
        color: #fff;
        border-radius: 4px;
        position: absolute;
        top: 30%;
        cursor: pointer;
        margin-top: 50px;
        text-transform: uppercase;
        font-size: 1em;
    }
    & .checkout {
        text-decoration: none;
        background-color: #6d3232;
        color: #fff;
        padding: 20px;
        border-radius: 4px;
        position: absolute;
        top: 60%;
        left: 0;
        right: 0;
        text-transform: uppercase;
        width: 50%;
        margin: 0 auto;
        text-align: center;
        font-weight: bold;
    }

     & .back{
        position: absolute; 
         text-transform: uppercase; 
        bottom: 22px;
        width: 20%;
        left: 0;
        margin: 0;
        text-align: center; 
        text-decoration: none;
        color: #fff;  
        padding: 10px;
        border-radius: 4px; 
        background-color: #677764;
    } 
`

