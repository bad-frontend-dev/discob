import type { PageLoad } from "./$types";
import type { Message, Room } from "$lib/types";

const testRooms: Room[] = [
	{
		image: "https://cdn.discordapp.com/avatars/535321378291843074/8bfa4b4f795280b635b3fc633ba0a30d.webp",
		name: "sam",
		id: "sam",
	},
	{
		image: "https://cdn.discordapp.com/avatars/535321378291843074/8bfa4b4f795280b635b3fc633ba0a30d.webp",
		name: "room2",
		id: "room2",
	},
	{
		image: "https://cdn.discordapp.com/channel-icons/1261853769411465287/581bc2f9810b21effb29d613380e6561.webp",
		name: "40 bingles",
		id: "colonthree",
	},
	{
		image: "https://cdn.discordapp.com/avatars/535321378291843074/8bfa4b4f795280b635b3fc633ba0a30d.webp",
		name: "meow",
		id: "meow",
	},
	{
		image: "https://cdn.discordapp.com/avatars/535321378291843074/8bfa4b4f795280b635b3fc633ba0a30d.webp",
		name: "waow",
		id: "a",
	},
	{
		image: "https://cdn.discordapp.com/avatars/535321378291843074/8bfa4b4f795280b635b3fc633ba0a30d.webp",
		name: "room3",
		id: "thatoneroom",
	},
	{
		image: "https://cdn.discordapp.com/avatars/535321378291843074/8bfa4b4f795280b635b3fc633ba0a30d.webp",
		name: "buh",
		id: "dslkgasd",
	},
];

export const load: PageLoad = async ({ fetch, params }) => {
	const currentRoom = testRooms.find((room) => room.id === params.room);
	const response = await fetch("http://localhost:9000/messages/" + params.room);
	const messages: Message[] = await response.json();

	return {
		room: {
			room: currentRoom,
			roomsList: testRooms,
		},
		messages: messages,
	};
};
