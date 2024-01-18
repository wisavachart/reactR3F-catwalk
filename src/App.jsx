import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Ground from "./Ground";
import { Yickzz } from "./Yickk";
import Pole from "./Pole";
import { Boxes } from "./Decoration";

import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import Floor from "./GridFloor";
import Name from "./decorate/Name";
import { motion } from "framer-motion";
import { Yick2 } from "./Yick2";

function Show() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <color args={[0, 0, 0]} attach="background" />

      <Yick2 />

      <Pole />
      <Boxes />
      <Floor />

      <spotLight
        color={[1, 0.6, 0.2]}
        intensity={400}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[0.09, 0.91, 1.0]}
        intensity={400}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Ground />
      <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={1.3}
          width={300}
          height={300}
          kernelSize={5}
          luminanceThreshold={0.95}
          luminanceSmoothing={0.025}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0005, 0.0012]}
        />
      </EffectComposer>
    </>
  );
}

// App JSX //
// App JSX //
// App JSX //
function App() {
  const name = "Wisavachart";
  const job = "Web/Mobile Developer and UI designer";

  const texrVarients = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <Suspense fallback={null}>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <Name />
          </div>
          <div className="content">
            <h2 variants={texrVarients}>{name}</h2>
            <h1 variants={texrVarients}>{job}</h1>
            <div className="button">
              <button>Contact Me</button>
            </div>
          </div>
        </div>
        <Canvas shadows>
          <Show />
        </Canvas>
      </div>
    </Suspense>
  );
}

export default App;
