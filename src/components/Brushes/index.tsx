import React from "react";
import { Brush } from "../Brush";

interface Props {
  imagePath: string;
  brushList: Array<any>;
}

export const Brushes: React.FC<Props> = ({ imagePath, brushList }) => {
  return (
    <>
      {brushList?.map((brush) => (
        <Brush
          key={brush.num}
          imagePath={`img/brushes/${imagePath}/${brush.num}.png`}
          className={brush.className}
        />
      ))}
    </>
  );
};
