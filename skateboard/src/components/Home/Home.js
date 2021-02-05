import skateboardVideo from './s3.mp4'
import Overlay from './HomeStyles'
import { motion } from 'framer-motion'
import p1 from './p1.jpg'
import p2 from './p2.jpeg'

const Home = () => {

    // To make things clean I made variant for home title, you can name the property with anything you want. 
    // To make it work, Just call them on the element. 
    const HomeTitleVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 1,
                duration: 1
            }
        }
    }

    return(
        
        <div>
           <Overlay>
                    <img src={p2} alt=""></img>
                    <div></div>
                    <video playsInline autoPlay muted loop> 
                        <source src={skateboardVideo} type="video/mp4"></source>
                                "Your browser does not support the video tag."
                    </video>
                    <img src={p1} alt=""></img>
                
           </Overlay>
           <motion.h1 
            // This is how we access the variants.
                variants={HomeTitleVariants}
                initial="hidden" 
                animate="visible"
            >
                Glide on your own four <span>Wheels</span></motion.h1>
        </div>
    )
}
export default Home

