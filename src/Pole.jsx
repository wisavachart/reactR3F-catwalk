import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Color } from "three";

const Pole = () => {
  const itemRef = useRef([]);

  useFrame((state) => {
    let elapsed = state.clock.getElapsedTime();
    for (let i = 0; i < itemRef.current.length; i++) {
      let mesh = itemRef.current[i];
      //let z = (i - 7) * 3.5;

      let z = (i - 7) * 3.5 + ((elapsed * 0.4) % 3.5) * 2;
      mesh.position.set(0, 0, -z);

      let dist = Math.abs(z);
      mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04);

      let colorScale = 1;
      if (dist > 2) {
        colorScale = 1 - (Math.min(dist, 12) - 2) / 10;
      }
      colorScale *= 0.5;

      if (i % 2 == 1) {
        mesh.material.emissive = new Color(1, 0.84, 0.06).multiplyScalar(
          colorScale
        );
      } else {
        mesh.material.emissive = new Color(0.27, 1, 0.93).multiplyScalar(
          colorScale
        );
      }
    }
  });

  return (
    <>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => (
        <mesh
          castShadow
          receiveShadow
          position={[0, 0, 0]}
          key={i}
          ref={(el) => (itemRef.current[i] = el)}>
          <torusGeometry args={[2.5, 0.05, 16, 3, 4.89]} />
          <meshStandardMaterial emissive={[0.5, 0.5, 0.5]} color={[0, 0, 0]} />
        </mesh>
      ))}
    </>
  );
};

export default Pole;
