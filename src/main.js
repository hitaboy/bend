import Alpine from 'alpinejs'
import Parallax from './alpines/Parallax.js';
import './tailwind.css';
import './styles/main.scss';
import App from './App.svelte';
import Flag from './components/Flag/App.svelte';
import WorkBrief from './components/WorkBrief/App.svelte';
import Menu from './components/Menu/App.svelte';
import Masonry from './components/Masonry/App.svelte';

let components = {
  Flag: Flag,
  WorkBrief: WorkBrief, 
  Menu: Menu, 
  Masonry: Masonry
}

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
  const allSveltes = document.querySelectorAll(".bendblock");
  if (allSveltes.length > 0) {
      allSveltes.forEach(block=>{
        if(typeof components[block.dataset.component]!= 'undefined'){
          let data = block.dataset.dump || '{}'
          apps.push(new components[block.dataset.component]({
            target: block, 
            hydrate: true, 
            props: {
              dump: data
            }
          }));
        }
      })
  }

  window.Alpine = Alpine
      
      window.Alpine.data('dropdown', () => ({
        open: true,
        toggle() {
            this.open = ! this.open
        }
      }))
      
      window.Alpine.data('menu', () => ({
        open: false,
        openMenu() {
            this.open = true
        },
        closeMenu() {
            this.open = false
        }
    }))
    Parallax();
    window.Alpine.start()
}

// Check if we're in the editor or front end
if (typeof wp != 'undefined' && typeof wp.blockEditor != 'undefined') {
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