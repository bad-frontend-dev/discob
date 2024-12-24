import { MinimizeIcon } from "../assets/minimize";

export function TopBar({ handleClick }) {
    return (
        <div id="top-nav">
            <button
                class="utility-button"
                id="minimize-sidebar"
                onClick={handleClick}
            >
                <MinimizeIcon />
            </button>
            <span id="discob-text">Discob v3</span>
        </div>
    );
}
