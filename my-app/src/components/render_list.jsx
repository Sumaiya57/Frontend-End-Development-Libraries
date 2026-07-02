function FruitList(){
    const fruits =["apple","banana","mango"];
    return(
        <ul>
            {fruits.map((fruit,index) =>(
                   <li key={`${fruit}-${index}`}>{fruit}</li> 
                ))}
        </ul>
    );
}

export default FruitList;