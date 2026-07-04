function Child(props){
    return( 
        <h1>Title:{props.title}
        Level:{props.level}
     </h1>
     
     );
    
}
function Parent(){
    const info={ title: "React Basics", level: "Beginner" };
    return <Child {...info} />

}
export default Parent;