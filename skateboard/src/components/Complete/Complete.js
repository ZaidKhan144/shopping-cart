import Payment from './CompleteStyles'

const Complete = () => {
    return (
        <Payment
            initial={{ x: '100vw'}}
            animate={{x: 0}}
            transition={{type: 'spring', delay: 0.1, stiffness: 60}}
        >
            <h1>Thank You for your Payment!</h1>
            <h3>We will process the order shortly.</h3>
        </Payment>
    )   
}

export default Complete