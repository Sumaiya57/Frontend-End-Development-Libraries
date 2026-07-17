import { useState } from "react";

function Profile(){
    
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    return (
    <div>

      <input placeholder="give your name"  value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="give your Age"  value={age} onChange={(e) => setAge(e.target.value)}  />
      <p>Name:{name}, Age:{age}</p>

    </div>
  );

}
export default Profile;