import React from "react";

const Dropdown = () => {
  return (
    <div className="custom-select">
      <select>
        <option value="">Choose Type</option>
        <option value="">Recreational</option>
        <option value="">Educational</option>
        <option value="">DIY</option>
        <option value="">Busywork</option>
        <option value="">Cooking</option>
        <option value="">Social</option>
        <option value="">Charity</option>
        <option value="">Relaxation</option>
        <option value="">Music</option>
      </select>
    </div>
  );
};

export default Dropdown;
