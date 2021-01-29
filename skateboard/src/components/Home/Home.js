import skateboardVideo from './s3.mp4'
import { Video, Overlay, HomeHeading } from './HomeStyles'


const Home = () => {
    return(
        
        <div>
           <Overlay>
                <Video playsInline autoPlay muted loop> 
                        <source src={skateboardVideo} type="video/mp4"></source>
                            "Your browser does not support the video tag."
                </Video>
           </Overlay>
            
            <HomeHeading>
                <h1>Glide on your own four wheels</h1>
            </HomeHeading>
            
        </div>
    )
}
export default Home