import robotProfileImage from '../robot.png'
import userProfileImage from '../user.png'
import './ChatMessage.css';

export function ChatMessage({ message, sender, id }) {



    return (
        <div key={id} className={sender === "user" ? "chat-message-user" : "chat-message-robot"} >
            {sender === "robot" && (
                <img src={robotProfileImage} alt="Chatbot Icon" className="chat-message-profile" />
            )}
            <div className="chat-message-text">
                {message}
            </div>
            {sender === "user" && (
                <img src={userProfileImage} alt="User Icon" className="chat-message-profile" />
            )}
        </div>
    );
}
