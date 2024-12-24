import { AirplaneIcon } from "../../assets/airplane";

export function MessageComponents() {
    return (
        <div id="message-components">
            <textarea
                id="message-input"
                placeholder="enter message here"
            ></textarea>
            <button id="send-message-button">
                <AirplaneIcon />
            </button>
        </div>
    );
}
