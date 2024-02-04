import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: {},
  current_chat_id: "",
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    deleteMessage: (state, action) => {
      console.log("Chat deleted");
      state.chats[action.chat_id].messages = state.chats[action.chat_id].messages.filter(
        (message) => message.id !== action.message_id
      );
    },
    setCurrentChatId: (state, action) => {
      state.current_chat_id = action.payload.user_id;
      const chats = { ...state.chats };
      if (!chats[action.payload.user_id]) {
        console.log("creating new messages");
        state.chats[action.payload.user_id] = { messages: [], recipient: action.payload };
      }
    },

    addMessage: (state, action) => {
      console.log("Message added");

      console.log(action.payload);

      state.chats[action.payload.chat_id]?.messages.push(action.payload.data);
    },
    deleteChat: (state, action) => {
      console.log("Message deleted");
      delete state.chats[action.chat_id];
    },
  },
});

export const { addMessage, deleteMessage, deleteChat, setCurrentChatId } = chatSlice.actions;

export default chatSlice.reducer;
