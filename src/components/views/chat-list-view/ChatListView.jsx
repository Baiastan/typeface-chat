import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "./chat/ListItem";
import { setCurrentChatId } from "../../../store/chat/chat-slice";
import { setCurrentRecipient } from "../../../store/recipients/recipients-slice";

import styles from "./ChatListView.module.less";
import { current } from "immer";

const ChatListView = () => {
  const [activeChatId, setActiveChatId] = useState(null);
  const recipients = useSelector((state) => state.recipients.recipients);
  const currentUser = useSelector((state) => state.recipients.currentUser);
  const dispatch = useDispatch();

  const handleChatClick = (event) => {
    const chatItem = event.target.closest("li");
    if (chatItem) {
      const user = chatItem.getAttribute("data-user");
      const parsedRecipient = JSON.parse(user);

      setActiveChatId(parsedRecipient.user_id);
      dispatch(setCurrentChatId({ currentRecipient: parsedRecipient, currentUser }));
      dispatch(setCurrentRecipient(parsedRecipient));
    }
  };

  return (
    <div className={styles.chatListView}>
      <ul onClick={handleChatClick}>
        <ListItem key={currentUser.user_id} recipient={currentUser} isActive={currentUser.user_id === activeChatId} />
        {recipients.map((user) => {
          if (user.user_id !== currentUser.user_id) {
            return <ListItem key={user.user_id} recipient={user} isActive={user.user_id === activeChatId} />;
          }
        })}
      </ul>
    </div>
  );
};

export default ChatListView;
