import { ChatMessage } from "@backend/types";
import { Message } from "./message";
import { MessageComponents } from "./bottom";

export function Chat({ messages }: { messages: ChatMessage[] }) {
    return (
        <div id="chat">
            <div id="displayed-messages">
                {messages.map((message, index) => {
                    const previous = messages[index - 1]?.sender.username;
                    const current = message.sender.username;

                    return (
                        <Message
                            message={message}
                            isChained={previous === current}
                        />
                    );
                })}
            </div>
            <MessageComponents />
        </div>
    );
}
