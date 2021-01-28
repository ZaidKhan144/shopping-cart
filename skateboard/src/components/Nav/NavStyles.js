import styled, { css } from 'styled-components'

// const backtrans = (props) => 
//     props?.bct ? css({ backgroundColor: props.bct}) : undefined;

// const backblack = (props) => 
//     props?.bcb ? css({ backgroundColor: props.bcb }) : undefined;




export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    /* background-color: ${props => props.back ? "transparent" : "#323232"}; */
    background-color: #323232;
    align-items: center;
    padding-right: 10%;
    padding-left: 10%;

    & ul {
        display: flex;
        list-style-type: none;
        margin-top: 30px;

        & li {
            padding-left: 30px;
        }
        

        & li a {
            color: #ffffff;
            text-decoration: none;
            font-size: 1.4em;
            font-family: 'Roboto', sans-serif;

            &::after{
                content: "";
                width: 0%;
                height: 5px;
                display: block;
                background-color: #ffffff;
                -webkit-transition: all .5s cubic-bezier(.545,.04,.13,.965);
                transition: all .5s cubic-bezier(.545,.04,.13,.965);
            }
            &:hover::after{
                width: 100%;
                transition: all .5s;
            }
            &:not(:hover){
                width: 0%;                         
                transition: all .5s;
            }
        }
    }

    @media (max-width: 630px){
        justify-content: center;
    }

`
export const Title = styled.h3`
        
        margin-top: 0px;
        margin-bottom: 0px;
        padding-top: 30px;
        font-size: 2.5em;
        font-family: 'Londrina Solid', cursive;
        font-weight: 1000;
        letter-spacing: 2px;
    a {
        color: #fff;
        text-decoration: none;
        
    }

    @media (max-width: 630px){
        display: none;
    }

`
