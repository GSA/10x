/* istanbul ignore file */
import * as api from "./contentAPI";
import * as test from "./test";
import * as ssr from "./ssr";

let context = test;

if (process.env.NODE_ENV !== "test") {
  context = api;
}

if (process.env.REACT_APP_STATE_MODE === "ssr") {
  context = ssr;
}

export default context;
