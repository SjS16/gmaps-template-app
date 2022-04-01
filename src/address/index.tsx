import { BrushIcon } from "../icons/brush";
import { Address } from "./component/address";
import { migrations } from "./migrations";
import { component, Schema } from "config/global-dependencies/ub-shared";
import React from "react";

const schema = Schema.object({
  address_line_1: Schema.string().default("Address Line 1"),
  address_line_2: Schema.string().default("Address Line 2"),
  address_zipcode: Schema.string().default("Zip Code"),
  address_country: Schema.string().default("Country"),
  address_telephone: Schema.string().default("Telephone"),
  address_email: Schema.string().default("Email"),
}).groupControls({ icon: <BrushIcon />, label: "Address Details" });

export const AddressComponent = component({
  componentTypeId: "address", // This is the id for your component in our system, must be camelCase. It is used to reference the component in places like templates
  displayName: "Address",
  tags: ["swappable"],
  schema: schema,
  Component: Address,
  version: migrations.length,
  migrations,
});
