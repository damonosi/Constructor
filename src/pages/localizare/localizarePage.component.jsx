import { DownCircleTwoTone } from "@ant-design/icons";
import React from "react";
import GoogleHarta from "../../components/google-map/google-map";

import { MapContainer } from "./localizare.styles.js";

const LocalizarePage = () => {
  return (
    <MapContainer>
      <h1>Aici ne puteti gasi biroul</h1>
      <DownCircleTwoTone />
      <GoogleHarta />
    </MapContainer>
  );
};

export default LocalizarePage;
