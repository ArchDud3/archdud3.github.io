<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<b>
			ArchDud3
		</b>
	</h1>

	<h2 id= middle-text>
		Developer<br>Robot Man <br>
		Youtuber<br>Still a student<br><br><br>
	</h2>

	<div id=SkibiOS>
		<h1 id=left-text>
			SkibiOS
		</h1>
		<p>
			SkibiOS is <i><u>your</u></i> next operating system. Sure it's beautiful, but it does things that other operating systems can't do.
			For example - It can open any type of application wether it's for Windows, MacOS or Linux, it runs. This is good for all users, because
			if you want to play a game with your friends that is only for Windows, you can do that while running final cut pro for mac!
		</p>
		
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

</style>
