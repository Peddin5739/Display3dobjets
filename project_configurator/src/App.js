import "./App.css";
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Colors from "./sharingcolors.jsx";

import ShoeModel from "./ShoeModel";
import Customize from "./customize";

function App() {
  const [color, setColor] = useState("black");
  const [mesh, setMesh] = useState("shoe_1");

  return (
    <Colors.Provider value={{ color, setColor, mesh, setMesh }}>
      <div className="container">
        <div className="component left">
          <Customize />
        </div>

        <div className="component right">
          {" "}
          {/* Updated to .component.right */}
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
    </Colors.Provider>
  );
}

export default App;
