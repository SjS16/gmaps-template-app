import GMaps from "./components/gmaps";
import { migrations } from "./migrations";
import { component, Schema } from "config/global-dependencies/ub-shared";
import React from "react";

const schema = Schema.object({
  address: Schema.string(),
  width: Schema.number(),
  height: Schema.number(),
  satellite: Schema.boolean(),
  size: Schema.string(),
}).noControls();

export const Component = component({
  componentTypeId: "gmaps", // This is the id for your component in our system, must be camelCase. It is used to reference the component in places like templates
  displayName: "Google Maps",
  tags: ["newControls"],
  schema: schema,
  Component: GMaps,
  version: migrations.length,
  migrations,
});
