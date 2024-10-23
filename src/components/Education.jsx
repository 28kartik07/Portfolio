import '../css/education.css'

function Education ()
{
    return (
        <div id="education_main" className='montserrat-aboutme'>
            <div className='education_element'>
                <h2 style={{marginLeft : "1rem" , color:"rgb(254, 177, 34)"}}>Education</h2>
                <ul>
                    <li style={{marginBottom: "0px" , marginTop: "0px"}}>
                        <div>
                            <h4 style={{marginBottom: "0px"}}>Master's of Computer Application</h4>
                            <h6 style={{marginTop: "8px" ,marginBottom: "0px"}}>August 2022 -- Ongoing</h6>
                            <h6 style={{marginTop: "8px"}}>CGPA : 7.65/10</h6>
                        </div>
                    </li> 
                    <li style={{marginBottom: "0px" , marginTop: "0px"}}> 
                        <div>
                            <h4 style={{marginBottom: "0px"}}>Bachelor's of Computer Science</h4>
                            <h6 style={{marginTop: "8px" ,marginBottom: "0px"}}>August 2018 -- June 2021</h6>
                            <h6 style={{marginTop: "8px"}}>CGPA : 7.23/10</h6>
                        </div>
                    </li>
                    <li style={{marginBottom: "0px" , marginTop: "0px"}}>
                        <div>
                            <h4 style={{marginBottom: "0px"}}>XII</h4>
                            <h6 style={{marginTop: "8px" ,marginBottom: "0px"}}>August 2017 -- June 2018</h6>
                            <h6 style={{marginTop: "8px"}}>Percentage : 91%</h6>
                        </div>
                    </li>
                    <li style={{ marginTop: "0px"}}>
                        <div>
                            <h4 style={{marginBottom: "0px"}}>X</h4>
                            <h6 style={{marginTop: "8px" ,marginBottom: "0px"}}>August 2025 -- June 2016</h6>
                            <h6 style={{marginTop: "8px"}}>CGPA : 9.2/10</h6>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div className='education_element'>
                <img className='education_image' src="image/download.jpeg" alt="hello" />
                <div className='bulb' >
                </div>
            </div>
        </div>
    )
}

export default Education