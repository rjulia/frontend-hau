import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { store} from "../store";

export interface IFav {
  userId: string;
  characterIds: number[];
}

export const fetchUpdateFav = createAsyncThunk("fetchUpdateFav", 
async (values: IFav) => {
    const reduxStore = store.getState()

    const res = await fetch(`http://localhost:8000/api/fav`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': reduxStore.auth.user.token
      },
      body: JSON.stringify(values),
      credentials: "include",
      mode: "cors",
    });
  return res?.json();
});


export interface IFavState {

  favorites: string[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: IFavState = {
  favorites: [],
  loading: 'idle'
};

export const favSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFav: (state, action: PayloadAction<string[]>) => {
      state.favorites = action.payload;
    },
  },
  extraReducers: (builder) => {
    console.log("🚀 ~ builder:", builder)
    builder.addCase(fetchUpdateFav.fulfilled, (state, action) => {
      state.favorites = action.payload.favorites;
    })
  },
});

export const { setFav } = favSlice.actions;

export const favReducer = favSlice.reducer;