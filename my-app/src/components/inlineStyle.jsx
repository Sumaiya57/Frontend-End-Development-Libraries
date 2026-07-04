//object
function Button() {
  const myStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
  };

  return <button style={myStyle}>Click Me</button>;
}

//direct object
function Button() {
  return (
    <button style={{ backgroundColor: "blue", color: "white" }}>
      Click Me
    </button>
  );
}

//dynamic style
function Button({ isLoggedIn }) {
  const buttonStyle = {
    backgroundColor: isLoggedIn ? "green" : "red", // 🔴 লগইন না থাকলে লাল, ✅ থাকলে সবুজ
    color: "white",
    padding: "10px 20px",
  };

  return <button style={buttonStyle}>
    {isLoggedIn ? "Logout" : "Login"}
  </button>;
}