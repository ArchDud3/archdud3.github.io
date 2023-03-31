<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer id= middle-text>
		<p> Socials » <a href= https://twitter.com/ArchDud3>Twitter</a> » 
			<a href= https://www.youtube.com/channel/UCWHEv6d3fIk4aRDQV3mGWng>Youtube</a>
			 » <a href= https://github.com/ArchDud3>GitHub</a> » 
			<a href= https://stackoverflow.com/users/21330735/skibi-os>Stack overflow</a></p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
