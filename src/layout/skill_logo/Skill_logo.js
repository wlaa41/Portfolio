import React from 'react'
import './Skill_logo.scss'

const Skill_logo = () => {

       
    function importAll(r) {
        console.log('%cthis is the r ','color: red')
        r.keys().map((elem)=>{
           keys.push(elem.slice(2).split('.')[0])
        })
        return r.keys().map(r);
      }
      const keys =[] // holds the name of the images
      const images = importAll(require.context('./img/', false, /\.(png|jpe?g|svg)$/));
    //   in case you want to have two moving strip
    //   const halfLength = Math.round(images.length/2);


    return (
        <div className='skill_logoStrip' >
            <div className='skill_logoStrip-skewed SL_SK' >


                <div className='SL_SK_Move-1'>

                    <div className='SL_SK_Move-1Flex-1' >
                            {images.map((elem,i)=>{
                                return <div key={`imgCon1${i}`} info={`${keys[i]}`}  className='SL_IMGcontainer'>
                                <img key={`img1st${keys[i]}`}  src={elem.default} className='SL_IMGcontainer_img' />

                                </div>
                            })}
                    </div>
                    <div className='SL_SK_Move-1Flex-2' >
                            {images.map((elem,i)=>{
                                return <div key={`imgCon11${i}`} info={`${keys[i]}`}  className='SL_IMGcontainer'>
                                <img key={`img1st1${keys[i]}`}  src={elem.default} className='SL_IMGcontainer_img' />

                                </div>
                            })}
                    </div>
               
                </div>


                {/* <div className='SL_SK_Move-2'>

                        <div className='SL_SK_Move-2Flex-1'>
                                {images.slice(halfLength).map((elem,i)=>{
                                    
                                    return <div key={`imgConsec${i}`} info={`${keys[i+halfLength]}`}  className='SL_IMGcontainer'>
                                    <img key={`imgsec${i}`} src={elem.default}  className='SL_IMGcontainer_img' />

                                    </div>
                                })}
                        </div>   
                        <div className='SL_SK_Move-2Flex-2'>
                        {images.slice(halfLength).map((elem,i)=>{
                            
                            return <div key={`imgConsec${i}`} info={`${keys[i+halfLength]}`}  className='SL_IMGcontainer'>
                            <img key={`imgsec${i}`} src={elem.default}  className='SL_IMGcontainer_img' />

                            </div>
                        })}
                </div>

                </div> */}

           </div>
            
        </div>
    )
}

export default Skill_logo
