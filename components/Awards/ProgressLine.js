import React, { useEffect, useState } from "react";

const ProgressLine = ({
  label,
  backgroundColor = "#e5e5e5",
  // expected format for visual parts
  visualParts = [
    {
      percentage: "0%",
      color: "white"
    }
  ]
}) => {
  // Starting values needed for the animation
  // Mapped by "visualParts" so it can work with multiple values dynamically
  // It's an array of percentage widths
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    // You need to wrap it to trigger the animation
    requestAnimationFrame(() => {
      // Set a new array of percentage widths based on the props
      setWidths(
        visualParts.map(item => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);

  return (
    <>
      <div className="progressLabel">{label}</div>

      <div
        className="progressVisualFull"
        // to change the background color dynamically
        style={{
          backgroundColor
        }}
      >
        {visualParts.map((item, index) => {
          // map each part into separate div and each will be animated
          return (
            <div
              // There won't be additional changes in the array so the index can be used
              key={index}
              style={{
                width: widths[index],
                // setting the actual color of bar part
                backgroundColor: item.color
              }}
              className="progressVisualPart"
            />
          );
        })}
      </div>
    </>
  );
};

export default ProgressLine;