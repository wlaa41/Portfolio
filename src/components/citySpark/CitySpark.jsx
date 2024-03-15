import citySparkimage from './info/citySpark-price-5000-will-jamous.png';
import './CitySpark.scss'


const CitySpark = () => {
  return (
    <div className="citySpark_stripe">
        <h2 className='citySpark_stripe_h2'>CitySpark</h2>
        <h3 className='citySpark_stripe_h3'>First prize at City Spark for London's AI VR math education startup</h3>
        <div className="citySpark_container">

      <div className="citySpark_title-container">

      </div>
      <div className="citySpark_image-container">
      <img src={citySparkimage} className='g' alt="CitySpark" />

      </div>
      </div>
      <p className='citySpark_para'>
      In a competitive landscape, this project secured first place in the "Maker" category at the LondonVenture competition, showcasing a unique blend of robotics, VR, and a math simulator integrated into an interactive website. Designed to revolutionize math education, it uses advanced technologies to turn abstract concepts into hands-on learning experiences. The project distinguished itself among a field of strong contenders by demonstrating a practical, innovative approach to education, underscoring the potential of technology to enhance learning. This victory in London underscores the project's impact and the effectiveness of combining education with cutting-edge technology.
      </p>
    </div>
  );
};

export default CitySpark;
