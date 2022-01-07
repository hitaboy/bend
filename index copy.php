<link rel="stylesheet" type="text/css" href="/wp-content/themes/bend/public/build/bundle.css">

<div class="mod" modType="Media" id="media1">
    <h1>Hello <span>{name}</span>!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
    <button>Say Hello</button>
</div>

<div class="mod" modType="Slider" id="slider1">
    <h1>Hello <span>{name}</span>!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
    <button>Say Hello</button>
</div>

<div class="mod" modType="Video" id="video1">
    <h1>Hello <span>{name}</span>!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
    <button>Say Hello</button>
</div>

<script>
    const preData = {
        media1: {
            name: "Media 1 !!!"
        },
        slider1: {
            name: "Slider 1 !!!"
        },
        video1: {
            name: "Video 1 !!!"
        }
    }
</script>

<script type="text/javascript" async="" src="/wp-content/themes/bend/public/build/bundle.js"></script>