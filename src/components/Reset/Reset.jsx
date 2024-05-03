import "./Reset.css";

const Reset = ({ onChange }) => {
  return (
    <div>
      <button className="reset" onClick={onChange}>
        Reset
      </button>
    </div>
  );
};

export default Reset;
