<script>
	export let data;
	let name = data.name;
	
	function sayHello(){
		console.log(name)
	}
</script>


<h1>SLIDER - Hello <span>{name}</span>!</h1>
<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
<button on:click={sayHello}>Say Hello</button>