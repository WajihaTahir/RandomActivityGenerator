import "./ActivityDetail.css";

// eslint-disable-next-line react/prop-types
const ActivityDetail = ({ data }) => {
  const { activity, type, participants, price, key } = data ?? {};

  return (
    <div key={key} className="details">
      <div className="eachItem">
        <div className="box">
          <div className="activity">
            <p>
              <b>Activity: </b>
              {activity}
            </p>
          </div>

          <div className="type">
            <p>
              <b>Type: </b> {type}
            </p>
          </div>
        </div>
        <div className="box">
          <div className="participants">
            <p>
              <b>Paricipants: </b> {participants}
            </p>
          </div>

          <div className="price">
            <p>
              <b>Price: </b>
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
