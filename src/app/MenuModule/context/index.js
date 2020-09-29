/* istanbul ignore file */
import * as menuAPI from "./menuAPI";
import * as test from "./test";

let context = test;

if (process.env.NODE_ENV !== "test") {
  context = menuAPI;
}

export default context;
