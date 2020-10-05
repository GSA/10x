/* istanbul ignore file */
import * as contentAPI from "./contentAPI";
import * as test from "./test";

let context = test;

if (process.env.NODE_ENV !== "test") {
  context = contentAPI;
}

export default context;
