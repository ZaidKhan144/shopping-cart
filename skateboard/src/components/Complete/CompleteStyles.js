import styled from 'styled-components'
import { motion } from 'framer-motion'
import { BackToBtnSharedStyle } from '../Cart/CartStyles'

const Payment = styled(motion.div)`
    width: 50%;
    margin: 0 auto;
    margin-top: 15%;
    text-align: center;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px){
        width: 80%;
    }

    & h1{
        margin-bottom: 20px;
    }

    & a{
        ${BackToBtnSharedStyle}
        margin: 50px auto;
    }
` 

export default Payment