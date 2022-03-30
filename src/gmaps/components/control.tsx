import { DataStructure } from "./gmaps";
import { Toggle } from "config/global-dependencies/smart-builder-components";
import { Schema } from "config/global-dependencies/ub-shared";
import React from "react";
import { ControlPanelProps } from "unbounce-smart-builder-sdk-types";

export const Panel = ({ dispatch }: ControlPanelProps<DataStructure>) => (
  <div>
    <div className="actions">
      <Toggle
        value={Schema.satellite}
        onClick={() =>
          dispatch((api) => {
            api.get("satellite").set(!Schema.satellite);
          })
        }
      />
    </div>
  </div>
);
