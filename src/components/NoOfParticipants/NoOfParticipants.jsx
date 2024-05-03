import "./NoOfParticipants.css";

const NoOfParticipants = ({ onChange, value }) => {
  return (
    <div className="participantsNumber">
      <form>
        <label className="participantsLabel" htmlFor="participants">
          No of Participants:
        </label>
        <input
          value={value}
          type="number"
          id="participants"
          min={0}
          max={5}
          onChange={(e) => {
            onChange(e);
          }}
        />
      </form>
    </div>
  );
};

export default NoOfParticipants;
