import Alpine from 'alpinejs'
import './tailwind.css';
import App from './App.svelte';

/*
  Alpine.js
  Svelte
*/

let apps = []
let blocksCount = 0
// Common JS method for both editor and front end
function initializeHeroBlock() {
  apps.forEach(app=>{
    app.$destroy()
  })
  apps = []
  const all = document.querySelectorAll(".hero");
  if (all.length > 0) {
      console.log("Hero element found:", all[0]);
      /*
      all.forEach(block=>{
        apps.push(new App({
          target: block,
          hydrate: true
        }));
      })
        */
      window.Alpine = Alpine
      
      window.Alpine.data('dropdown', () => ({
        open: true,
        toggle() {
            this.open = ! this.open
        }
      }))
        
      window.Alpine.start()
      
  }
}

// Check if we're in the editor or front end
if (typeof wp != 'undefined' && typeof wp.blockEditor != 'undefined') {
  console.log("EEDITOR")
  
  // Running in the editor
  wp.domReady(() => {
      const { select, subscribe } = wp.data;
      subscribe(() => {
        const blocks = select('core/block-editor').getBlocks();
        if(blocks.length && blocksCount != blocks.length){
          blocksCount = blocks.length
          setTimeout(()=>{
            initializeHeroBlock();
          },2000)
        }
      })
  });
} else {
  // Running on the front end
  document.addEventListener('DOMContentLoaded', initializeHeroBlock);
}