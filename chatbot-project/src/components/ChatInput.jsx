import { useState } from 'react'
import { Chatbot } from './chatbot'
import './ChatInput.css'




export function ChatInput({ chatMessages, setChatMessage }) {
    const [inputText, setInputText] = useState("");

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    function sendMessage() {
        const newChatMessage = {
            message: inputText,
            sender: "user",
            id: crypto.randomUUID()
        };

        const response = Chatbot.getResponse(inputText);

        setChatMessage([
            ...chatMessages,
            newChatMessage,
            {
                message: response,
                sender: "robot",
                id: crypto.randomUUID()
            }
        ]);

        setInputText("");
    }

    return (
        <div className="chat-input-container">
            <input
                placeholder="Send your message to chatbot..."
                size="30"
                onChange={saveInputText}
                value={inputText}
                className="chat-input"
            />
            <button onClick={sendMessage} className="send-button">Send</button>
        </div>
    );
}

