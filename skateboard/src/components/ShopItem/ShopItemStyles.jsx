import styled, { css } from 'styled-components'


export const ShopItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 50%;
    margin: 0 auto;
    margin-top: 80px;
    border: 2px solid #000;
    grid-gap: 20px;
    
    @media (max-width: 1024px){
        width: 80%;
    }

    @media (max-width: 768px){
        width: 90%;
    }
    
    @media (max-width: 630px){
        grid-template-columns: 1fr;
        grid-gap: 0;
        margin-top: 40px;
    }
`

export const ItemContainerOne = styled.div`
    padding: 20px 0 20px 20px;

    @media (max-width: 630px){
        padding-right: 20px;
        padding-bottom: 0;
    }
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

    @media (max-width: 630px){
        padding: 0 20px;
        
    }

    & h2 {
        font-family: 'Roboto', sans-serif;
        margin-top: 20px;
        font-size: 1.8em;
        border-bottom: 1px solid #818080;
        width: 80%;

        @media (max-width: 1024px){
            border-bottom: none;
        }

        @media (max-width: 630px){
            font-size: 1.5em;
        }
    }

    & p {
        font-family: 'Roboto', sans-serif;
        margin-top: 30px;
        font-size: 2em;
        border-bottom: 1px solid #818080;
        width: 25%;

        @media (max-width: 630px){
            margin-top: 10px;
            font-size: 1.3em;
        }
    }

    & button {
        ${BtnLinkSharedStyles}

        padding: 20px;
        border: none;
        background-color: #677764;
        top: 30%;
        cursor: pointer;
        margin-top: 50px;
        font-size: 1em;

        @media (max-width: 1024px){
            padding: 10px;
        }
        @media (max-width: 630px){
            top: 70%;
        }
    }

    & .checkout {
        ${BtnLinkSharedStyles}

        background-color: #6d3232;
        padding: 20px;
        top: 60%;
        right: 0;
        width: 50%;
        margin: 0 auto;
        

        @media (max-width: 630px){
            padding: 10px;
            top: 170px;
        }
    }

     & .back{
        bottom: 22px;
        width: 20%;
        margin: 0;
        padding: 10px;
        background-color: #677764;

        ${BtnLinkSharedStyles}

        @media (max-width: 630px){
            display: none;
        }
    } 
`
    
    

