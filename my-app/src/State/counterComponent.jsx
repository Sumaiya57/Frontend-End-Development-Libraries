import { useState } from "react";

function counter(){
    const initialValue =0;
    const [count ,setCount] =useState(initialValue);
    function handleDecrease() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

    return(
        <div>
            <h2>Quantity:{count}</h2>
            <button onClick={() =>
             setCount(count+1)} >Increment</button>
            <button onClick={handleDecrease} >Decrement</button>
             <button onClick={() =>
             setCount(0)} >Reset</button>

        </div>
    );
}