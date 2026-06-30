function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h2>hello</h2>
    </Card>
  );
}

export default App;