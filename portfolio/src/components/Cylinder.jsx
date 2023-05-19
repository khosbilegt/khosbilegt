import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three';
import Image from '../assets/images/static.png';

function Cylinder(props) {
  const texture = useLoader(TextureLoader, Image);

  return (
    <mesh>
       <mesh position={[0, 0, 0]}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color="green" wireframe={true} />
        <meshBasicMaterial map={texture} transparent={true} />
        </mesh>
        <mesh position={[3, 0, 1]} rotation={[0, -Math.PI / 3, 0]}>
          <planeGeometry args={[2, 2]} />
          <meshBasicMaterial color="red" />
        </mesh>
        <mesh position={[-3, 0, 1]} rotation={[0, +Math.PI / 3, 0]}>
          <planeGeometry args={[2, 2]} />
          <meshBasicMaterial color="green" />
        </mesh>
    </mesh>
  );
}
 
export default Cylinder;