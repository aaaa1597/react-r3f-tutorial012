import React, {useRef} from 'react';
import './App.css';
import { Canvas, useFrame, MeshProps  } from '@react-three/fiber'
import * as THREE from 'three'
import { Stats, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'

type BoxProps = {
  props: MeshProps;
  wireframe?: boolean;
}

const Box = (boxprops: BoxProps) => {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((_, delta) => {
    if( !ref.current) return
    ref.current.rotation.x += 1 * delta
    ref.current.rotation.y += 0.5 * delta
  })

  return (
    <mesh {...boxprops.props} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  )
}

const App = () => {
  return (
    <div style={{ width: "75vw", height: "75vh" }}>
      <Canvas camera={{ position: [3, 1, 2] }}>
        <ambientLight />
        <directionalLight />
        <Box props={{position:[-0.75, 0, 0], name:"A", material: new THREE.MeshBasicMaterial()}}/>
        <Box props={{position:[ 0.75, 0, 0], name:"B", material: new THREE.MeshNormalMaterial()}}/>
        <Box props={{position:[-0.75, 2, 0], name:"C", material: new THREE.MeshPhongMaterial()}}/>
        <Box props={{position:[ 0.75, 2, 0], name:"D", material: new THREE.MeshStandardMaterial()}}/>
        <OrbitControls />
        <axesHelper args={[5]} />
        <gridHelper />
        <Stats />
      </Canvas>
    </div>
  );
}

export default App;
