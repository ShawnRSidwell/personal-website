import AIChatLayout from "../features/ai-chat/AIChatLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function AIChat() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
      </Row>
      <AIChatLayout />
    </>
  );
}
