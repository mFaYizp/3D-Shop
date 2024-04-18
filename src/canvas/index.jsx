import { Center, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Shirt from "./Shirt";
import BackDrop from "./BackDrop";
import CameraRig from "./CameraRig";
import { AmbientLight } from "three";

const CanvasModal = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        {/* <BackDrop />  */}
        <Center>
          <Shirt />
        </Center> 
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModal;
