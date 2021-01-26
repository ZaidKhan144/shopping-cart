import skateboardVideo from './s3.mp4'
import Video from './HomeStyles.js'

const Home = () => {
    return(
        <div>
            <h1>Remove the boilerplate code</h1>
            <Video playsInline autoPlay muted loop> 
                <source src={skateboardVideo} type="video/mp4"></source>
                    "Your browser does not support the video tag."
            </Video>
            
        </div>
    )
}
export default Home