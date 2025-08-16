// import React, { useState, useEffect, useRef } from 'react';
// import '../animation/Fadein.css'
// const FadeIn = ({ children }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const domRef = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       });
//     });

//     observer.observe(domRef.current);

//     return () => observer.unobserve(domRef.current);
//   }, []);

//   return (
//     <div ref={domRef} className={`fade-in ${isVisible ? 'active' : ''}`}>
//       {children}
//     </div>
//   );
// };

// export default FadeIn;

import React, { useState, useEffect, useRef } from 'react';
import './Fadein.css'; // Ensure the CSS file is correctly imported

const FadeIn = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null); // Initialize with null

  useEffect(() => {
    const currentRef = domRef.current; // Store current ref

    if (currentRef) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      });

      observer.observe(currentRef);

      return () => {
        observer.unobserve(currentRef);
      };
    }

    // No need for a return if domRef.current is null on the first render
  }, [domRef.current]); // Re-run effect when domRef.current changes

  return (
    <div ref={domRef} className={`fade-in ${isVisible ? 'active' : ''}`}>
      {children}
    </div>
  );
};

export default FadeIn;