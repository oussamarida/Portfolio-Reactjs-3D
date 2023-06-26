import {OrbitControls, Preload, useGLTF  } from '@react-three/drei'
import { Suspense } from 'react';
import CanvasLoader from '../Loader'
import { Canvas } from '@react-three/fiber';

const Computers = () => {
   const computer=useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive object={computer.scene} scale={0.75} position={[0,-3.25,-1.5]} />
    
    </mesh>
    )
}
const ComputersCanvas=()=>{
  return(
      <Canvas width="100%" height="100%"
      frameLoop='demand'
      shadows
      camera={{position:[20,3,5] , fov:25}}
      gl={{preserveDrawingBuffer:true}}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />
          <Computers />
        </Suspense>
        <Preload all />
      </Canvas>
    )
}

export default ComputersCanvas