import { createSlice } from "@reduxjs/toolkit";
import { users } from "../data/mock-data";

const initialState = {
  recipients: users || [],
  currentRecipient: {},
};

const recipientsSlice = createSlice({
  name: "recipients",
  initialState,
  reducers: {
    deleteRecipient: (state, action) => {
      console.log("delete USer");
    },

    setCurrentRecipient: (state, action) => {
      state.currentRecipient = action.payload;
    },
  },
});

export const { deleteRecipient, setCurrentRecipient } = recipientsSlice.actions;

export default recipientsSlice.reducer;
