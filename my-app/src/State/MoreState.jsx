import { useState } from "react";

function Profile(){
    
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
function handleNameChange(event){
        setName(event.target.value);
    }
function handleAgeChange(event){
        setAge(event.target.value);
    }

    return (
    <div>

      <input placeholder="give your name"  value={name} onChange={handleNameChange} />
      <input placeholder="give your Age"  value={age} onChange={handleAgeChange}  />
      <p>Name:{name}, Age:{age}</p>

    </div>
  );

}
export default Profile;