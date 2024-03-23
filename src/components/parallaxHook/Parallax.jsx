import React, { useEffect, useState } from 'react';

const Parallax = ({ children, speed ,...rest }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    window.requestAnimationFrame(() => {
      setOffsetY(window.pageYOffset);
    });
  }

  useEffect(() => {
    const throttleScroll = (event) => {
      handleScroll();
    };

    window.addEventListener('scroll', throttleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', throttleScroll);
  }, []);

  return (
    <div  {...rest} style={{ transform: `translateY(${offsetY * speed}px)` }}>
      {children}
    </div>
  );
};
export default Parallax;
