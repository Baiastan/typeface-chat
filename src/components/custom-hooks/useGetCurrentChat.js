import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useGetCurrentChat = (currentChatId) => {
  const [currentChat, setCurrentChat] = useState([]);
  const chats = useSelector((state) => state.chats.chats);
  const messages = chats[currentChatId];

  useEffect(() => {
    setCurrentChat(messages);
  }, [messages]);

  return [currentChat, setCurrentChat];
};
