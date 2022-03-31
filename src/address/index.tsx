import { Address } from "./component/address";
import { migrations } from "./migrations";
import { component, Schema } from "config/global-dependencies/ub-shared";
import React from "react";

const schema = Schema.object({
  address_line_1: Schema.string(),
  address_line_2: Schema.string(),
  address_zipcode: Schema.string(),
  address_country: Schema.string(),
  address_telephone: Schema.string(),
}).groupControls({ icon: <span>Address</span>, label: "Address Details" });

export const AddressComponent = component({
  componentTypeId: "address", // This is the id for your component in our system, must be camelCase. It is used to reference the component in places like templates
  displayName: "Address",
  schema: schema,
  Component: Address,
  version: migrations.length,
  migrations,
});
