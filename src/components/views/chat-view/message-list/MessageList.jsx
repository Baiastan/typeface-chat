import PropTypes from "prop-types";

import styles from "./MessageList.module.less";
import { useEffect, useRef } from "react";

const MessageList = ({ currentChatMessages, currentUser }) => {
  const messageEndRef = useRef(null);

  const { messages } = currentChatMessages;

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [messages]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      <div className={styles.messageWrapper}>
        <div className={styles.messageListContainer}>
          {messages.map((message) => {
            const isSentByCurrentUser = message.message_from.user_id === currentUser.user_id;
            const messageClass = isSentByCurrentUser ? "sent" : "received";

            return (
              <div key={message.message_id} className={`${styles[messageClass]} ${styles.message}`}>
                <div className={styles.message_content}>{message.content}</div>
                <div className={styles.message_info}>{formatDate(message.created_at)}</div>
              </div>
            );
          })}
        </div>

        <div ref={messageEndRef} />
      </div>
      {!messages.length && (
        <div className={"no_message_global"}>Send and Receive messagaes without keeping your phone online</div>
      )}
    </>
  );
};

MessageList.propTypes = {
  className: PropTypes.string,
  currentUser: PropTypes.object.isRequired,
  currentChatMessages: PropTypes.shape({
    messages: PropTypes.array,
    recipient: PropTypes.shape({
      profile_photo: PropTypes.string,
      user_name: PropTypes.string,
      user_id: PropTypes.string,
    }),
  }).isRequired,
};

MessageList.defaultProps = {
  className: "",
  currentChat: {
    messages: [],
    recipient: {},
    sender: {},
  },
};

export default MessageList;
