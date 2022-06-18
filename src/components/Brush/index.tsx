import React from "react";

interface Props {
  imagePath: string;
  className: string;
}

export const Brush: React.FC<Props> = ({ imagePath, className }) => {
  return (
    <div className={`wow ${className}`} data-wow-duration="1s">
      <img src={imagePath} alt="image" />
    </div>
  );
};
