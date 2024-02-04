import PropTypes from "prop-types";
import ListItem from "../../chat-list-view/chat/ListItem";
import Menu from "../../../common/Menu";

import styles from "./Header.module.less";

const Header = ({ currentRecipient, currentChatId, currentChatMessages }) => {
  const { messages } = currentChatMessages;
  return (
    <div className={styles.chatHeader}>
      <ListItem recipient={currentRecipient} className={styles.recipient_card} />
      {messages.length > 0 && <Menu currentChatId={currentChatId} />}
    </div>
  );
};

Header.propTypes = {
  currentRecipient: PropTypes.shape({
    user_id: PropTypes.string,
    user_name: PropTypes.string,
    profile_photo: PropTypes.string,
  }),
  currentChatMessages: PropTypes.object,
  currentUser: PropTypes.object,
  currentChatId: PropTypes.string.isRequired,
  recipients: PropTypes.array,
};

Header.defaultProps = {
  className: "",
  currentChatMessages: {
    messages: [],
    recipient: {},
    sender: {},
  },
};

export default Header;
