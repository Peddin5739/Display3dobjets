import "./App.css";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import ShoeModel from "./ShoeModel";

function App() {
  return (
    <div className="container">
      <div className="component left"></div>

      <div className="component right">
        <Canvas>
          {/* Camera Setup */}
          <PerspectiveCamera makeDefault position={[0, 2, 5]} />
          <OrbitControls />

          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />

          {/* Shoe Model */}
          <Suspense fallback={null}>
            <ShoeModel />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
