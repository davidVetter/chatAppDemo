import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useContacts } from "../../contexts/ContactsProvider";

export default function NewConversationModal() {
  const [selectedContactIds, setSelectedContactsIds] = useState([]);
  const { contacts } = useContacts();

  function handleSubmit(e) {
    e.preventDefault();
    
  }

  function handleCheckboxChange(contactId) {
    setSelectedContactsIds(prevSelectedContactsIds => {
      if (prevSelectedContactsIds.includes(contactId)) {
        return prevSelectedContactsIds.filter(prevId => {
          return contactId !== prevId;
        })
      } else {
        return [...prevSelectedContactsIds, contactId]
      }
    })
  }

  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button className="mt-2" type="submit">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
