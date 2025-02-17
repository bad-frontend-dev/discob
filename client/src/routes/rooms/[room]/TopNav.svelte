<script lang="ts">
	const { room } = $props();
</script>

<div id="top-nav">
	<div id="left-thing">
		<span id="discob-text">Discob v3</span>
	</div>
	<div id="right-thing">
		<span class="show-room">{room}</span>
	</div>
</div>

<style>
	#top-nav {
		max-width: 100%;
		min-height: 0;
		display: flex;

		#left-thing {
			border-bottom: solid 3px var(--crust);
			background-color: var(--mantle);
			max-width: 250px;
			padding: 10px;
			flex-grow: 1;
		}

		#right-thing {
			background-color: var(--base);
			border-bottom: solid 3px var(--mantle);
			flex-grow: 1;
			display: flex;
			align-items: center;

			.show-room {
				margin: 10px;
				color: var(--text);
			}
		}
	}

	#discob-text {
		color: var(--text);
		font-size: 22px;
	}
</style>
