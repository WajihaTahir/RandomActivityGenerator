import { useState } from "react";
import "./App.css";
import RandomButton from "./components/RandomButton/RandomButton";
import ActivityDetail from "./components/ActivityDetails/ActivityDetail";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  const [data, setData] = useState({});

  const api = "http://www.boredapi.com/api/activity/";

  async function onClick() {
    try {
      const response = await fetch(api);
      console.log("response", response);
      const resJson = await response.json();
      console.log("resjson", resJson);
      setData(resJson);
    } catch (error) {
      console.log("error occured while fetching data", error);
    }
  }

  return (
    <>
      <div className="container">
        <div className="gradient">
          <h1>Bored? Generate a random activity instantly!</h1>
          <Dropdown />
          <RandomButton onClick={onClick} />
          <ActivityDetail data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
