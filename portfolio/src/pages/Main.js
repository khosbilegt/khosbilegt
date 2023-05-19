import React from 'react';
import { Canvas } from "@react-three/fiber";
import Navbar from '../components/Navbar';
import Cylinder from '../components/Cylinder';
import './Main.css';
import '../index.css';

function Main() {
     return (
          <div className='Home'>
               <Navbar />
               <Canvas style={{ width: '100%', height: '400px' }}>
                    <pointLight position={[10, 10, 10]} />
                    {/* <ambientLight /> */}
                    <Cylinder position={[-1.2, 0, 0]} />
               </Canvas>
          </div>
     );
}

export default Main;