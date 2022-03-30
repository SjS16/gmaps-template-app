// eslint-disable-next-line
import { Panel } from "./control";
import {
  ControlButton,
  WithControls,
  WithStyles,
} from "config/global-dependencies/smart-builder-sdk";
import React from "react";
import {
  ComponentProps,
  WithStylesProps,
} from "unbounce-smart-builder-sdk-types";

export type DataStructure = {
  address: string;
  satellite: boolean;
  width: number;
  height: number;
};

export const GMaps = ({
  data,
}: ComponentProps<DataStructure, WithStylesProps>) => {
  const { address, satellite, width, height } = data;

  const mapType = satellite ? "k" : "";

  const addressQuery = address;
  // t=k for satellite
  const url_params = {
    q: addressQuery || "123 Main St",
    t: mapType,
    z: "13",
    ie: "UTF8",
    iwloc: "",
    output: "embed",
  };

  const url = new URL("https://maps.google.com/maps");

  const queryParams = new URLSearchParams(
    Object.entries(url_params)
  ).toString();

  const mapsUrl = new URL(`${url}?${queryParams}`).toString();

  return (
    <>
      <div data-testid="gmaps-content">
        <iframe
          width={width}
          height={height}
          id="gmap_canvas"
          src={mapsUrl}
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          frameBorder={0}
        ></iframe>
      </div>
    </>
  );
};

const controlLabel = "Controls";

export default WithControls(GMaps, [
  {
    id: "custom-map-setup",
    label: controlLabel,
    Button: (props) => (
      <ControlButton label={controlLabel} active={false} {...props}>
        Map Settings
      </ControlButton>
    ),
    Panel,
    type: "subtoolbar",
  },
]);
