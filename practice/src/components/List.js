//Create a component that renders an unordered list (<ul>) with three list items (<li>). Use the map function to generate the list items from an array.

import React from 'react';

const List = () => {
  // Array of items for the list
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h2>List Component</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
