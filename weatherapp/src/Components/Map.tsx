import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { datacontext } from "../App";

export const Map = () => {
  const value: any = useContext(datacontext);

  useEffect(() => {
    const ifameData = document.getElementById("iframeId") as HTMLImageElement;
    const lat = value.lat;
    const lon = value.log;
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });
  return (
    <div>
      <iframe
        id="iframeId"
        style={{ height: "500px", width: "500px" }}
      ></iframe>
    </div>
  );
};

export default Map;
