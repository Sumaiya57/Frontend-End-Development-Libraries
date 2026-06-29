function App(){
   return(
     <>
    <Greeting name="j" />
    <Greeting name="k" />
    <Greeting name="l" />
    </>
   );
    
}
export default App;

function Greeting (props){
    console.log(props);
    return <h1>Hi {props.name}!</h1>;
}

