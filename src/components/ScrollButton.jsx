import { useState , useEffect} from "react";

function ScrollButton ()
{
    const [val, setVal] = useState(0);
    const [path, setPath] = useState("/image/");
    function handleClick()
    {
        if(val == 0)
        {
            const element = document.getElementById("education_main");
            element.scrollIntoView({behavior: 'smooth'});
            setPath("/image/up-arrow.png");
            setVal(1);
        }
        else
        {
            const element = document.getElementById("header_main");
            element.scrollIntoView({behavior: 'smooth'});
            setPath("/image/down-arrow.png");
            setVal(0);
        }
    }
    
    useEffect(() => {
        setPath("/image/down-arrow.png");
    },[]);

    return (
            <button className="scroll_button" onClick={handleClick}>
                <img className="scroll_image" src={path} alt="image" />
            </button>
    )
}

export default ScrollButton;