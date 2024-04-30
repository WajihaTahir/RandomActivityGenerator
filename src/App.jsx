import { useState } from "react";
import "./App.css";
import RandomButton from "./components/RandomButton/RandomButton";
import ActivityDetail from "./components/ActivityDetails/ActivityDetail";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");

  const api = "http://www.boredapi.com/api/activity/";

  const apiType = `http://www.boredapi.com/api/activity?type=${type}`;

  async function onClick() {
    try {
      setLoading(true);
      const response = await fetch(api);
      console.log("response", response);
      const resJson = await response.json();
      console.log("resjson", resJson);
      setData(resJson);
      setLoading(false);
    } catch (error) {
      console.log("error occured while fetching data", error);
    }
  }

  async function fetchByType() {
    try {
      setLoading(true);
      const responseType = await fetch(apiType);
      console.log("responseType", responseType);
      const resTypeJson = await responseType.json();
      console.log("resTypeJson", resTypeJson);
      setData(resTypeJson);
      setLoading(false);
    } catch (error) {
      console.log("error fetching type's activities", error);
    }
  }

  function onTypeChange(e) {
    setType(e.target.value);
  }

  function onClickType() {
    if (type) {
      fetchByType(type);
    }
  }

  return (
    <>
      <div className="gradient">
        <div className="container">
          <h2>Random Activity Generator</h2>
          <Dropdown onChange={onTypeChange} />
          <RandomButton type={type} onClick={type ? onClickType : onClick} />
          <ActivityDetail data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
