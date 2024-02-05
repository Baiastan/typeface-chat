import PropTypes from "prop-types";

import styles from "./MessageList.module.less";
import { useEffect, useRef } from "react";
import Message from "./message/Message";

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
        <div className={styles.scrollContainer}>
          {messages.map((message) => {
            const isSentByCurrentUser = message.message_from.user_id === currentUser.user_id;

            return (
              <Message
                key={message.message_id}
                sent={isSentByCurrentUser}
                content={message.content}
                date={formatDate(message.created_at)}
              />
            );
          })}
          <div ref={messageEndRef} />
        </div>
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
  currentChatMessages: {
    messages: [],
    recipient: {},
    sender: {},
  },
};

export default MessageList;
