import { ChatMessage } from "@backend/types";

export function Message({
    message,
    isChained,
}: {
    message: ChatMessage;
    isChained: boolean;
}) {
    return (
        <div class="message">
            {!isChained && (
                <span class="username" style={{ color: message.sender.color }}>
                    {message.sender.username}
                </span>
            )}
            <span class="message-text">{message.text}</span>
        </div>
    );
}
