/* istanbul ignore file */
import * as api from "./contentAPI";
import * as test from "./test";
import * as ssr from "./ssr";

let context = test;

if (process.env.NODE_ENV !== "test") {
  context = api;
}

export default context;
