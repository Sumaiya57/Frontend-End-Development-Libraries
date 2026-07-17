import { useState } from "react";

function counter(){
    const initialValue =0;
    const [count ,setCount] =useState(initialValue);
    
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={() =>
             setCount(count+1)} >Increment</button>
              <button onClick={() =>
             setCount(count-1)} >Decrement</button>
             <button onClick={() =>
             setCount(0)} >Reset</button>

        </div>
    );
}