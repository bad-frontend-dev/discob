import { RoomData } from "@backend/types";

export function RoomList({ rooms }: { rooms: RoomData[] }) {
    return (
        <div id="rooms">
            {rooms.map((room) => {
                <RoomButton room={room} />;
            })}
        </div>
    );
}

export function RoomButton({ room }: { room: RoomData }) {
    return (
        <button class="room-button">
            <img
                class="room-image"
                src={room.image}
                alt={room.name}
                draggable={false}
            />
            <span class="room-name">{room.name}</span>
        </button>
    );
}
