import { Background, MadHatter, Hatter, BouncingArm } from "./styles";
import { Canvas } from "@react-three/fiber";
import HatterImg from "./MadHatter.png";
import ArmImg from "./Arm.png";
import { Sky, Stars } from "@react-three/drei";

export function TeaParty() {
  return (
    <Background>
      <Canvas camera={{ position: [0, 0, 0], fov: 80 }}>
        <ambientLight />
        <Sky />
        <Stars />
        <Table />
      </Canvas>
      <MadHatter>
        <BouncingArm image={ArmImg} />
        <Hatter src={HatterImg} alt="" />
      </MadHatter>
    </Background>
  );
}

export const Table = () => {
  return (
    <mesh position={[0, -13, 0]}>
      <cylinderGeometry args={[30, 30, 3, 30]} />
      <meshLambertMaterial color={"#CA9088"} />
    </mesh>
  );
};


