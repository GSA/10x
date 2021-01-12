/* istanbul ignore file */
import * as settingsAPI from "./settingsAPI";
import * as ssr from "./ssr";
import * as test from "./test";

let context = test;

if (process.env.NODE_ENV !== "test") {
  context = settingsAPI;
}

if (process.env.REACT_APP_STATE_MODE === "ssr") {
  context = ssr;
}

export default context;
