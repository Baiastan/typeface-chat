import PropTypes from "prop-types"; // First, import PropTypes
import styles from "./ListItem.module.less";

const ListItem = ({ chat, isActive, className }) => {
  const activeClass = isActive ? styles.active : "";

  return (
    <li
      className={`${styles.chat_user_item} ${activeClass} ${className}`}
      id={chat.user_id}
      data-user={JSON.stringify(chat)}
    >
      <div>{chat.profile_photo}</div>
      <div>{chat.user_name}</div>
    </li>
  );
};

ListItem.propTypes = {
  chat: PropTypes.shape({
    profile_photo: PropTypes.string,
    user_name: PropTypes.string.isRequired,
    user_id: PropTypes.string,
  }).isRequired,
  isActive: PropTypes.bool,
  className: PropTypes.string,
};

export default ListItem;
