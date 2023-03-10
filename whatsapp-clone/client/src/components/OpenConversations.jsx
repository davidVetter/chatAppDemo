import { useState, useCallback } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationsProvider";

export default function OpenConversations() {
  const [text, setText] = useState("");
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);
  const { sendMessage, selectedConversion } = useConversations();

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(
      selectedConversion.recipients.map((r) => r.id),
      text
    );
    setText("");
  }

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto">
        <div className="d-flex flex-column align-items-start justify-content-end px-3">
          {selectedConversion.messages.map((message, index) => {
            const lastMessage =
              selectedConversion.messages.length - 1 === index;
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className={`${
                  message.fromMe ? "align-self-end align-items-end" : "align-items-start"
                } my-1 d-flex flex-column`}
              >
                <div
                  className={`${
                    message.fromMe ? "bg-primary text-white" : "border"
                  } rounded px-2 py-1`}
                >
                  {message.text}
                </div>
                <div
                  className={`text-muted small ${
                    message.fromMe ? "text-right" : ""
                  }`}
                >
                  {message.fromMe ? "You" : message.senderName}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              as="textarea"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: "75px", resize: "none" }}
            />
            <Button type="submit">Send</Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}
