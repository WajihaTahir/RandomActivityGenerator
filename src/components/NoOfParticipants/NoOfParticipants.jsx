import "./NoOfParticipants.css";

const NoOfParticipants = ({ onChange }) => {
  return (
    <div className="participantsNumber">
      <form>
        <label className="participantsLabel" htmlFor="participants">
          No of Participants:
        </label>
        <input
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
