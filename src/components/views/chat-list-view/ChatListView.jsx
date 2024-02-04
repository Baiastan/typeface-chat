import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chat from "./chat/ListItem";
import { setCurrentChatId } from "../../../store/chat/chat-slice";
import { setCurrentRecipient } from "../../../store/recipients/recipients-slice";

import styles from "./ChatListView.module.less";

const ChatListView = () => {
  const [activeChatId, setActiveChatId] = useState(null);
  const recipients = useSelector((state) => state.recipients.recipients);
  const dispatch = useDispatch();

  const handleChatClick = (event) => {
    const chatItem = event.target.closest("li");
    if (chatItem) {
      const user = chatItem.getAttribute("data-user");
      const parsedRecipient = JSON.parse(user);

      setActiveChatId(parsedRecipient.user_id);
      dispatch(setCurrentChatId(parsedRecipient));
      dispatch(setCurrentRecipient(parsedRecipient));
    }
  };

  return (
    <div className={styles.chatListView}>
      <ul onClick={handleChatClick}>
        {recipients.map((user) => {
          return <Chat key={user.user_id} chat={user} isActive={user.user_id === activeChatId} />;
        })}
      </ul>
    </div>
  );
};

export default ChatListView;
