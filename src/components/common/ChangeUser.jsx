import { useState } from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/recipients/recipients-slice";
import { setCurrentChatId } from "../../store/chat/chat-slice";
import styles from "./ChangeUser.module.less";

const ChangeUser = ({ currentUser, recipients }) => {
  const [selectedUserId, setSelectedUserId] = useState(currentUser.user_id || recipients[0]?.user_id);
  const dispatch = useDispatch();

  const handleUserChange = (e) => {
    const userId = e.target.value;
    const selectedUser = recipients.find((user) => user.user_id === userId);

    setSelectedUserId(userId);
    dispatch(setCurrentUser(selectedUser));
    dispatch(setCurrentChatId("reset"));
  };
  return (
    <div className={styles.user}>
      <span>Change user:</span>
      <select value={selectedUserId} onChange={handleUserChange}>
        {recipients.map((user) => {
          return (
            <option value={user.user_id} key={user.user_id}>
              {user.user_name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

ChangeUser.propTypes = {
  currentRecipient: PropTypes.shape({
    user_id: PropTypes.string,
    user_name: PropTypes.string,
    profile_photo: PropTypes.string,
  }),
  currentUser: PropTypes.object,
  recipients: PropTypes.array.isRequired,
};

export default ChangeUser;
