import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { store} from "../store";
import type { ICharacter } from "../../../types";
import { api } from "../api";


// export const fetchGetCharacterByID = createAsyncThunk("fetchGetCharacters", 
// async (id:string) => {
//     const reduxStore = store.getState()
//     const res = await fetch(`http://localhost:8000/api/characters/${id}`,{
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//         'x-auth-token': reduxStore.auth.user.token
//       },
//       credentials: "include",
//       mode: "cors",
//     });
//   return res?.json();
// });


// export const fetchGetCharacters = createAsyncThunk("fetchGetCharacters", 
// async () => {
//     const reduxStore = store.getState()
//     const res = await fetch(`http://localhost:8000/api/characters/`,{
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//         'x-auth-token': reduxStore.auth.user.token
//       },
//       credentials: "include",
//       mode: "cors",
//     });
//   return res?.json();
// });


export interface ICharacterState {
  character: ICharacter | undefined;
  characters: ICharacter[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: ICharacterState = {
  characters: [],
  character: undefined,
  loading: 'idle'
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.characters.matchFulfilled, (state, action) => {
        state.characters = action.payload.results;
      })
      .addMatcher(api.endpoints.character.matchFulfilled, (state, action) => {
        state.character = action.payload;
      })
  },
});

export const {  } = charactersSlice.actions;

export const charactersReducer = charactersSlice.reducer;