// import React, { useEffect, useState } from 'react';
// import Draggable from 'react-draggable';

// // List of words to display on pills
// const words = ['Design', 'Development', 'Branding', 'SEO', 'Marketing', 'Content'];

// // Helper function to generate random positions and rotations
// const getRandomPosition = (maxWidth, maxHeight) => {
//   const x = Math.random() * maxWidth - maxWidth / 2;
//   const y = -(Math.random() * maxHeight); // Start above the viewport
//   const rotation = Math.random() * 360; // Random rotation
//   return { x, y, rotation };
// };

// const Pills = () => {
//   const [positions, setPositions] = useState([]);

//   useEffect(() => {
//     // Get the viewport dimensions
//     const maxWidth = window.innerWidth;
//     const maxHeight = window.innerHeight;

//     // Generate random initial positions and rotations for each pill
//     const initialPositions = words.map(() => getRandomPosition(maxWidth, maxHeight));
//     setPositions(initialPositions);
//   }, []);

//   return (
//     <div className="pills-container w-full h-full flex flex-wrap justify-center items-start relative">
//       {words.map((word, index) => (
//         <Draggable key={index}>
//           <div
//             className={`pill bg-white text-[#1f1f1f] px-4 py-2 m-2 rounded-full font-medium shadow-lg drop-animation`}
//             style={{
//               transform: `translate(${positions[index]?.x}px, ${positions[index]?.y}px) rotate(${positions[index]?.rotation}deg)`,
//               animationDelay: `${index * 0.2}s`, // Staggered animation
//             }}
//           >
//             {word}
//           </div>
//         </Draggable>
//       ))}
//     </div>
//   );
// };

// export default Pills;

import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

// List of words to display on pills
const words = ['Creative Gravity', 'Brand Mavericks', 'Digital Dreamscapes', 'Code Sorcery', 'Strategic Velocity', 'Pixel Wizards'];

// Helper function to generate random positions
const getRandomPosition = (maxWidth, maxHeight, existingPositions) => {
  const randomPosition = () => ({
    left: Math.random() * (maxWidth - 100) + 'px', // Ensuring some padding for visual space
    right: Math.random() * (maxWidth - 100) + 'px',
    bottom: Math.random() * (maxHeight - 50) + 'px',
    rotation: Math.random() * 360, // Random rotation
  });

  // Check for overlap and re-generate position if necessary
  const isOverlapping = (pos1, pos2) => {
    const buffer = 30; // Buffer space between pills
    const pos1Rect = {
      left: parseFloat(pos1.left),
      right: parseFloat(pos1.right),
      bottom: parseFloat(pos1.bottom),
    };
    const pos2Rect = {
      left: parseFloat(pos2.left),
      right: parseFloat(pos2.right),
      bottom: parseFloat(pos2.bottom),
    };
    return (
      Math.abs(pos1Rect.left - pos2Rect.left) < buffer &&
      Math.abs(pos1Rect.right - pos2Rect.right) < buffer &&
      Math.abs(pos1Rect.bottom - pos2Rect.bottom) < buffer
    );
  };

  let newPosition = randomPosition();
  while (existingPositions.some((pos) => isOverlapping(newPosition, pos))) {
    newPosition = randomPosition();
  }
  return newPosition;
};

const Pills = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const maxWidth = window.innerWidth -200;
    const maxHeight = window.innerHeight-200;

    const initialPositions = words.map(() => getRandomPosition(maxWidth, maxHeight, positions));
    setPositions(initialPositions);
  }, []);

  return (
    <div className="pills-container w-full h-full flex flex-wrap justify-center items-start relative">
      {words.map((word, index) => (
        <Draggable key={index}>
          <div
            className={`pill bg-[#1f1f1f] border-black border-2 text-white px-4 py-2 m-2 rounded-full font-medium shadow-xl drop-animation`}
            style={{
              position: 'absolute',
              ...positions[index],
              transform: `rotate(${positions[index]?.rotation}deg)`,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            {word}
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default Pills;
