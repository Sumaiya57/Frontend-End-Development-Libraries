import { useState } from "react";

function textInput(){

    const [name,setName]=useState("");

    function handleChange(event){
        setName(event.target.value);
    }

    return(
        <div>
            <input type="text" value ={name} onChange={handleChange} placeholder="give your name" />
              <p>Your Name:{name}</p>
        </div>
    );
}

export default textInput;