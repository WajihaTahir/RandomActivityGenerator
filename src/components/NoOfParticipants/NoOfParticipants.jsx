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
          onChange={(e) => {
            onChange(e);
          }}
        />
      </form>
    </div>
  );
};

export default NoOfParticipants;
