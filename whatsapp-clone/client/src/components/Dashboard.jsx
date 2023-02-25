import React from "react";
import { Button } from "react-bootstrap";
import Sidebar from "./Sidebar";

export default function Dashboard({ id, logout }) {
  function handleLogout() {
    logout("");
  }
  return (
    <>
      <h1>Dashboard</h1>
      <Sidebar id={id} />
      <h4>Current user: {id}</h4>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
}
