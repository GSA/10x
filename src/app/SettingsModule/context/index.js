/* istanbul ignore file */
import * as settingsAPI from "./settingsAPI";
import * as ssr from "./ssr";
import * as test from "./test";

let context = test;

if (process.env.NODE_ENV !== "test") {
  context = ssr;
}

if (process.env.REACT_APP_STATE_MODE === "api") {
  context = settingsAPI;
}

export default context;
