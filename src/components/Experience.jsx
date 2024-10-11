import {
  Float,
  MeshDistortMaterial,
  MeshPortalMaterial,
  useScroll,
  Text,
  CameraControls
} from "@react-three/drei";
import { useFrame, useThree, extend } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { easing, geometry } from 'maath'
import { framerMotionConfig } from "../config";
import { Background } from "./Background";
import { Kitchen } from "./Kitchen";
import { Duck } from "./Duck";

import * as THREE from "three";

extend(geometry)

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9));

  const controlsRef = useRef();
  const scene = useThree((state)=> state.scene)

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();
  const [active, setActive] = useState(null);
  const ACTION = {
    NONE: 0,
    ROTATE: 1,
    TRUCK: 2,
    OFFSET: 4,
    DOLLY: 8,
    ZOOM: 16,
    TOUCH_ROTATE: 32,
    TOUCH_TRUCK: 64,
    TOUCH_OFFSET: 128,
    TOUCH_DOLLY: 256,
    TOUCH_ZOOM: 512,
    TOUCH_DOLLY_TRUCK: 1024,
    TOUCH_DOLLY_OFFSET: 2048,
    TOUCH_DOLLY_ROTATE: 4096,
    TOUCH_ZOOM_TRUCK: 8192,
    TOUCH_ZOOM_OFFSET: 16384,
    TOUCH_ZOOM_ROTATE: 32768
  }


  useEffect(() => {
    if(active) {
     const targetPosition = new THREE.Vector3();
     scene.getObjectByName(active).getWorldPosition(targetPosition)
     controlsRef.current.setLookAt(
       0,
       0,
       7,
       targetPosition.x,
       targetPosition.y,
       targetPosition.z,
       true
     );
    }
    else {
     controlsRef.current.setLookAt(0, 0, 10, 0, 0, 0, true);
   }
   }, [active]);


  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  

  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing");
    }, 600);
  }, [section]);

  const characterGroup = useRef();

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    if (section === 0) {
      characterContainerAboutRef.current.getWorldPosition(
        characterGroup.current.position
      );
    }
 
  });

  return (
    <>
      <Background />
      <motion.group
        ref={characterGroup}
        rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: officeScaleRatio,
            scaleY: officeScaleRatio,
            scaleZ: officeScaleRatio,
          },
          1: {
            y: -viewport.height + 0.5,
            x: isMobile ? 0.3 : 0,
            z: 7,
            rotateX: 0,
            rotateY: isMobile ? -Math.PI / 2 : 0,
            rotateZ: 0,
            scaleX: isMobile ? 1.5 : 1,
            scaleY: isMobile ? 1.5 : 1,
            scaleZ: isMobile ? 1.5 : 1,
          },
          2: {
            x: isMobile ? -1.4 : -2,
            y: -viewport.height * 2 + 0.5,
            z: 0,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          },
          3: {
            y: -viewport.height * 3 + 1,
            x: 0.24,
            z: 8.5,
            rotateX: 0,
            rotateY: -Math.PI / 4,
            rotateZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          },
        }}
      >
        {/* <Avatar animation={characterAnimation} wireframe={section === 1} /> */}
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={[
          isMobile ? 0 : 1.5 * officeScaleRatio,
          isMobile ? -viewport.height / 6 : 2,
          3,
        ]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        // rotation-y={-Math.PI / 8}
        animate={{
          y: isMobile ? -viewport.height / 6 : 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <mesh>
        <CameraControls
        ref={controlsRef}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
        mouseButtons={{ left: ACTION.ROTATE, middle: ACTION.NONE, right: ACTION.NONE, wheel: ACTION.NONE }}
        touches={{ one: ACTION.TOUCH_ROTATE, two: ACTION.NONE, three: ACTION.NONE }}
       
      />
        {/* <ambientLight intensity={0.5} /> */}
        {/* <Environment preset="sunset" /> */}

        <Scene 
          position-y={1.1}
          name={"Summer"}
          active={active}
          setActive={setActive}
          // bg="#d1d1ca"
        >
          <Duck  position={[0, -0.2, 1.5]}
          rotation={[0.18, 0, 0]}/>
        </Scene>
        <Scene
          position-y={-1.2}
          name={"Winter"}
          active={active}
          setActive={setActive}
          // bg="#e4cdac"
        >
          <Kitchen  
          scale={1.3}
          position={[0, -1, -3]}
          rotation={[0,-1,0]}/>
        </Scene>
        </mesh>
        
      
        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          position={[0.07, 0.16, -0.57]}
          rotation={[-Math.PI, 0.42, -Math.PI]}
        ></group>
      </motion.group>

      {/* SKILLS */}
      <motion.group
        position={[
          0,
          isMobile ? -viewport.height : -1.5 * officeScaleRatio,
          -10,
        ]}
        animate={{
          z: section === 1 ? 0 : -10,
          y:
            section === 1
              ? -viewport.height
              : isMobile
              ? -viewport.height
              : -1.5 * officeScaleRatio,
        }}
      >
        <directionalLight position={[-3, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[-1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"orange"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[-5, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.6}
              speed={5}
              color="orange"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-9, -1, -11]}>
          <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.5}
              factor={1}
              speed={5}
              color={"orange"}
            />
          </mesh>
        </Float>
      </motion.group>
      {/* <Projects /> */}
    </>
  );
};


const Scene = ({children, name, active, bg, setActive,  ...props}) => {
  const portal = useRef()

  useFrame((_state, delta) => {
    const worldOpen = active === name;
    easing.damp(portal.current, 'blend', worldOpen ? 1 : 0, 0.2, delta)})
  return (
  <group {...props}>
    <Text 
      // font="fonts/Roboto-Black.ttf"
      fontSize={0.4}
      position={[0, -0.2, 0.051]}
      anchorY={"bottom"}
    >
      {name}
    </Text>
     <mesh name={name} onDoubleClick={() => setActive(active === name ? null : name)}>
          <roundedPlaneGeometry args={[5, 2, 0.1]}/>
          <MeshPortalMaterial ref={portal}>
          <color attach="background" args={[bg]} />
          {children}
          </MeshPortalMaterial>
        </mesh>
  </group>)

}
