import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { useRoutes } from "react-router-dom";
import Add from "./pages/AddCreator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Card
        name="Raul"
        imageURL="https://miro.medium.com/v2/resize:fit:1044/1*yxH03Gm_Crl7SHi7v0sXIQ.png"
        url="https://www.google.com"
        description="asdfasdfasdfasdf"
      />
      <Add />
    </div>
  );
}

export default App;
