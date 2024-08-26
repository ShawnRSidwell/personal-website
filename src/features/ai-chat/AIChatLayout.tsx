import styled from "styled-components";
import Chat from "./Chat";

const StyledAIChatLayout = styled.div`
  display: flex;
  justify-content: center;
`;

export default function AIChatLayout() {
  return (
    <StyledAIChatLayout>
      <Chat />
    </StyledAIChatLayout>
  );
}
