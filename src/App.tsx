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
    ref.current.rotation!.x += 1 * delta
    ref.current.rotation!.y += 0.5 * delta
  })

  useControls(boxprops.props.name!, {
    wireframe: {
      value: false,
      onChange: (v: boolean) => {
        if(boxprops.props.name == "meshBasicMaterial")
          (ref.current.material as THREE.MeshBasicMaterial).wireframe = v
        else if(boxprops.props.name == "meshNormalMaterial")
          (ref.current.material as THREE.MeshNormalMaterial).wireframe = v
        else if(boxprops.props.name == "meshPhongMaterial")
          (ref.current.material as THREE.MeshPhongMaterial).wireframe = v
        else if(boxprops.props.name == "meshStandardMaterial")
          (ref.current.material as THREE.MeshStandardMaterial).wireframe = v
      }
    },
    flatShading: {
      value: true,
      // onChange: (v) => {
      //   // ref.current.material.flatShading = v
      //   // ref.current.material.needsUpdate = true
      // },
    },
    color: {
      value: 'lime',
      // onChange: (v) => {
      //   // ref.current.material.color = new THREE.Color(v)
      // },
    },
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
        <Box props={{position:[-0.75, 0, 0], name:"meshBasicMaterial",    material: new THREE.MeshBasicMaterial()}}/>
        <Box props={{position:[ 0.75, 0, 0], name:"meshNormalMaterial",   material: new THREE.MeshNormalMaterial()}}/>
        <Box props={{position:[-0.75, 2, 0], name:"meshPhongMaterial",    material: new THREE.MeshPhongMaterial()}}/>
        <Box props={{position:[ 0.75, 2, 0], name:"meshStandardMaterial", material: new THREE.MeshStandardMaterial()}}/>
        <OrbitControls />
        <axesHelper args={[5]} />
        <gridHelper />
        <Stats />
      </Canvas>
    </div>
  );
}

export default App;
