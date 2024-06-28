// // // import * as THREE from 'three';
// // // import { useRef, useState } from 'react';
// // // import { Canvas, useFrame } from '@react-three/fiber';
// // // import { Image, Environment, ScrollControls, useScroll, useTexture, Text, } from '@react-three/drei';
// // // import { easing } from 'maath';

// // // export const ProjectsCarousel = ({ projects }) => (
// // //   <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
// // //     <fog attach="fog" args={['#a79', 8.5, 12]} />
// // //     <ScrollControls pages={projects.length / 2} infinite>
// // //       <Rig rotation={[0, 0, 0.15]}>
// // //         <Carousel projects={projects} />
// // //       </Rig>
// // //       <Banner position={[0, -0.15, 0]} />
// // //     </ScrollControls>
// // //     <Environment preset="dawn" background blur={0.5} />
// // //   </Canvas>
// // // );

// // // const Rig = (props) => {
// // //   const ref = useRef();
// // //   const scroll = useScroll();
// // //   useFrame((state, delta) => {
// // //     ref.current.rotation.y = -scroll.offset * (Math.PI * 2); // Rotate contents
// // //     state.events.update(); // Raycasts every frame rather than on pointer-move
// // //     easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta); // Move camera
// // //     state.camera.lookAt(0, 0, 0); // Look at center
// // //   });
// // //   return <group ref={ref} {...props} />;
// // // }

// // // const Carousel = ({ projects, radius = 1.4 }) => {
// // //   return projects.map((project, i) => (
// // //     <Card
// // //       key={i}
// // //       url={project.imageUrl}
// // //       position={[Math.sin((i / projects.length) * Math.PI * 2) * radius, 0, Math.cos((i / projects.length) * Math.PI * 2) * radius]}
// // //       rotation={[0, Math.PI + (i / projects.length) * Math.PI * 2, 0]}
// // //       title={project.name}
// // //       date={project.date}
// // //     />
// // //   ));
// // // }

// // // const Card = ({ url, title, date, ...props }) => {
// // //   const ref = useRef();
// // //   const [hovered, setHovered] = useState(false);
// // //   const pointerOver = (e) => {
// // //     e.stopPropagation();
// // //     setHovered(true);
// // //   }
// // //   const pointerOut = () => setHovered(false);
// // //   useFrame((state, delta) => {
// // //     easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
// // //     easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta);
// // //     easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta);
// // //   });

// // //   return (
// // //     <group ref={ref} {...props}>
// // //       <Image
// // //         url={url}
// // //         transparent
// // //         side={THREE.DoubleSide}
// // //         onPointerOver={pointerOver}
// // //         onPointerOut={pointerOut}
// // //       >
// // //         <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
// // //       </Image>
// // //       <Text
// // //         position={[0, -1.2, 0]}
// // //         fontSize={0.1}
// // //         color="black"
// // //         anchorX="center"
// // //         anchorY="middle"
// // //       >
// // //         {title}
// // //       </Text>
// // //       <Text
// // //         position={[0, -1.3, 0]}
// // //         fontSize={0.05}
// // //         color="gray"
// // //         anchorX="center"
// // //         anchorY="middle"
// // //       >
// // //         {date}
// // //       </Text>
// // //     </group>
// // //   );
// // // }

// // // const Banner = (props) => {
// // //   const ref = useRef();
// // //   const texture = useTexture('../assets/PNG/asset1.png');
// // //   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
// // //   const scroll = useScroll();
// // //   useFrame((state, delta) => {
// // //     ref.current.material.time.value += Math.abs(scroll.delta) * 4;
// // //     ref.current.material.map.offset.x += delta / 2;
// // //   });

// // //   return (
// // //     <mesh ref={ref} {...props}>
// // //       <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
// // //       <meshSineMaterial map={texture} map-anisotropy={16} map-repeat={[30, 1]} side={THREE.DoubleSide} toneMapped={false} />
// // //     </mesh>
// // //   );
// // // }

// // import * as THREE from 'three';
// // import { useRef } from 'react';
// // import { Canvas, useFrame } from '@react-three/fiber';
// // import { Environment, ScrollControls, useScroll, Text } from '@react-three/drei';
// // import { easing } from 'maath';

// // const ProjectsCarousel = ({ projects }) => (
// //   <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
// //     <fog attach="fog" args={['#a79', 8.5, 12]} />
// //     <ScrollControls pages={projects.length / 2} infinite>
// //       <Rig rotation={[0, 0, 0.15]}>
// //         <Carousel projects={projects} />
// //       </Rig>
// //       <Banner position={[0, -0.15, 0]} />
// //     </ScrollControls>
// //     <Environment preset="dawn" background blur={0.5} />
// //   </Canvas>
// // );

