/* istanbul ignore file */
import * as test from "./test";
import * as api from "./menuAPI";
import * as ssr from "./ssr";

let context = test;

if (process.env.NODE_ENV !== "test") {
  context = ssr;
}
if (process.env.REACT_APP_STATE_MODE === "api") {
  context = api;
}

export default context;
