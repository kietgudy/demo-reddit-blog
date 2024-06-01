import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Kiet",
    age: "22",
    about: "I'm a software engineer",
    url: "https://i.redd.it/snoovatar/avatars/f7db21c2-afa2-4f77-97c3-53fcfa98f94d.png",
    theme: "#f36625",
    pending: false,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.url = action.payload.url;
      state.theme = action.payload.theme;
    },
  },
});

export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
