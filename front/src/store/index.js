import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mySaga from "../saga/saga";
import trackReducer from "../features/track/trackSlice";
import albumReducer from "../features/album/albumSlice";
import activeReducer from "../features/basic/activeItemSlice";
import selectedCardReducer from "../features/basic/selectedCard";
import viewForm from "../features/basic/viewForm";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    track: trackReducer,
    album: albumReducer,
    active: activeReducer,
    selected: selectedCardReducer,
    form: viewForm,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);

export default store;
