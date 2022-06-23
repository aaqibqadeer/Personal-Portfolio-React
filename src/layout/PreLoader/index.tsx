import { preloader } from "@utility/utilits";
import { useEffect } from "react";

export const PreLoader = () => {
  useEffect(() => {
    preloader();
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line"></div>
    </div>
  );
};
