import { customCursor } from "@utility/utilits";
import { Fragment, useEffect } from "react";

export const Cursor = () => {
  useEffect(() => {
    customCursor();
  }, []);

  return (
    <Fragment>
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
    </Fragment>
  );
};
