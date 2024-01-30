import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import logger from "redux-logger";
import storage from "./local-storage/storage";
import { authReducer } from "./slices/authSlice";
import { charactersReducer } from "./slices/charactersSlice";
import { favReducer } from "./slices/favSlice";
import { api } from "./api";



const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["isAuth", "user"],
};

const favPersistConfig = {
  key: "fav",
  storage: storage,
  whitelist: ["favorites"]
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  userFav: persistReducer(favPersistConfig, favReducer),
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;