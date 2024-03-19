import React, { useEffect } from 'react'
import './ColorPick.scss'
const ColorPick = () => {

    function importAll(r) {
        // console.log('%cthis is the r ','color: red')
        r.keys().forEach((elem)=>{
           keys.push(elem.slice(2).split('.')[0])
        })
        return r.keys().map(r);
      }
      const keys =[] // HOLDS THE NAME OF THE IMAGE
      const images = importAll(require.context('../educationExperience/info/bg_img/', false, /\.(png|jpe?g|svg)$/));
      let i = 0;

    /// findme
      
      function BgToggle({target}){
          console.log('%cbg toggle','color: deeppink')
        if(target.getAttribute('name')==='bg'){
        if(keys[i].slice(0,3) === 'bg_'){
        const h = document.getElementById('Edu_info').offsetHeight 
        const w = document.getElementById('Edu_info').offsetWidth 
        // console.log(w,h)
        const w_adj = w*.4
        document.getElementById('Edu_info').style.backgroundPosition=`${w/2 -w_adj/2}px ${h/2 -w_adj/2.8}px `   ;
        document.getElementById('Edu_info').style.backgroundSize=`${w_adj}px auto`
        document.getElementById('Edu_info').style.backgroundRepeat=`no-repeat`
        }
        else{
            document.getElementById('Edu_info').style.backgroundPosition=`auto`   ;
            document.getElementById('Edu_info').style.backgroundSize=` auto`
            document.getElementById('Edu_info').style.backgroundRepeat=`repeat`
        }
        console.log(i)
        console.log(`%cbg ${images[i].default}}`,'color: deeppink')

        document.getElementById('Edu_info').style.backgroundImage=`url(${images[i].default})`
        if(images.length === i+1)i=0
        else i+=1}}

    function colorChange({target}){
        // console.log('chose color', target)
        document.documentElement.style.setProperty('--skl-bg-color', `#${target.getAttribute('name')}`);
        
  
    }

    useEffect(() => {
        const e ={target:{ getAttribute: (neme)=>'bg'}}
        BgToggle(e)
        return null
    }, [])
    return (
       
        
        <div onClick={BgToggle} name='bg' className='skl_COLOR_CON'>
        <div onClick={colorChange}  id="redbox" className='btn btn-red' name="eca9bf" />
        <div  onClick={colorChange}  id="ygreenbox"   className='btn btn-ygreen' name="bed38c" />
        <div onClick={colorChange}  id="ygreenbox"   className='btn btn-bluish' name="87a5c0" />


        </div>
        
    )
}

export default ColorPick
