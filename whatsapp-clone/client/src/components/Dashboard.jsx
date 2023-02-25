import React from "react";
import { Button } from "react-bootstrap";
import Sidebar from "./Sidebar";

export default function Dashboard({ id, logout }) {
  function handleLogout() {
    logout("");
  }
  return (
    <div className="d-flex" style={{height: '100vh'}}>
      <Sidebar id={id} />
      {/* <Button onClick={handleLogout}>Logout</Button> */}
    </div>
  );
}
