import React, { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://clusterverse-backend.onrender.com")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Failed to connect to backend."));
  }, []);

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>{message}</h1>
    </div>
  );
};

export default App;
