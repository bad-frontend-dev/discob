<script lang="ts">
	import Message from "./Message.svelte";
	import type { Message as MessageType } from "$lib/types";

	let { messages }: { messages: MessageType[] } = $props();

	const formattedMessages: MessageType[] = messages.map((message, index) => {
		if (messages[index - 1]?.username === message.username) {
			return {
				username: "",
				text: message.text,
			};
		}
		return message;
	});
</script>

<div id="chat">
	<div id="displayed-messages">
		{#each formattedMessages as { username, text }}
			<Message {username} {text} />
		{/each}
	</div>
	<div id="message-components">
		<textarea id="message-input" placeholder="enter message here"></textarea>
		<button id="send-message-button" aria-label="send message">
			<svg class="icon" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M3.78963301,2.77233335 L24.8609339,12.8499121 C25.4837277,13.1477699 25.7471402,13.8941055 25.4492823,14.5168992 C25.326107,14.7744476 25.1184823,14.9820723 24.8609339,15.1052476 L3.78963301,25.1828263 C3.16683929,25.4806842 2.42050372,25.2172716 2.12264586,24.5944779 C1.99321184,24.3238431 1.96542524,24.015685 2.04435886,23.7262618 L4.15190935,15.9983421 C4.204709,15.8047375 4.36814355,15.6614577 4.56699265,15.634447 L14.7775879,14.2474874 C14.8655834,14.2349166 14.938494,14.177091 14.9721837,14.0981464 L14.9897199,14.0353553 C15.0064567,13.9181981 14.9390703,13.8084248 14.8334007,13.7671556 L14.7775879,13.7525126 L4.57894108,12.3655968 C4.38011873,12.3385589 4.21671819,12.1952832 4.16392965,12.0016992 L2.04435886,4.22889788 C1.8627142,3.56286745 2.25538645,2.87569101 2.92141688,2.69404635 C3.21084015,2.61511273 3.51899823,2.64289932 3.78963301,2.77233335 Z"
				></path>
			</svg>
		</button>
	</div>
</div>

<style>
	#chat {
		background-color: var(--base);
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}

	#displayed-messages {
		margin-top: auto;
		overflow-y: scroll;
		margin-bottom: 10px;
	}

	#message-components {
		width: 100%;
		display: flex;
		align-items: center;

		#message-input {
			margin: 0px 10px 10px 10px;
			flex-grow: 1;
			height: 25px;
			color: var(--text);
			font-family: var(--font-main);
			font-size: 17px;
			background-color: var(--mantle);
			border-radius: 5px;
			padding: 10px 5px 10px 5px;
			resize: none;

			&:focus {
				border-width: 0px;
				outline: none;
			}

			&:placeholder {
				color: var(--overlay0);
			}
		}

		#send-message-button {
			height: 45px;
			width: 45px;
			display: none;

			.icon {
				fill: var(--text);
			}
		}
	}
</style>
