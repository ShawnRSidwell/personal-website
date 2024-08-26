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

const StyledChat = styled.div`
  position: relative;
  height: 65dvh;
  width: 75%;
`;
interface ChatMessage {
  message: string;
  sender: string;
  direction: "incoming" | "outgoing";
}

export default function Chat() {
  const [isTyping, setIsTyping] = useState(false);
  const [messsages, setMessages] = useState<ChatMessage[]>([
    {
      message: "Hello, it's a robot!",
      sender: "ChatGPT",
      direction: "incoming",
    },
  ]);

  const handleSend = async (message: string) => {
    const newMessage: ChatMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messsages, newMessage];

    setMessages(newMessages);
    setIsTyping(true);
  };

  return (
    <StyledChat>
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
    </StyledChat>
  );
}
