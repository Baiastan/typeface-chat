import { configureStore } from "@reduxjs/toolkit";

import recipientsReducer from "./recipients/recipients-slice";
import chatReducer from "./chat/chat-slice";

export const store = configureStore({
  reducer: {
    chats: chatReducer,
    recipients: recipientsReducer,
  },
});
