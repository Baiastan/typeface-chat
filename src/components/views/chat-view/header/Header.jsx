import PropTypes from "prop-types";
import ListItem from "../../chat-list-view/chat/ListItem";

import styles from "./Header.module.less";

const Header = ({ currentRecipient, className }) => {
  return (
    <div className={className}>
      <ListItem chat={currentRecipient} className={styles.header_item} />
    </div>
  );
};

Header.propTypes = {
  currentRecipient: PropTypes.shape({
    user_id: PropTypes.string,
    user_name: PropTypes.string,
    profile_photo: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default Header;
