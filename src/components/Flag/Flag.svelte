<script>
  import { T, useTask } from "@threlte/core";
  import { useTexture } from "@threlte/extras";
  import { ClampToEdgeWrapping, PlaneGeometry, DoubleSide, Vector2 } from "three";
  import { spring } from 'svelte/motion';
  import { onMount } from "svelte";

  export let m
  let currentWindStrength = 1;
  let targetWindStrength = 0.5;
  let windChangeTime = 0;
  const windChangeDuration = 3.0;
  const mouseInfluenceRadius = 1.0;
  const mouse = new Vector2();
  
  let camera_x = spring(0,{ stiffness: 0.02, damping: 0.9 });
  $: camera_x.set(m.x)
  let camera_z = spring(0,{ stiffness: 0.02, damping: 0.9 });
  $: camera_z.set(m.y)
  let camera_z_mod = spring(60,{ stiffness: 0.06, damping: 0.9 });

  let planeWidth = 20;
  let planeHeight = 10;
  let planeDepth = 200;
  let planeSegments = 100;
  const geometry = new PlaneGeometry(planeWidth, planeHeight, planeDepth, planeSegments);
  const vertices = geometry.getAttribute('position')
  const uvs = geometry.getAttribute('uv');
  // Calcular las UVs basado en el aspecto de la textura y la geometría
  const planeAspectRatio = planeWidth / planeHeight; // El aspecto del plano
  let rotation = 0;
  let time = 0
  let mapLoaded = false
  let textureWidth = 1200 
  let textureHeight = 600 
  let textureAspectRatio = 2; // Para guardar el aspecto de la textura
  const map = useTexture('texture6.png', {
    transform: (texture) => {
      texture.wrapS = ClampToEdgeWrapping
      texture.wrapT = ClampToEdgeWrapping
      texture.repeat.set(1,1)
      // Obtener el aspecto de la textura
      textureAspectRatio = texture.image.width / texture.image.height;
      textureWidth = texture.image.width
      textureHeight = texture.image.height
      // Calcular las UVs
      for (let i = 0; i < vertices.count; i++) {
        let x = vertices.getX(i);
        let y = vertices.getY(i);
        setUVs(x,y,i)
      }
      mapLoaded = true
      return texture
    }
  })
  onMount(()=>{
    window.addEventListener('mousemove', onMouseMove);
    camera_z_mod.set(0)
  })

  function setUVs(x,y,i){
    
    let u, v;
    textureAspectRatio = textureWidth / textureHeight;
    if (planeAspectRatio > textureAspectRatio) {
      // El plano es más ancho que la textura, ajustamos v
      u = (x + planeWidth/2) / planeWidth;
      v = ((y + planeHeight/2) / planeHeight) * ( textureAspectRatio / planeAspectRatio);
    } else {
      // La textura es más ancha que el plano, ajustamos u
      u = ((x + planeWidth/2) / planeWidth) * ( planeAspectRatio / textureAspectRatio );
      v = (y + planeHeight/2) / planeHeight;
    }
    uvs.setXY(i, u, v); // Actualizar las coordenadas UV
  }

  // Control del mouse
  function onMouseMove(event) {
    const { clientX, clientY } = event;
    mouse.x = (clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(clientY / window.innerHeight) * 2 + 1;
  }

   // Función de atenuación (falloff) para el movimiento basado en la posición X
   function calculateInfluence(x) {
    const minX = -10;  // Borde izquierdo (fijo)
    const maxX = 0;   // Borde derecho (máxima influencia del viento)
    const normalizedX = (x - minX) / (maxX - minX);  // Normalizar x en el rango [0, 1]

    // Puedes cambiar la función de interpolación según el tipo de atenuación que prefieras.
    // Esta es una interpolación lineal: cuanto más a la derecha, más influencia del viento.
    return normalizedX;
  }

  useTask((delta) => {
    if(!map){ return false; }
    // Verificar si clock está disponible
    time += delta
    rotation += delta/10;

    for (let i = 0; i < vertices.count; i++) {
      let x = vertices.getX(i);
      let y = vertices.getY(i);
      let z = vertices.getZ(i);
      
      // Asegurarse de que currentWindStrength es un número válido
      if (isNaN(currentWindStrength)) currentWindStrength = 0.5; // Establecer un valor por defecto

      // Calcular la influencia del movimiento basada en la posición X
      const influence = calculateInfluence(x);

      // Si el vértice está en el borde izquierdo (x = -5), no lo movemos
      if (x === -10) {
        continue; // Saltar la modificación de este vértice (mantenerlo fijo)
      }

      // Aplicar la simulación de viento suavizada
      // z = Math.sin(time + y * Math.cos(time/4) + x * 1.5 * Math.sin((time+100)/4)) * currentWindStrength; 
      z = (Math.sin(x + time*-1) * currentWindStrength / 2 + Math.sin(y/2 + time*-1) * currentWindStrength/2) * influence;
      // x = x + z/200;
      // y = (y + Math.sin(x + time*2) / 200);

      // Añadir una variación suave y lenta en el movimiento de los vértices
      z += Math.sin(z * Math.sin(time/4) + y * Math.cos(time/3)) * 0.2 * influence;

      // Asegurarse de que z es un número válido
      if (isNaN(z)) z = 0; // Establecer un valor por defecto si z es NaN
    
      /*
      // Interacción con el mouse
      const distance = Math.sqrt((mouse.x * 10 - x) ** 2 + (mouse.y * 5 - y) ** 2);

      if (distance < mouseInfluenceRadius) {
        const falloff = 1 - distance / mouseInfluenceRadius;
        z += falloff * 2;
      }
      */
      // Asegurarse de que z es un número válido antes de establecerlo
      if (!isNaN(z)) {
        vertices.setZ(i, z);
      }
      
    }
    vertices.needsUpdate = true; // Indicar que las posiciones han cambiado
    uvs.needsUpdate = true; // Indicar que las posiciones han cambiado
    geometry.computeVertexNormals()
  })
</script>

<T.PerspectiveCamera makeDefault position={[$camera_x, $camera_z_mod/4 + (Math.sin(time/3)) + $camera_z / 2, 20 + $camera_z*-5]} fov={90} lookAt.y={0.5}></T.PerspectiveCamera>
<!-- <T.AmbientLight intensity={0.5} /> -->

<T.DirectionalLight position={[-10, 10, 30]} castShadow intensity={3+Math.sin(time/2)} color={0x006600}  />
<T.DirectionalLight position={[10, 10, 30]} castShadow intensity={3+Math.cos(time*2)} color={0xff0000}  />
<T.DirectionalLight position={[0, -10, 20]} castShadow intensity={5+Math.cos(time)} color={0x0000ff}  />


<!-- rotation.y={(Math.PI/(2-Math.sin(time/5))/2)/4} -->
{#await map then value}
  <T.Mesh scale={1.5} position={[$camera_z_mod,2,0]} {geometry} rotation.y={(Math.PI/4)*($camera_x/6)+$camera_z_mod/85} rotation.x={(Math.PI/4)*($camera_z/3)} >
    <!--<T.BufferGeometry bind:ref={test} /> -->
    <T.MeshStandardMaterial color={0xffffff} side={DoubleSide} map={value} metalness={0.75} roughness={0.5} wireframe={false} />
  </T.Mesh>
{/await}