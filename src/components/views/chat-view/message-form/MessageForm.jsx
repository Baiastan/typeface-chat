import React, { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import { useDispatch } from "react-redux";
import { addMessage } from "../../../../store/chat/chat-slice";

import styles from "./MessageForm.module.less";

const MessageForm = ({ currentChatId, currentRecipient }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.length) {
      return;
    }

    const data = {
      content: text,
      message_id: nanoid(),
      message_from: "Baiastan",
      message_to: currentRecipient,
      created_at: new Date().toISOString(),
    };

    dispatch(addMessage({ data, chat_id: currentChatId }));

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="text"
        onChange={(e) => {
          setText(e.currentTarget.value);
        }}
        value={text}
      />
      <button type="submit">Send</button>
    </form>
  );
};

MessageForm.propTypes = {
  currentChatId: PropTypes.string.isRequired,
  currentRecipient: PropTypes.object.isRequired,
};

export default MessageForm;
