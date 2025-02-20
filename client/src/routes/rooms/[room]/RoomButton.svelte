<script lang="ts">
	import type { Room } from "$lib/types";
	const { room, currentRoom }: { room: Room; currentRoom: Room | undefined } = $props();
	let focused = $derived(currentRoom?.id === room.id);
</script>

<a class="room-button {focused && 'focused'}" href="/rooms/{room.id}">
	<img class="room-image" src={room.image} alt={room.name} draggable="false" />
	<span class="room-name">{room.name}</span>
</a>

<style>
	.room-button {
		align-items: center;
		padding: 5px;
		display: flex;
		border-radius: 5px;
		text-decoration: none;

		&:hover,
		&.focused {
			cursor: pointer;
			background-color: var(--surface0);
		}

		&.focused .room-name {
			color: var(--text);
		}

		&:hover .room-name {
			color: var(--text);
		}

		.room-name {
			color: var(--overlay2);
			font-size: 14px;
			font-weight: bold;
			margin-left: 10px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.room-image {
			max-width: 32px;
			max-height: 32px;
			border-radius: 50%;
		}
	}
</style>
