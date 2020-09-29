import app from "./index.js";
import { initialState as content } from "app/ContentModule";

import { initialState as menu } from "app/MenuModule";

const combinedState = {
  content,
  menu,
};

describe("app", () => {
  describe("initialState", () => {
    it("should load the initial state", async () => {
      const state = await app.getState();
      expect(JSON.stringify(state)).toBe(JSON.stringify(combinedState));
    });
  });
});
