import "./RandomButton.css";

// eslint-disable-next-line react/prop-types
const RandomButton = ({ onClick }) => {
  return (
    <div className="mainButton">
      <button className="generateActivity" type="submit" onClick={onClick}>
        Generate a random activity
      </button>
    </div>
  );
};

export default RandomButton;
