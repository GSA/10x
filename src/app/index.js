import { configureStore } from "@reduxjs/toolkit";
import content from "./ContentModule";
import menu from "./MenuModule";

export default configureStore({
  reducer: {
    content,
    menu,
  },
});
