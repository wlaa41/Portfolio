import React from 'react';
import './Arrow.scss';

const Arrow = () => {
  const scrollToTarget = () => {
    const targetElement = document.getElementById('targetAncher');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className='arrowCon arrowCon1'>
        <button className='arrow_blade arrow_blade-left' onClick={scrollToTarget} aria-label="Scroll to target left"></button>
        <button className='arrow_blade arrow_blade-right' onClick={scrollToTarget} aria-label="Scroll to target right"></button>
      </div>
      
      <div className='arrowCon arrowCon3'>
        <button className='arrow_blade arrow_blade-left' onClick={scrollToTarget} aria-label="Scroll to target left"></button>
        <button className='arrow_blade arrow_blade-right' onClick={scrollToTarget} aria-label="Scroll to target right"></button>
      </div>
    </>
  );
}

export default Arrow;
