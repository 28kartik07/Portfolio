import '../css/project.css'
function Projects()
{
    return (
        <div id="project_main" className='montserrat-aboutme'>
            <div className='project'>
                <div className='elements'>
                    <h1 style={{color:"orange"}}>ConfoEase</h1>
                    <ul>
                        <li>HTML, CSS, JS, EJS, NodeJS, ExpressJS, MongoDB</li>
                        <li>Enables one to create an upcoming conference website
                        through form given in the website</li>
                        <li>User-friendly interface for easy setup and management</li>
                        <li>Secure user authentication and real-time schedule updates</li>
                        <li>Github Link : </li>
                    </ul>
                </div>
                <div className='elements' style={{display:"flex" , justifyContent:"center" , alignItems: "center"}}>
                    <img style={{marginLeft: "2rem" , marginTop:"3rem" , height: "70%" , width: "70%"}} src="video/confoease.gif" alt="gif" />
                </div>
            </div>
            <div className='project'>
                <div className='elements'>
                    <h1 style={{color:"orange"}}>GoType</h1>
                    <ul>
                        <li>HTML, CSS, JS, EJS, NodeJS, ExpressJS, MongoDB</li>
                        <li>Typing Speed and Accuracy practising and measuring website</li>
                        <li>Visual indicators for errors and correct words/characters</li>
                        <li>Profile pages where users can view their typing statistics
                        and history</li>
                        <li>Github Link : </li>
                    </ul>
                </div>
                <div className='elements' style={{display:"flex" , justifyContent:"center" , alignItems: "center"}}>
                    <img style={{marginLeft: "2rem" , marginTop:"3rem" ,height: "70%" , width: "70%"}} src="video/gotype.gif" alt="gif" />
                </div>
            </div>
            <div className='project'>
                <div className='elements'>
                <h1 style={{color:"orange"}}>To-DO List</h1>
                    <ul>
                        <li>HTML, CSS, JS, EJS, NodeJS, ExpressJS, MongoDB</li>
                        <li>To-Do list for enabling efficient task management</li>
                    </ul>   
                </div>
                <div className='elements'  style={{display:"flex" , justifyContent:"center" , alignItems: "center"}}>

                </div>
            </div>
        </div>
    )
}

export default Projects;