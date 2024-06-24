import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = ({
  width = 363,
  height = 314,
  numOfLines = 3,
  lineHeight = 20,
  borderRadius = 8,
  boxShadow = "0 0 5px rgba(0,0,0,0.1)",
  backgroundColor = "#f0f0f0",
}) => {
  return (
    <div
      className="skeleton-card"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        padding: "16px",
        boxSizing: "border-box",
        borderRadius: `${borderRadius}px`,
        backgroundColor,
        boxShadow,
      }}
    >
      <Skeleton height={height / 2} />
      <div style={{ marginTop: "16px" }}>
        <Skeleton count={numOfLines} height={lineHeight} />
      </div>
    </div>
  );
};

export default SkeletonCard;
