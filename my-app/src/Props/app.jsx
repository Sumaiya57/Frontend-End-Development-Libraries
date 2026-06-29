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

function Greeting ({name}){
    console.log(name);
    return <h1>Hi {name}!</h1>;
}

