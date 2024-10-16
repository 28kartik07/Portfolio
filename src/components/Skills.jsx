import '../css/skills.css'

function Skills()
{
    return (
        <div id='skill_main'>
            <div className='image_container'>
                <div className='image'>
                   <img src="/image/c++.png" alt="skill" /> 
                </div>
                <div className='image'>
                    <img src="/image/html-5.png" alt="skill" />
                </div>
                <div className='image'>
                    <img src="/image/css3.png" alt="skill" />
                </div>
                <div className='image'>
                    <img src="/image/java-script.png" style={{height:"6rem" , width:"6rem"}} alt="skill" />
                </div>
                <div className='image'>
                    <img src="/image/bootstrap.png" style={{height:"6rem" , width:"6rem"}} alt="skill" />
                </div>
            </div>
            <div className='image_container'>
                <div className='image'>
                    <img src="/image/react.png" alt="skill" />
                </div>
                <div className='image'>
                    <img src="/image/node.png" alt="skill" />
                </div>
                <div className='image'>
                    <img src="/image/express.png" style={{width:"10rem" }} alt="skill" />
                </div>
                <div className='image'>
                    <img src="/image/mongodb.png" alt="skill" />
                </div>
                <div className='image'>
                    <img src="/image/sql-server.png" alt="skill" />
                </div>
            </div>
            <div className='image_container'>
                <div className='image'>
                    <img src="/image/ejs.png" alt="skill" />
                </div>
            </div>
        </div>
    )
}

export default Skills;