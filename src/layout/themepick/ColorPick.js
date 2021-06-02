import React from 'react'
import './ColorPick.scss'

const ColorPick = () => {

    function colorChange({target}){
        console.log('chose color', target)
        document.documentElement.style.setProperty('--skl-bg-color', `#${target.getAttribute('name')}`);


    }
    return (
       
        
        <div className='skl_COLOR_CON'>
        <div onClick={colorChange}  id="redbox" className='btn btn-red' name="eca9bf" />
        <div  onClick={colorChange}  id="ygreenbox"   className='btn btn-ygreen' name="bed38c" />
        <div onClick={colorChange}  id="ygreenbox"   className='btn btn-bluish' name="87a5c0" />
        
        {/* <label htmlFor='purplebox' className='skl_COLOR_CON_PURPLE'>

        <input type="radio" id="male" name="colorpicker" value="male"/>
        </label>
        <label htmlFor='bluebox' className='skl_COLOR_CON_BLUE'>

        <input type="radio" id="male" name="colorpicker" value="male"/>
        </label>

        <label htmlFor='ygreenbox' className='skl_COLOR_CON_YGREEN'>

        <input type="radio" id="male" name="colorpicker" value="male"/>
        </label> */}


        </div>
        
    )
}

export default ColorPick
