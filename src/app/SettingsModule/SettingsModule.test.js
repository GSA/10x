import { configureStore } from "@reduxjs/toolkit";
import reducer, { initialState, getSettings, reset } from "app/SettingsModule";

const store = configureStore({ reducer });

describe("SettingsModule", () => {
  describe("initialState", () => {
    it("should load the initial state", async () => {
      const state = await store.getState();
      expect(JSON.stringify(state)).toBe(JSON.stringify(initialState));
    });
  });
  describe(".getSettingsList", () => {
    beforeEach(async () => store.dispatch(reset()));
    it("should load settings", async () => {
      await store.dispatch(getSettings());
      const state = store.getState();
      expect(state.data.title).toBeTruthy();
    });
    it("should load an error", async () => {
      await store.dispatch(getSettings({ error: true }));
      const state = store.getState();
      expect(state.error.message).toBe("Invalid Props.");
    });
  });
});
