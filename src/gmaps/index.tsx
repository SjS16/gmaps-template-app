import GMaps from "./components/gmaps";
import { migrations } from "./migrations";
import { component, Schema } from "config/global-dependencies/ub-shared";
import React from "react";

const schema = Schema.object({
  address: Schema.string().default("New York"),
  width: Schema.number().default(350),
  height: Schema.number().default(250),
  satellite: Schema.boolean().default(false),
}).noControls();

export const Component = component({
  componentTypeId: "gmaps", // This is the id for your component in our system, must be camelCase. It is used to reference the component in places like templates
  displayName: "Google Maps",
  tags: ["newControls", "swappable"],
  schema: schema,
  Component: GMaps,
  version: migrations.length,
  migrations,
});
