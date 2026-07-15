function FruitList(){
    const fruits=['Apple', 'Mango', 'Banana'];
    return <Food fruits={fruits} />;

}
function Food({fruits}){
    return(
        <ul>
        {fruits.map((fruit)=>(
        <li key={fruit}>{fruit}</li>
        ))
        }
       
        </ul>
    );
}
export default FruitList;