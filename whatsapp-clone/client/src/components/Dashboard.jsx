import React from "react";
import { Button } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationsProvider";
import OpenConversations from "./OpenConversations";
import Sidebar from "./Sidebar";

export default function Dashboard({ id, logout }) {
    const { selectedConversion } = useConversations();
  function handleLogout() {
    logout("");
  }
  return (
    <div className="d-flex" style={{height: '100vh'}}>
      <Sidebar id={id} />
      {selectedConversion && <OpenConversations />}
      <Button className="rounded-0" variant="secondary"  style={{position: 'absolute', top: 0, right: 0}}onClick={handleLogout}>Logout</Button>
    </div>
  );
}
