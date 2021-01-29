import styled from 'styled-components'
// import  { Nav } from '../Nav/NavStyles'

// export const ShopNav = styled(Nav)`
//     background-color: #323232;
// `;

export const ShopPageTitle = styled.h1`
    text-align: center;
    margin: 0;
    padding-top: 30px; 
    font-family: 'Roboto', sans-serif;
    font-size: 1.7em;
    color: #000;
`

export const ImgDiv = styled.div`
    height: 400px;
    width: 80%;
    background-position: center;
    background-size: cover;
    margin: 0 auto;
    
`

export const ShopPageContainer = styled.div`
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 70%;
    margin: 0 auto;
    grid-gap: 40px;
    margin-top: 50px;
    margin-bottom: 80px;

    & a{
        text-decoration: none;
        color: #000;
        border: 2px solid #000;
        margin-bottom: 20px;
        padding: 20px 0;

        & h1{
            width: 70%;
            margin: 5px auto;
            font-size: 1.2em;
        }

        & p {
            width: 70%;
            margin: 0 auto;
            font-size: 1.2em;
            font-weight: bold;
        }
    }
`
