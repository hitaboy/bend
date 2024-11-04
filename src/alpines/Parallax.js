/**
 * Installation and setup:
 * 0. Install AlpineJS: `npm i -S alpinejs`
 * 1. Make sure AlpineJS is running by adding `x-data` attribute on opening `<body>` tag
 * 2. Add `x-parallax="path/to/image.jpg"` on element to add parallax bg image
 *
 * PS. this code was partially generated from ChatGPT 4
 */

import { loadImage } from '../utils/index.js';
 
export default ()=>{
    window.Alpine.directive('parallax', (el, { expression }, { effect, cleanup }) => {
        const src = expression;
    
        // Set initial styles for the element
        el.style.backgroundImage = `url(${src})`;
        el.style.backgroundAttachment = 'fixed';
        el.style.backgroundPosition = 'center';
        el.style.backgroundRepeat = 'no-repeat';
    
        // Function to handle scroll event
        const scrollSpeed = 0.5; // Adjust this value to change the parallax speed (0.5 means 50% slower than scroll)
        const onScroll = () => {
            const yPos = -(window.scrollY - el.offsetTop) * scrollSpeed;
            // el.style.backgroundPosition = `center ${yPos}px`;
            var transform = `translate(${yPos}px,0) rotate3D(0.5,1,0,${yPos}deg)`;
            el.style.transform = transform;
        };
    
        onScroll();
    
        const onResize = async () => {
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;
            const extraHeight = windowHeight * scrollSpeed; // Calculate extra height needed for the parallax effect
    
            try {
                // Load image and get natural dimensions
                const { width: naturalWidth, height: naturalHeight } = await loadImage(src);
    
                // Calculate aspect ratio and target dimensions
                const aspectRatio = naturalWidth / naturalHeight;
                let targetHeight = windowHeight + extraHeight;
                let targetWidth = targetHeight * aspectRatio;
    
                // If the target width is less than the window width, adjust the dimensions
                if (targetWidth < windowWidth) {
                    targetWidth = windowWidth;
                    targetHeight = targetWidth / aspectRatio;
                }
    
                el.style.backgroundSize = `${targetWidth}px ${targetHeight}px`;
            } catch (error) {
                console.error('Error:', error.message);
            }
        };
    
        // Add event listeners and run effects
        effect(() => {
            onResize(); // Set initial background size
            window.addEventListener('resize', onResize);
            window.addEventListener('scroll', onScroll);
        });
    
        // Clean up when directive is removed or the element is removed from the DOM
        cleanup(() => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener('scroll', onScroll);
        });
    });
}