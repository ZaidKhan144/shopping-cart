import styled from 'styled-components'
import { motion } from 'framer-motion'

const Payment = styled(motion.div)`
    width: 50%;
    margin: 0 auto;
    margin-top: 20%;
    text-align: center;

    @media (max-width: 768px){
        width: 80%;
    }

    & h1{
        margin-bottom: 20px;
    }
` 

export default Payment