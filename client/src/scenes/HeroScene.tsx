import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
// import { EffectComposer, DotScreen } from "@react-three/postprocessing";
import Porsche911 from "../Components/SceneObjects/Porsche911.tsx";

function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 20 }}>
      <OrbitControls />
      <ambientLight intensity={1} />
      <directionalLight intensity={10} position={[5, 5, 5]} castShadow />
      <Environment preset="sunset" resolution={16} background blur={1} />
      <Porsche911 />
      {/* <EffectComposer>
        <DotScreen/>
      </EffectComposer> */}
    </Canvas>
  );
}

export default HeroScene;
