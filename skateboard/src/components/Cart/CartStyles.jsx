import styled from 'styled-components'
import { PlusCircle, MinusCircle }  from '@styled-icons/boxicons-regular'


export const ParentCartContainer = styled.div`
    position: absolute;
    top: 20%;
    left: 0;
    bottom: 0;
    right: 0;

    & div {
        & h1{
            text-align: center;
        }
    }
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
        font-size: 1.2em;
    }
`

export const QTY = styled.div`
        display: flex;
    & p {
        margin: auto 5px;
        width: 30%;
        padding: 5px 0;
        text-align: center;
        font-size: 1.2em;
    }
`

export const PlusSign = styled(PlusCircle)`
    margin: auto 0;
    height: 25px;
    width: 25px;
    cursor: pointer;
    
`;

export const MinusSign = styled(MinusCircle)`
    height: 25px;
    width: 25px;
    cursor: pointer;
    margin: auto 0;
`

export const Remove = styled.div`
        display: flex;

     & button {
         margin: auto 0;
         cursor: pointer;
     }   
`

