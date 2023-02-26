import { createContext, useContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage";

const ConversationsContext = createContext();

export function useConversations() {
    return useContext(ConversationsContext);
}

export function ConversationsProvider( { children }) {
    const [ conversations, setConversations ] = useLocalStorage('conversations', []);

    function createConversation(id, name) {
        setConversations(prevConversations => {
            return [...prevConversations, {id, name}]
        })
    }
  return (
    <ConversationsContext.Provider value={{ conversations, createConversation}}>
        {children}
    </ConversationsContext.Provider>
  )
}
