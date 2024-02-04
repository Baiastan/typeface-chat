import React from "react";

import styles from "./Menu.module.less";
import { useDispatch } from "react-redux";
import { deleteChat } from "../../store/chat/chat-slice";

const Menu = ({ currentChatId }) => {
  const dispatch = useDispatch();

  const onDeleteClick = () => {
    dispatch(deleteChat(currentChatId));
  };

  return (
    <div className={styles.deleteChat}>
      <button onClick={onDeleteClick}>Delete Chat</button>
    </div>
  );
};

export default Menu;
