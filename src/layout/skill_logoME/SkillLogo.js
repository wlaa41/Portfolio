import React from 'react'
import './Skill_logo.scss'
import  { ReactComponent as Me } from './me.svg'

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
         {/* <Me className='SkillLogo__meSVG'></Me> */}
        <div className='skill_logoStrip' >
            <div className='skill_logoStrip__left skill_logoStrip__left-right'>
         <Me className='SkillLogo__meSVG'></Me>

            </div>
            <div className='skill_logoStrip-skewed SL_SK' >
                <div className='SL_SK_Move-1'>
                    <div className='SL_SK_Move-1Flex-1' >
                            {images.map((elem,i)=>{
                                return <div key={`imgCon1${i}`} info={`${keys[i]}`}  className='SL_IMGcontainer'>
                                <img key={`img1st${keys[i]}`}  src={elem.default} alt={`${keys[i]}`}
                                 className='SL_IMGcontainer_img' />

                                </div>
                            })}
                    </div>
                    <div className='SL_SK_Move-1Flex-2' >
                            {images.map((elem,i)=>{
                                return <div key={`imgCon11${i}`} info={`${keys[i]}`}  className='SL_IMGcontainer'>
                                <img key={`img1st1${keys[i]}`}  src={elem.default} alt={`${keys[i]}`}
                                 className='SL_IMGcontainer_img' />

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
           <div className='skill_logoStrip__right skill_logoStrip__left-right'></div>
           
        </div>
        </>
    )
}

export default SkillLogo
