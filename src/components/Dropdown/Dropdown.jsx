import "./Dropdown.css";

// eslint-disable-next-line react/prop-types
const Dropdown = ({ onChange }) => {
  return (
    <div className="custom-select">
      <p>Choose Type: </p>
      <select
        onChange={(e) => {
          onChange(e);
        }}
      >
        <option value="">Choose Type</option>
        <option value="recreational">Recreational</option>
        <option value="education">Educational</option>
        <option value="diy">DIY</option>
        <option value="busywork">Busywork</option>
        <option value="cooking">Cooking</option>
        <option value="social">Social</option>
        <option value="charity">Charity</option>
        <option value="relaxation">Relaxation</option>
        <option value="music">Music</option>
      </select>
    </div>
  );
};

export default Dropdown;
