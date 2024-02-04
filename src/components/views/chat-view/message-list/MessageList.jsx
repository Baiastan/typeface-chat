import PropTypes from "prop-types";

const MessageList = ({ className, currentChat = {} }) => {
  console.log(currentChat);

  return <div className={className}></div>;
};

MessageList.propTypes = {
  className: PropTypes.string,
  currentChat: PropTypes.shape({
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
  },
};

export default MessageList;
