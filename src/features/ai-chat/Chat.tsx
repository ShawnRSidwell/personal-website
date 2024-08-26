import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useState } from "react";
import styled from "styled-components";

const StyledChatContainer = styled.div`
  position: relative;
  height: 65dvh;
  width: 75%;
  background-color: var(--color-grey-0);

  border-radius: var(--border-radius-md);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;
interface ChatMessage {
  message: string;
  sender: string;
  direction: "incoming" | "outgoing";
  position: "normal" | "first" | "last" | "single";
}

export default function Chat() {
  const [isTyping, setIsTyping] = useState(false);
  const [messsages, setMessages] = useState<ChatMessage[]>([
    {
      message: "Hello, it's Shawn Sidwell's personal assistant",
      sender: "ChatGPT",
      direction: "incoming",
      position: "single",
    },
  ]);

  const handleSend = async (message: string) => {
    const newMessage: ChatMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
      position: "normal", // Adjust this as needed for sequence handling
    };

    const newMessages = [...messsages, newMessage];

    setMessages(newMessages);
    setIsTyping(true);
  };

  return (
    <StyledChatContainer>
      <MainContainer>
        <ChatContainer>
          <MessageList
            typingIndicator={
              isTyping ? (
                <TypingIndicator content="My assistant is typing" />
              ) : null
            }
          >
            {messsages.map((message, i) => {
              return <Message key={i} model={message} />;
            })}
          </MessageList>
          <MessageInput
            placeholder="Type your question here"
            onSend={(message) => handleSend(message)}
          />
        </ChatContainer>
      </MainContainer>
    </StyledChatContainer>
  );
}
