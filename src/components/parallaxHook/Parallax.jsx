import React, { useEffect, useState } from 'react';

const Parallax = ({ children, speed, ...rest }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [lastPosition, setLastPosition] = useState(-1);

  const updatePosition = () => {
    const newPosition = window.pageYOffset;
    setOffsetY(newPosition);
    setLastPosition(newPosition);
  };

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;

    // On less powerful devices, we may want to reduce the frequency of updates
    // This is a simplistic way to achieve that, by skipping updates if the scroll hasn't changed much
    // You can adjust the '5' based on testing and what feels smooth yet performant
    if (Math.abs(lastPosition - currentPosition) > 5) {
      window.requestAnimationFrame(updatePosition);
    }
  };

  useEffect(() => {
    // Optionally, detect device capabilities here to decide how aggressively to throttle
    // For simplicity, this example uses a constant value for the demonstration

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastPosition]); // Update the effect if lastPosition changes

  return (
    <div {...rest} style={{ 
      transform: `translateY(${offsetY * speed}px)`,
      willChange: 'transform'
    }}>
      {children}
    </div>
  );
};

export default Parallax;
