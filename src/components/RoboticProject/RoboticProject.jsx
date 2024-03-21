import "./RoboticProject.scss";
import projectimage from './info/uniCampus3dgazebo.gif'
import React, { useState, useEffect, useRef } from 'react';
import "./RoboticProject.scss"; // Make sure your CSS is properly set up to see the effect

const RoboticProject = () => {
  const divRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (divRef.current) {
      const { width, height } = divRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }

    // This event listener helps in recalculating the angle when the window is resized
    const handleResize = () => {
      if (divRef.current) {
        const { width, height } = divRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Calculating the angle based on the div's dimensions
    // Here we aim for the top-right corner as an example
    const angleRadians = Math.atan(dimensions.width / dimensions.height);
    const angleDegrees = angleRadians * (180 / Math.PI);
    
    console.log(dimensions.height,' height')
    console.log(dimensions.width,' width')
    console.log(angleDegrees,' angleDegrees')
    setAngle(angleDegrees);
  }, [dimensions]);

  // var dynamicGradient = `conic-gradient(from ${angle }deg, blue, red)`;
   const dynamicGradient = `conic-gradient(at ${dimensions.width - dimensions.height/2 }px ${dimensions.height/2 }px,  #90aeb2, #80a5aa 12.5%, #48828b 12.5%, #cddada, #90aeb2 100%)`;

  return (
    <div className="robotic-stripe">
      <div className="main-container">
        <div className="gridLeftRight">
        <div ref={divRef} className="leftContainer" style={{ background: dynamicGradient }}>
            <div className="robotic">
              <div itemScope itemType="http://schema.org/VideoObject">
               
                <meta
                  itemProp="name"
                  content="Walaa Will Profile"
                />
                <meta
                  itemProp="description"
                  content="Elevate your brand with our visual content services, tailored for startups, mid-size, and large businesses. We provide top-tier photography and robotic production at competitive rates, ensuring your projects are delivered on time. Our approach combines state-of-the-art equipment, including full lens setups and professional stabilization, with a keen eye for the latest trends in visual storytelling. Whether you need a single robotic or an entire social media campaign, our expertise and over 80k robotic views testify to our ability to captivate your audience. Let us transform your visual content strategy."
                />
                <meta
                  itemProp="uploadDate"
                  content="2022-06-09T08:00:00+08:00"
                />
                <meta itemProp="duration" content="PT01M22S" />
                <img
                  itemProp="thumbnailUrl"
                  src={projectimage}
                  alt="Robotic Simualtion in Gazebo"
                  title="APPITUNITY thumbnail"
                />
              </div>
              
            </div>
          </div>
          <div className="rightContainer">
            <div className="text-desc">
              <h2 className="title">
              City, University of London, Campus
              </h2>
              <p className="desc">
              A Gazebo simulation project featuring the Jackal robot, utilizing SLAM for mapping and AMCL for localization within a custom Unicampus environment using ROS.              </p>
              <button id='GazeboButton'  className='navGrid_BtnCon_button navGrid_BtnCon_button-2' onClick= {()=>window.open('https://github.com/rutall-co/clearpath_university-campus','_blank')}
                                        >Want to see more
                                        </button>
                                       
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoboticProject;
