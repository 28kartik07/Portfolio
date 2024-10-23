import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
function AppLayout ()
{
    return (
        
        <div style={{display: 'flex', flexDirection: 'column',flexWrap:'wrap',}}>
            <Header />
            <Outlet />
            <Footer />
        </div>
        
    )
}

export default AppLayout