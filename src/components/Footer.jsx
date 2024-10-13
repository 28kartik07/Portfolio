import '../css/footer.css'
function Footer()
{
    return (
        <div id="footer_main">
            <div className='footer_element' style={{marginLeft: '5rem'}}>
                <img className='footer_image' src="public/image/gmail.png" alt="gmail" />
            </div>
            <div className='footer_element'>
                <img className='footer_image' src="public/image/linkedin.png" alt="gmail" />
            </div>
            <div className='footer_element'>
                <img className='footer_image' src="public/image/phone.png" alt="gmail" />
            </div>
            <div className='footer_element'>
                <img className='footer_image' src="public/image/location-pin.png" alt="gmail" />
            </div>
        </div>
    )
}

export default Footer