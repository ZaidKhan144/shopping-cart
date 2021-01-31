import styled from 'styled-components'

export const ParentCartContainer = styled.div`
    position: absolute;
    top: 20%;
    left: 0;
    bottom: 0;
    right: 0;
`

export const CartContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 50%;
    margin: 0 auto;
    background-color: orange;
    padding: 20px;
    
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
        margin: auto 0;
    }
`

export const QTY = styled.div`
        display: flex;
    & input {
        margin: auto 0;
        width: 50%;
    }
`

export const Remove = styled.div`
        display: flex;

     & p {
         margin: auto 0;
     }   
`
