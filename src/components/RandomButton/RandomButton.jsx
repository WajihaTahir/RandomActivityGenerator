// RandomButton.jsx
import "./RandomButton.css";

// eslint-disable-next-line react/prop-types
const RandomButton = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="mainButton">
      <button className="generateActivity" type="submit" onClick={handleClick}>
        Generate a random activity
      </button>
    </div>
  );
};

export default RandomButton;
