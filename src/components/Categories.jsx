import React from "react";

const Categories = ({ types, setType }) => {
  return (
    <div className="btn-container">
      {types.map((i, index) => (
        <button
          key={index}
          type="button"
          className="btn"
          onClick={() => setType(i)}
        >
          {i}
        </button>
      ))}
    </div>
  );
};

export default Categories;
