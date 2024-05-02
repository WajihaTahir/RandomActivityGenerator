import "./App.css";
import RandomButton from "./components/RandomButton/RandomButton";
import ActivityDetail from "./components/ActivityDetails/ActivityDetail";
import Dropdown from "./components/Dropdown/Dropdown";
import ClockLoader from "react-spinners/ClockLoader";
import NoOfParticipants from "./components/NoOfParticipants/NoOfParticipants";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState(0);

  const api = "http://www.boredapi.com/api/activity";

  async function fetchActivity() {
    try {
      let apiUrl = api;
      if (type && participants) {
        apiUrl += `?type=${type}&participants=${participants}`;
      } else if (type) {
        apiUrl += `?type=${type}`;
      } else if (participants) {
        apiUrl += `participants=${participants}`;
      }

      setLoading(true);
      const response = await fetch(apiUrl);
      const responseData = await response.json();
      setData(responseData);
      setLoading(false);
    } catch (error) {
      console.log("Error occurred while fetching data", error);
    }
  }

  function onParticipantChange(e) {
    setParticipants(e.target.value);
  }

  function onTypeChange(e) {
    setType(e.target.value);
  }

  function onClick() {
    fetchActivity(api);
  }

  // function onClickType() {
  //   if (type) {
  //     const apiType = `http://www.boredapi.com/api/activity?type=${type}`;
  //     fetchActivity(apiType);
  //   }
  // }

  // function onClickParticipant() {
  //   if (participants) {
  //     const apiParticipants = `http://www.boredapi.com/api/activity?participants=${participants}`;
  //     fetchActivity(apiParticipants);
  //   }
  // }

  return (
    <>
      <div className="gradient">
        <div className="container">
          <h2>Random Activity Generator</h2>
          <div className="parameters">
            <NoOfParticipants onChange={onParticipantChange} />

            <Dropdown onChange={onTypeChange} />
          </div>
          <RandomButton
            type={type}
            participants={participants}
            onClick={onClick}
          />

          {loading ? (
            <ClockLoader
              color="rgba(255, 255, 255, 1)"
              size={50}
              speedMultiplier={0.5}
              className="loading"
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
