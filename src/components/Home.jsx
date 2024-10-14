import '../css/home.css'
import Education from './Education';
import ScrollButton from './ScrollButton';
function Home()
{
    return (
        <div style={{display:"flex" ,flexDirection:"column", justifyContent: "center",alignItems:"center"}}>
            <div className="home_main" id='home_main'>
                <div className='home_element' style={{width : "40%"}}>
                    <img className="my_image glow-image" src="image/mypic.jpeg" alt="" /> 
                </div>
                <div className='home_element'  style={{width : "60%"}}>
                    <div className='about-me montserrat-aboutme' style={{height : "80%", marginTop:"2rem"}}>
                        <div style={{marginLeft : "2rem", marginBottom : "0px", marginTop:"5rem"}}>
                            <span style={{fontSize : "20px", marginRight:"1rem"}}>Hi! I'm</span>
                            <span style={{fontSize : "35px"}}>Kartik Chandra. </span> 
                        </div>
                        <p style={{marginLeft: "2rem"}}>Passionate about learning and acquiring new skills.</p>

                        <div style={{marginLeft : "2rem", marginTop : "2px",marginRight:"2rem"}}>
                            <p>I am a software and full-stack developer currently pursuing my Master's in Computer Application from Motilal Nehru National Institute of Technology Allahabad. I have a strong interest in problem-solving and developing new ideas. In addition to my technical pursuits, I enjoy drawing, fitness, sports, and music.</p>
                        </div>
                    </div>
                </div>
            </div>

            <ScrollButton/>

            <div className='home_main'>
                <Education/>
            </div>
            
        </div>
        
    ) 
}

export default Home;