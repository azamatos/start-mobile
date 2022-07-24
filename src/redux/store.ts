
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currentElementSlice from "./currentElementSlice";

const rootReducer = combineReducers({
  currentElement: currentElementSlice
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer
})

export default store