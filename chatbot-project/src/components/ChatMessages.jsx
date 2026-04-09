import { useRef, useEffect } from 'react'
import './ChatMessages.css'

function ChatMessages({ chatMessages }) {
  const chatMessageRef = useRef(null);


  useEffect(() => {
    const containerElem = chatMessageRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div className="chat-messages-container" ref={chatMessageRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessages
            key={chatMessage.id}
            message={chatMessage.message}
            sender={chatMessage.sender}
            id={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;