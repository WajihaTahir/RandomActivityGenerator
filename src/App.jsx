import { useState } from "react";
import "./App.css";
import RandomButton from "./components/RandomButton/RandomButton";
import ActivityDetail from "./components/ActivityDetails/ActivityDetail";
import Dropdown from "./components/Dropdown/Dropdown";
import ClockLoader from "react-spinners/ClockLoader";
import NoOfParticipants from "./components/NoOfParticipants/NoOfParticipants";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState(0);

  const api = "http://www.boredapi.com/api/activity/";

  const apiType = `http://www.boredapi.com/api/activity?type=${type}`;

  const apiParticipants = `http://www.boredapi.com/api/activity?participants=${participants}`;

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

  async function fetchByParticipants() {
    try {
      setLoading(true);
      const responseParticipants = await fetch(apiParticipants);
      console.log("response", responseParticipants);
      const resJsonParticipants = await responseParticipants.json();
      console.log("resjson", resJsonParticipants);
      setData(resJsonParticipants);
      setLoading(false);
    } catch (error) {
      console.log("error occured while fetching data", error);
    }
  }

  function onParticipantChange(e) {
    setParticipants(e.target.value);
  }

  function onClickParticipant() {
    if (participants) {
      fetchByParticipants(participants);
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
          <NoOfParticipants onChange={onParticipantChange} />
          <RandomButton
            type={type}
            participants={participants}
            onClick={
              type ? onClickType : participants ? onClickParticipant : onClick
            }
          />

          {loading ? (
            <ClockLoader
              color="rgba(255, 255, 255, 1)"
              cssOverride={null}
              loading
              size={50}
              speedMultiplier={1}
            />
          ) : (
            <ActivityDetail data={data} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
