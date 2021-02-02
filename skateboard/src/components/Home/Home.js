import skateboardVideo from './s3.mp4'
import Overlay from './HomeStyles'
import p1 from './p1.jpg'
import p2 from './p2.jpeg'

const Home = () => {
    return(
        
        <div>
           <Overlay>
           <img src={p2} alt=""></img>
                <video playsInline autoPlay muted loop> 
                    <source src={skateboardVideo} type="video/mp4"></source>
                            "Your browser does not support the video tag."
                </video>
                <img className="p1" src={p1} alt=""></img>
                
           </Overlay>
           <h1>Glide on your own four <span>Wheels</span> </h1>
        </div>
    )
}
export default Home

