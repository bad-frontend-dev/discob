<script lang="ts">
	import type { PageProps } from "./$types";
	import type { Room } from "$lib/types";
	import Topnav from "./topnav.svelte";
	import Sidebar from "./sidebar.svelte";

	const testRooms: Room[] = [
		{
			image: "https://cdn.discordapp.com/avatars/535321378291843074/8bfa4b4f795280b635b3fc633ba0a30d.webp",
			name: "sam",
		},
	];

	let { data }: PageProps = $props();
</script>

<div id="content">
	<Topnav room={data.room} />
	<div id="main">
		<Sidebar rooms={testRooms} currentRoom={data.room} />
	</div>
</div>
