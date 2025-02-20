import type { PageLoad } from "./$types";
import type { Room } from "$lib/types";

const testRooms: Room[] = [
	{
		image: "https://cdn.discordapp.com/avatars/535321378291843074/8bfa4b4f795280b635b3fc633ba0a30d.webp",
		name: "sam",
		id: "sam",
	},
	{
		image: "https://cdn.discordapp.com/avatars/535321378291843074/8bfa4b4f795280b635b3fc633ba0a30d.webp",
		name: "room2",
		id: "reallycoolroom",
	},
];

export const load: PageLoad = ({ params }) => {
	const currentRoom = testRooms.find((room) => room.id === params.room);

	return {
		room: currentRoom,
		roomsList: testRooms,
	};
};
