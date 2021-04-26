/* istanbul ignore file */
import * as api from "./contentAPI";
import * as test from "./test";
import * as ssr from "./ssr";

let context = test;

if (process.env.NODE_ENV !== "test") {
  context = ssr;
}

if (process.env.REACT_APP_STATE_MODE === "api") {
  context = api;
}

export default context;
