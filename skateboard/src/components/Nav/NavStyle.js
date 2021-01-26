import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    background-color: #323232;
    align-items: center;
    color: #fff;

    & ul {
        display: flex;
        list-style-type: none;
        
        & li a {
            color: #fff;
            text-decoration: none;
            padding-left: 30px;
        }
    }

    @media (max-width: 630px){
        justify-content: center;
    }

`
export const Title = styled.h3`
    a {
        color: #fff;
        text-decoration: none;
    }

    @media (max-width: 630px){
        display: none;
    }

`
