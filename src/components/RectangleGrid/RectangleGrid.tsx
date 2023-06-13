import React from 'react';
import './rectangleGrid.css';
const RectangleGrid: React.FC = () => {
  return (
    <div className="grid-container">
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="rectangle">
            <div className="cover-art"></div>
            <div className="title">Title</div>
          </div>
        ))}
    </div>
  );
};

export default RectangleGrid;
