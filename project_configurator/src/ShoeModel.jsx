import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const ShoeModel = () => {
  const gltf = useLoader(GLTFLoader, "/3d-shoe-model-gltf-master/shoe.gltf");

  return <primitive object={gltf.scene} />;
};

export default ShoeModel;
