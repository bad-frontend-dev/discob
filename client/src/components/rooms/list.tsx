import { RoomData } from "@backend/types";
import { RoomButton } from "./button";

export function RoomList({ rooms }: { rooms: RoomData[] }) {
    return (
        <div id="rooms">
            {rooms.map((room) => {
                return <RoomButton room={room} />;
            })}
        </div>
    );
}
