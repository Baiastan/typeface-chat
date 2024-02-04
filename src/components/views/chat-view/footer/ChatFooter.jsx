import PropTypes from "prop-types";
import MessageForm from "../message-form/MessageForm";

const ChatFooter = ({ className, currentChatId, currentRecipient, currentUser }) => {
  return (
    <div className={className}>
      <MessageForm currentChatId={currentChatId} currentRecipient={currentRecipient} currentUser={currentUser} />
    </div>
  );
};

ChatFooter.propTypes = {
  className: PropTypes.string,
  currentChatId: PropTypes.string.isRequired,
  currentRecipient: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default ChatFooter;
