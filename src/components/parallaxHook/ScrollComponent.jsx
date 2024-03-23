const ScrollComponent = () => {
    const handleScroll = useThrottle(() => {
      if (window.scrollY > 500) { // Your threshold
        console.log("Threshold passed!");
      }
    }, 500); // Fire every 500 milliseconds
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
  
    return (
      <div>
        {/* Your component content */}
      </div>
    );
  };

  