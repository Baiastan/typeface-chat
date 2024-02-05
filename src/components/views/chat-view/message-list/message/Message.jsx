import styles from "./Message.module.less";

const Message = ({ sent, content, date }) => {
  const className = sent ? styles.sent : styles.recieved;

  return (
    <div className={`${className} ${styles.message}`}>
      <p>{content}</p> <span className={styles.message_time}>{date}</span>
    </div>
  );
};

export default Message;
