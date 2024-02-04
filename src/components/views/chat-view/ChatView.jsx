import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./header/Header";
import MessageList from "./message-list/MessageList";
import ChatFooter from "./footer/ChatFooter";

import styles from "./ChatView.module.less";
import ChangeUser from "../../common/ChangeUser";

const ChatView = () => {
  const currentChatId = useSelector((state) => state.chats.current_chat_id);
  const currentRecipient = useSelector((state) => state.recipients.currentRecipient);
  const currentChatMessages = useSelector((state) => state.chats.chats[currentChatId]);
  const currentUser = useSelector((state) => state.recipients.currentUser);
  const recipients = useSelector((state) => state.recipients.recipients);

  useEffect(() => {
    console.log("user change");
  }, [currentUser]);

  return (
    <>
      <ChangeUser currentUser={currentUser} recipients={recipients} />
      {currentChatId ? (
        <div className={styles.chatView}>
          <Header currentRecipient={currentRecipient} currentChatId={currentChatId} />
          <MessageList currentChatMessages={currentChatMessages || {}} currentUser={currentUser} />
          <ChatFooter currentChatId={currentChatId} currentRecipient={currentRecipient} currentUser={currentUser} />
        </div>
      ) : (
        <div className={"no_message_global"}>Click to contact to start messaging</div>
      )}
    </>
  );
};

export default ChatView;
