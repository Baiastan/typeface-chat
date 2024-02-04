import React from "react";
import { useSelector } from "react-redux";
import Header from "./header/Header";
import MessageList from "./message-list/MessageList";
import ChatFooter from "./footer/ChatFooter";

import styles from "./ChatView.module.less";

const ChatView = () => {
  const currentChatId = useSelector((state) => state.chats.current_chat_id);
  const currentRecipient = useSelector((state) => state.recipients.currentRecipient);
  const currentChat = useSelector((state) => state.chats.chats[currentChatId]);

  return currentChatId ? (
    <div className={styles.chatView}>
      <Header currentRecipient={currentRecipient} className={styles.chat_header} />
      <MessageList currentChat={currentChat || {}} className={styles.message_list_container} />
      <ChatFooter currentChatId={currentChatId} currentRecipient={currentRecipient} className={styles.chat_footer} />
    </div>
  ) : (
    <div>Send and Receive messagaes without keeping your phone online</div>
  );
};

export default ChatView;
