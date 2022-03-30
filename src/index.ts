import { Component } from "./gmaps";
import { Template } from "./gmaps-section";
import {
  registerComponent,
  registerSection,
} from "config/global-dependencies/ub-shared";

/**
 * Feel free to register whatever you need to export.
 * IMPORTANT: Registration ordering is important.
 */
registerComponent(Component);
registerSection(Template);
