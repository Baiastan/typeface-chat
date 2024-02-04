import ChatListView from "../chat-list-view/ChatListView";
import ChatView from "../chat-view/ChatView";

import styles from "./ChatInterface.module.less";

const ChatInterface = () => {
  return (
    <div className={styles.chatInterface}>
      <div className={styles.left_navigation}>
        <ChatListView />
      </div>
      <div className={styles.message_window}>
        <ChatView />
      </div>
    </div>
  );
};

export default ChatInterface;
