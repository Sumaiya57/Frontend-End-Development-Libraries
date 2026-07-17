import { useState } from "react";
function toggleButton(){

    const [isOn, setIsON] = useState(false);
    
    return(
        <div>
            <p>{ isOn ? "ON" : "OFF"}</p>
            <button onClick={()=> setIsON(!isOn)}>Toggle</button>
        </div>
    );
}
export default ToogleButton;