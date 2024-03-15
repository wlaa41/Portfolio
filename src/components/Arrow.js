import React  from 'react'
import './Arrow.scss'


export default function Arrow(){
    // console.log({style})
    const scrollToTarget = () => {
        console.log('scrollto')
        const targetElement = document.getElementById('targetAncher');
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      };
    return <>

    <div className='arrowCon arrowCon1'>
        <a  className='arrow_blade arrow_blade-left' onClick={scrollToTarget}></a>
        <a  className='arrow_blade arrow_blade-right' onClick={scrollToTarget}> </a> 
    </div> 
    {/* <div className='arrowCon arrowCon2'>
    <   div className='arrow_blade arrow_blade-left'></div>
        <div className='arrow_blade arrow_blade-right'> </div> 
    </div>  */}
    <div className='arrowCon arrowCon3'>
        <a  className='arrow_blade arrow_blade-left' onClick={scrollToTarget}></a>
        <a  className='arrow_blade arrow_blade-right' onClick={scrollToTarget}> </a> 
    </div> 
    
</>
}