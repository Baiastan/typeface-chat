import PropTypes from "prop-types"; // First, import PropTypes
import styles from "./ListItem.module.less";
import { useSelector } from "react-redux";

const ListItem = ({ recipient, isActive, className }) => {
  const activeClass = isActive ? styles.active : "";
  const currentUser = useSelector((state) => state.recipients.currentUser);
  const isCurrentUser = currentUser.user_id === recipient.user_id;

  return (
    <li
      className={`${styles.chat_user_item} ${activeClass} ${className}`}
      id={recipient.user_id}
      data-user={JSON.stringify(recipient)}
    >
      <div>{recipient.profile_photo}</div>
      <div>{recipient.user_name}</div>
      {isCurrentUser && <span>(You)</span>}
    </li>
  );
};

ListItem.propTypes = {
  recipient: PropTypes.shape({
    profile_photo: PropTypes.string,
    user_name: PropTypes.string.isRequired,
    user_id: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool,
  className: PropTypes.string,
};

export default ListItem;
