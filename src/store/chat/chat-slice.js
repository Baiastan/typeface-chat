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
      if (action.payload === "reset") {
        state.current_chat_id = "";
        return;
      }

      let sourceUserId = action.payload.currentUser.user_id;
      let destinationUserId = action.payload.currentRecipient.user_id;

      let chatId = [sourceUserId, destinationUserId].sort().join("-");

      state.current_chat_id = chatId;
      const chats = { ...state.chats };
      if (!chats[chatId]) {
        console.log("creating new messages");
        state.chats[chatId] = {
          messages: [],
          recipient: action.payload.currentRecipient,
          sender: action.payload.currentUser,
        };
      }
    },

    addMessage: (state, action) => {
      console.log("Message added");

      state.chats[action.payload.chat_id]?.messages.push(action.payload.data);
    },
    deleteChat: (state, action) => {
      console.log("Message deleted");
      state.chats[action.payload].messages = [];
    },
  },
});

export const { addMessage, deleteMessage, deleteChat, setCurrentChatId } = chatSlice.actions;

export default chatSlice.reducer;
