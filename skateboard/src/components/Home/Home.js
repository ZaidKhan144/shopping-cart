import skateboardVideo from './s3.mp4'
import Overlay from './HomeStyles'


const Home = () => {
    return(
        
        <div>
           <Overlay>
                <video playsInline autoPlay muted loop> 
                    <source src={skateboardVideo} type="video/mp4"></source>
                            "Your browser does not support the video tag."
                </video>
                <h1>Glide on your own four wheels</h1>
           </Overlay>
            
        </div>
    )
}
export default Home