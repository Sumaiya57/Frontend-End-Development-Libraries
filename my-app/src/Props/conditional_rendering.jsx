function StatusMessage(isOnline){
    return (
        <>
        {isOnline && <p>User is online</p>}
        </>
    );

}
export function App(){
    return(
        <>
        <StatusMessage isOnline="true" />
        <StatusMessage isOnline="false" />
        </>
    );
}