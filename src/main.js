import App from './App.svelte';

document.querySelectorAll(".mod").forEach(element => {

		let id = element.getAttribute("id");
		let modType = element.getAttribute("modType");
		let data = preData[id]
		
		new App({
			target: element,
			hydrate: true,
			hydratable: true,
			props: {modType: modType, data: data}
		});
    
  });

export default app;