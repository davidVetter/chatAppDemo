import React from "react";
import { Button } from "react-bootstrap";

export default function Dashboard({ id, logout }) {
  function handleLogout() {
    logout("");
  }
  return (
    <>
      <h1>Dashboard</h1>
      <h4>Current user: {id}</h4>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
}
