import { GMapsTemplate } from "./gmaps-template";
import { section } from "config/global-dependencies/ub-shared";

export const Template = section({
  contentTypeId: "gmaps-section",
  displayName: "Google Maps Section",
  tags: ["section"],
  ...GMapsTemplate,
});
