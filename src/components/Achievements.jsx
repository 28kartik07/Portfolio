import '../css/achievement.css'
function Achievements()
{
    return (
        <div id='achievement_main'>
            <div className='content montserrat-aboutme '>
                <div className='element'>
                    <h2 style={{marginTop:'4rem' , marginBottom: '0px'}}>Achievement</h2>
                    <ul>
                        <li>Secured 1st place in CSS Battle, Avishkar’24</li>
                        <li>Secured 1st position in Softablitz, CodeSangam’23</li>
                        <li>AIR RANK - 136 NIMCET 2022</li>
                    </ul>
                </div>
                <div className='element' style={{justifyContent: "end"}}>
                    <h2 style={{marginTop:'4rem' , marginBottom: '0px'}}>Work</h2>
                    <ul> 
                        <li>Managed Public Relations at Avishkar (2022-23), Coordinated Coding Fest at MNNIT.</li>
                        <li>Vice President at Criador (2020-21), Managed Art Society at University of Delhi</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Achievements