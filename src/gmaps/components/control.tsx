import {
  ControlPanel,
  H3,
  Label,
  MapType,
  PanelContent,
  PanelTitle,
  StyledToggle,
  StyledNumberField,
  StyledInputField,
  StyledSuffixSpan,
} from "../styled";
import { DataStructure } from "./gmaps";
import React from "react";
import { ControlPanelProps } from "unbounce-smart-builder-sdk-types";

export const Panel = ({ dispatch, data }: ControlPanelProps<DataStructure>) => {
  const toggleMapStyle = (newVal: boolean) => {
    dispatch((api: any) => api.get("satellite").set(newVal));
  };

  return (
    <ControlPanel>
      <PanelTitle>
        <H3>Map Details</H3>
      </PanelTitle>
      <PanelContent>
        <div>
          <Label>Address</Label>
          <StyledInputField
            minimal
            onChange={(e: any) =>
              dispatch((api: any) =>
                api.get("address").set(e.currentTarget.value)
              )
            }
            value={data.address}
            type="text"
            placeholder="Address"
          />
        </div>
        <MapType>
          <Label>Satellite</Label>
          <div>
            <StyledToggle
              value={data.satellite}
              onClick={() => toggleMapStyle(!data.satellite)}
            />
          </div>
        </MapType>
        <div>
          <Label>Width</Label>
          <StyledNumberField
            type="number"
            minimal
            value={data.width.toString()}
            onChange={(e: any) =>
              dispatch((api: any) =>
                api.get("width").set(e.currentTarget.value)
              )
            }
          />
          <StyledSuffixSpan>px</StyledSuffixSpan>
        </div>
        <div>
          <Label>Height</Label>
          <StyledNumberField
            type="number"
            minimal
            value={data.height.toString()}
            onChange={(e: any) =>
              dispatch((api: any) =>
                api.get("height").set(e.currentTarget.value)
              )
            }
          />
          <StyledSuffixSpan>px</StyledSuffixSpan>
        </div>
      </PanelContent>
    </ControlPanel>
  );
};
