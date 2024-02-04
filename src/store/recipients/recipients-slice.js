import { createSlice } from "@reduxjs/toolkit";
import { users } from "../data/mock-data";

const initialState = {
  recipients: users || [],
  currentRecipient: {},
  currentUser: users[0], //Baiastan
};

const recipientsSlice = createSlice({
  name: "recipients",
  initialState,
  reducers: {
    deleteRecipient: (state, action) => {
      console.log("delete USer");
    },

    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },

    setCurrentRecipient: (state, action) => {
      state.currentRecipient = action.payload;
    },
  },
});

export const { deleteRecipient, setCurrentRecipient, setCurrentUser } = recipientsSlice.actions;

export default recipientsSlice.reducer;
