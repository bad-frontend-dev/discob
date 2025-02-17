<script lang="ts">
	import type { Room } from "$lib/types";
	import RoomButton from "./RoomButton.svelte";

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
		<button class="utility-button" id="settings">
			<svg class="icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
				/>
			</svg>
			<span>Settings</span>
		</button>
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

	#settings {
		padding: 5px;
		width: 100%;
		border-radius: 5px;
		display: flex;
		align-items: center;

		.icon {
			width: 18px;
			fill: var(--text);
		}

		span {
			margin-left: 10px;
			font-size: 16px;
			color: var(--text);
		}
	}
</style>
