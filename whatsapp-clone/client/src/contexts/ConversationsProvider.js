import { createContext, useContext, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage";
import { useContacts } from "./ContactsProvider";

const ConversationsContext = createContext();

export function useConversations() {
    return useContext(ConversationsContext);
}

export function ConversationsProvider( { children }) {
    const [ conversations, setConversations ] = useLocalStorage('conversations', []);
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
    const { contacts } = useContacts();

    function createConversation(recipients) {
        setConversations(prevConversations => {
            return [...prevConversations, { recipients , messages: [] }]
        })
    }

    const formattedConversations = conversations.map((conversation, index) => {
        // if (conversation.length < 1) return [];
        const recipients = conversation.recipients.map(recipient => {
            const contact = contacts.find(contact => {
                return contact.id === recipient;
            })
            const name = ( contact && contact.name) || recipient ;
            return { id: recipient, name};
        })
        const selected = index === selectedConversationIndex;
        return { ...conversation, recipients, selected }
    })

    const value = {
        conversations: formattedConversations,
        selectConversationIndex: setSelectedConversationIndex,
        selectedConversion: formattedConversations[selectedConversationIndex],
        createConversation
    }

  return (
    <ConversationsContext.Provider value={value}>
        {children}
    </ConversationsContext.Provider>
  )
}
