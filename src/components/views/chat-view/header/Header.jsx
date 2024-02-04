import PropTypes from "prop-types";
import ListItem from "../../chat-list-view/chat/ListItem";
import Menu from "../../../common/Menu";

import styles from "./Header.module.less";

const Header = ({ currentRecipient, currentChatId }) => {
  return (
    <div className={styles.chatHeader}>
      <ListItem recipient={currentRecipient} className={styles.recipient_card} />
      <Menu currentChatId={currentChatId} />
    </div>
  );
};

Header.propTypes = {
  currentRecipient: PropTypes.shape({
    user_id: PropTypes.string,
    user_name: PropTypes.string,
    profile_photo: PropTypes.string,
  }),
  currentUser: PropTypes.object,
  recipients: PropTypes.array.isRequired,
};

export default Header;
