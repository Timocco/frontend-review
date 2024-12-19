import React, { useState } from "react";

const InefficientComponent = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const sortedItems = [...items].sort((a, b) => a.localeCompare(b));

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h2>Selected Item: {selectedItem || "None"}</h2>
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index}>
            <button onClick={() => handleClick(item)}>{item}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InefficientComponent;