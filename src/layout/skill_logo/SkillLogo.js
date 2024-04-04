import React from 'react'
import './Skill_logo.scss'

const SkillLogo = () => {

       
    function importAll(r) {
        // console.log('%cthis is the r ','color: red')
        r.keys().forEach((elem)=>{
           keys.push(elem.slice(2).split('.')[0])
        })
        return r.keys().map(r);
      }
      const keys =[] // HOLDS THE NAME OF THE IMAGE
      const images = importAll(require.context('./img/', false, /\.(png|jpe?g|svg)$/));


    return (
        <>


        <div className='skill_logoStrip' title='Some technologies I enjoy working with' >
            <div className='skill_logoStrip__LEFT skill_logoStrip__left-right'></div>
            <div id='skl-con' className='skill_logoStrip-skewed SL_SK' >
                <div className='SL_SK_Move-1'>
                    <div className='SL_SK_Move-1Flex-1' >
                            {images.map((elem,i)=>{
                                return <div key={`imgCon1${i}`} info={`${keys[i]}`}  className='SL_IMGcontainer'>
                                <img loading="lazy" key={`img1st${keys[i]}`}  src={elem.default} alt={`${keys[i]}`}
                                 className='SL_IMGcontainer_img' />

                                </div>
                            })}
                    </div>
                    <div className='SL_SK_Move-1Flex-2' >
                            {images.map((elem,i)=>{
                                return <div key={`imgCon11${i}`} info={`${keys[i]}`}  className='SL_IMGcontainer'>
                                <img loading="lazy" key={`img1st1${keys[i]}`}  src={elem.default} alt={`${keys[i]}`}
                                 className='SL_IMGcontainer_img' />

                                </div>
                            })}
                    </div>
               
                </div>




                {/* <div className='SL_SK_Move-2'>

                        <div className='SL_SK_Move-2Flex-1'>
                                {images.slice(halfLength).map((elem,i)=>{
                                    
                                    return <div key={`imgConsec${i}`} info={`${keys[i+halfLength]}`}  className='SL_IMGcontainer'>
                                    <img loading="lazy" key={`imgsec${i}`} src={elem.default}  className='SL_IMGcontainer_img' />

                                    </div>
                                })}
                        </div>   
                        <div className='SL_SK_Move-2Flex-2'>
                        {images.slice(halfLength).map((elem,i)=>{
                            
                            return <div key={`imgConsec${i}`} info={`${keys[i+halfLength]}`}  className='SL_IMGcontainer'>
                            <img loading="lazy" key={`imgsec${i}`} src={elem.default}  className='SL_IMGcontainer_img' />

                            </div>
                        })}
                </div>

                </div> */}

           </div>
           <div className='skill_logoStrip__RIGHT skill_logoStrip__left-right'></div>
                {/* <div style={{position:'absolute'}}> Hello  */}

                {/* there</div> */}
        </div>
                
        </>
    )
}

export default SkillLogo
