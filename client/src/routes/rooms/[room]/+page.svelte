<script lang="ts">
	import type { PageProps } from "./$types";
	import type { Message, Room } from "$lib/types";
	import Topnav from "./TopNav.svelte";
	import Sidebar from "./Sidebar.svelte";
	import Chat from "./Chat.svelte";

	let { data }: PageProps = $props();
</script>

<div id="content">
	<Topnav room={data.room.room?.name} />
	<div id="main">
		<Sidebar rooms={data.room.roomsList} currentRoom={data.room.room} />
		<Chat messages={data.messages} />
	</div>
</div>

<style>
	:global {
		:root {
			--lavender: #b7bdf8;
			--text: #cad3f5;
			--subtext1: #b8c0e0;
			--subtext0: #a5adcb;
			--overlay2: #939ab7;
			--overlay1: #8087a2;
			--overlay0: #6e738d;
			--surface2: #5b6078;
			--surface1: #494d64;
			--surface0: #363a4f;
			--base: #24273a;
			--mantle: #1e2030;
			--crust: #181926;
			--border-style: ;
			--font-main: "Open Sans", sans-serif;
		}

		button,
		input,
		textarea {
			border-width: 0;
			background-color: transparent;
		}

		span {
			font-family: var(--font-main);
		}

		@media screen and (max-width: 640px) {
			#sidebar,
			#left-thing {
				margin-left: -270px;
			}

			#send-message-button {
				display: block !important;
			}
		}

		body {
			margin: 0;
		}
	}

	#content {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	#main {
		flex-grow: 1;
		height: calc(100% - 55px);
		display: flex;
		flex-direction: row;
	}
</style>