// // const Rig = (props) => {
// //   const ref = useRef();
// //   const scroll = useScroll();
// //   useFrame((state, delta) => {
// //     ref.current.rotation.y = -scroll.offset * (Math.PI * 2); // Rotate contents
// //     state.events.update(); // Update state
// //   });

// //   return <group ref={ref} {...props} />;
// // };

// // const Carousel = ({ projects }) => {
// //   // Add your carousel rendering logic here
// //   return (
// //     <group>
// //       {projects.map((project, index) => (
// //         <mesh key={index} position={[index * 2, 0, 0]}>
// //           {/* Replace BentPlaneGeometry with PlaneGeometry or a valid geometry */}
// //           <planeGeometry args={[1, 1]} />
// //           <meshBasicMaterial>
// //             <texture attach="map" url={project.imageUrl} />
// //           </meshBasicMaterial>
// //         </mesh>
// //       ))}
// //     </group>
// //   );
// // };

// // const Banner = (props) => {
// //   return (
// //     <group {...props}>
// //       <Text
// //         fontSize={1.2}
// //         color="#000"
// //         anchorX="center"
// //         anchorY="middle"
// //         position={[0, 0, 0]}
// //       >
// //         Project Carousel
// //       </Text>
// //     </group>
// //   );
// // };

// // export default ProjectsCarousel;


// import * as THREE from 'three';
// import { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Environment, ScrollControls, useScroll, Text } from '@react-three/drei';

// const ProjectsCarousel = ({ projects }) => (
//   <Canvas className='h-screen' camera={{ position: [0, 0, 100], fov: 15 }}>
//     <fog attach="fog" args={['#a79', 8.5, 12]} />
//     <ScrollControls pages={projects.length / 2} infinite>
//       <Rig rotation={[0, 0, 0.15]}>
//         <Carousel projects={projects} />
//       </Rig>
//       <Banner position={[0, -0.15, 0]} />
//     </ScrollControls>
//     <Environment preset="dawn" background blur={0.5} />
//   </Canvas>
// );

// const Rig = (props) => {
//   const ref = useRef();
//   const scroll = useScroll();
//   useFrame((state, delta) => {
//     ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
//     state.events.update();
//   });

//   return <group ref={ref} {...props} />;
// };

// const Carousel = ({ projects }) => (
//   <group>
//     {projects.map((project, index) => (
//       <mesh key={index} position={[index * 2, 0, 0]}>
//         <planeGeometry args={[1, 1]} />
//         <meshBasicMaterial>
//           <texture attach="map" url={project.imageUrl} />
//         </meshBasicMaterial>
//       </mesh>
//     ))}
//   </group>
// );

// const Banner = (props) => (
//   <group {...props}>
//     <Text
//       fontSize={1.2}
//       color="#000"
//       anchorX="center"
//       anchorY="middle"
//       position={[0, 0, 0]}
//     >
//       Project Carousel
//     </Text>
//   </group>
// );

// export default ProjectsCarousel;


import * as THREE from 'three';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ScrollControls, useScroll, Text } from '@react-three/drei';
import { easing } from 'maath';

const ProjectsCarousel = ({ projects }) => (
  <div className="canvas-container">
    <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
      <fog attach="fog" args={['#a79', 8.5, 12]} />
      <ScrollControls pages={projects.length / 2} infinite>
        <Rig rotation={[0, 0, 0.15]}>
          <Carousel projects={projects} />
        </Rig>
        <Banner position={[0, -0.15, 0]} />
      </ScrollControls>
      <Environment preset="dawn" background blur={0.5} />
    </Canvas>
  </div>
);

const Rig = (props) => {
  const ref = useRef();
  const scroll = useScroll();
  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
    state.events.update();
  });

  return <group ref={ref} {...props} />;
};

const Carousel = ({ projects }) => (
  <group>
    {projects.map((project, index) => (
      <mesh key={index} position={[index * 2, 0, 0]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial>
          <texture attach="map" url={project.imageUrl} />
        </meshBasicMaterial>
      </mesh>
    ))}
  </group>
);

const Banner = (props) => (
  <group {...props} className="text-banner">
    <Text
      fontSize={1.2}
      color="#000"
      anchorX="center"
      anchorY="middle"
      position={[0, 0, 0]}
    >
      Project Carousel
    </Text>
  </group>
);

export default ProjectsCarousel;
