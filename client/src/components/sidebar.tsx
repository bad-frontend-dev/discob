import { RoomData } from "@backend/types";
import { RoomList } from "./rooms/list";
import { SettingsButton } from "./settings";

export function Sidebar({
    rooms,
    minimized,
}: {
    rooms: RoomData[];
    minimized: boolean;
}) {
    return (
        <div id="sidebar" class={minimized && "minimize"}>
            <div class="top-div">
                <span id="rooms-label">Rooms</span>
                <hr />
                <RoomList rooms={rooms} />
            </div>
            <div class="bottom-div">
                <hr />
                <SettingsButton />
            </div>
        </div>
    );
}
