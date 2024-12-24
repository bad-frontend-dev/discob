import { render } from "preact";
import { Sidebar } from "./components/sidebar";
import { TopBar } from "./components/topBar";
import { Chat } from "./components/chat/chat";
import { useState } from "preact/hooks";

import "./style.scss";
import { ChatMessage, RoomData } from "@backend/types";

const testMessages: ChatMessage[] = [
    {
        sender: {
            username: "kdasgjkdsjk",
            color: "white",
        },
        text: "hi",
    },
    {
        sender: {
            username: "kdjahkjghakjds",
            color: "blue",
        },
        text: "bwuh",
    },
];

const rooms: RoomData[] = [
    {
        name: "room",
        image: "https://cdn.discordapp.com/avatars/1125039866263122001/03bc1fd16fb9830a906ed3b639a4cac8.webp",
    },
    {
        name: "room",
        image: "https://cdn.discordapp.com/avatars/1125039866263122001/03bc1fd16fb9830a906ed3b639a4cac8.webp",
    },
    {
        name: "room",
        image: "https://cdn.discordapp.com/avatars/1125039866263122001/03bc1fd16fb9830a906ed3b639a4cac8.webp",
    },
    {
        name: "room",
        image: "https://cdn.discordapp.com/avatars/1125039866263122001/03bc1fd16fb9830a906ed3b639a4cac8.webp",
    },
    {
        name: "room",
        image: "https://cdn.discordapp.com/avatars/1125039866263122001/03bc1fd16fb9830a906ed3b639a4cac8.webp",
    },
    {
        name: "room",
        image: "https://cdn.discordapp.com/avatars/1125039866263122001/03bc1fd16fb9830a906ed3b639a4cac8.webp",
    },
    {
        name: "room",
        image: "https://cdn.discordapp.com/avatars/1125039866263122001/03bc1fd16fb9830a906ed3b639a4cac8.webp",
    },
];

function App() {
    const [minimized, setMinimized] = useState(false);

    function minimizeSidebar() {
        setMinimized(!minimized);
    }

    return (
        <>
            <TopBar handleClick={minimizeSidebar} />
            <div id="main">
                <Sidebar rooms={rooms} minimized={minimized} />
                <Chat messages={testMessages} />
            </div>
        </>
    );
}

render(<App />, document.getElementById("app"));
