<script lang="ts">
	let { username, text } = $props();
</script>

<div class="message">
	{#if username}
		<span class="username">{username}</span>
	{/if}
	<span class="message-text">{text}</span>
</div>

<style>
	.message {
		display: flex;
		flex-direction: column;
		padding: 3px 10px 3px 10px;

		&:hover {
			background-color: var(--mantle);
		}

		.username {
			font-size: 18px;
		}

		.message-text {
			font-size: 16px;
			color: var(--text);
		}
	}
</style>
