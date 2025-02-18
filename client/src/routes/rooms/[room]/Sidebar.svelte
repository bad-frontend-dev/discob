<script lang="ts">
	import type { Room } from "$lib/types";
	import RoomButton from "./RoomButton.svelte";
	import Settings from "./Settings.svelte";
	let { rooms, currentRoom }: { rooms: Room[]; currentRoom: string } = $props();
</script>

<div id="sidebar">
	<div class="top-div">
		<span id="rooms-label">Rooms</span>
		<hr />
		<div id="rooms">
			{#each rooms as room}
				<RoomButton {room} {currentRoom} />
			{/each}
		</div>
	</div>
	<div class="bottom-div">
		<hr />
		<Settings />
	</div>
</div>

<style>
	#rooms-label {
		color: var(--text);
		font-size: 16px;
	}

	#rooms {
		flex-grow: 1;
		overflow-y: scroll;
	}

	#sidebar {
		flex-grow: 1;
		max-width: 250px;
		background-color: var(--mantle);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 10px;

		hr {
			background-color: var(--surface2);
			margin-top: 10px;
			margin-bottom: 10px;
			border-width: 0;
			min-height: 2px;
			width: 100%;
		}

		.top-div {
			display: flex;
			flex-direction: column;
			min-height: 0;
		}

		.bottom-div {
			display: flex;
			flex-direction: column;
			min-height: fit-content;
		}
	}
</style>
