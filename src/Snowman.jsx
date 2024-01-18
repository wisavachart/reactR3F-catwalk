/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/model/snowman.glb -o src/Snowman.jsx -r public 
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Snowman(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/snowman.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Body_11"
            geometry={nodes.Body_11.geometry}
            material={materials._092_Chili}
            skeleton={nodes.Body_11.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/model/snowman.glb");
