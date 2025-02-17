<script lang="ts">
	import type { Room } from "$lib/types";
	const { room, currentRoom }: { room: Room; currentRoom: string } = $props();
	const focused = currentRoom === room.name;
</script>

<button class="room-button {focused && 'focused'}">
	<img class="room-image" src={room.image} alt={room.name} draggable="false" />
	<span class="room-name">{room.name}</span>
</button>
