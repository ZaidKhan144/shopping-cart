import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Overlay = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -3;
    display: grid;
    grid-template-columns: 500px 1fr 550px;


    @media (max-width: 1024px){
        grid-template-columns: 1fr;  
    }

    & div {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
    }

    & video {
        object-fit: cover;
        width: 100vw;
        height: 100vh;
        position: relative;
        top: 0;
        left: 0;
        z-index: -2;
        opacity: .95;
        display: block;
        max-width: 100%;  
    }

    & img {
        display: block;
        width: 100%;
        height: 100vh;

        @media (max-width: 1024px){
            display: none;
        }
    }

    + h1{
        position: absolute;
        top: 570px;
        left: 13%;
        right: 0;
        bottom: 0;
        color: #fff;
        margin: 0;
        font-size: 3em;
        font-family: 'Noto Sans JP', sans-serif;
        text-align: center;

        @media (max-width: 1024px){
            left: 0;
        }

        @media (max-width: 630px){
            top: 350px;
        }

        & span {
            color: #8a2824;
        }
    }
`

export default Overlay
