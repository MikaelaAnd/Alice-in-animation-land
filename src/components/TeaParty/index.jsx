import { Background, Bunny, MadHatter, Character, RightArm, LeftArm } from "./styles";
import { Canvas } from "@react-three/fiber";
import HatterImg from "./MadHatter.png";
import ArmImg from "./Arm.png";
import BunnyImg from "./Bunny.png";
import BunnyArm from "./BunnyArm.png";
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
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Bunny>
          <Character src={BunnyImg} alt="" />
          <LeftArm image={BunnyArm} alt="" />
        </Bunny>
        <MadHatter>
          <RightArm image={ArmImg} />
          <Character src={HatterImg} alt="" />
        </MadHatter>
      </div>
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


