
import  {ReactComponent as  Skyline3    }   from "./skyline3.svg"   
import  {ReactComponent as  Skyline2    }   from "./skyline2.svg"   
import  {ReactComponent as  Skyline1    }   from "./skyline1.svg"   
import  {ReactComponent as  Skyline0    }   from "./skyline0.svg"   
import  {ReactComponent as  Floor       }   from "./floor.svg"      
import  {ReactComponent as  Phonebooth  }   from "./phonebooth.svg" 
import  {ReactComponent as  MyBase      }   from "./myBase.svg" 
import React,{useRef,useLayoutEffect} from 'react'


const SVGs = () => {
    const YShift = useRef({
        skyline3:       1.2        ,
        skyline2:       1.3        ,
        skyline1:       1.6        ,
        skyline0:       1.9        ,
        floor:          3.5        ,
        phonebooth:     3.5                  
    })
    const Shift_factor =[
           1.2        ,
           1.3        ,
           1.6        ,
           1.9        ,
           3.5        ,
           3.5                  
    ]

    const refs = useRef([
        React.createRef(), React.createRef(), React.createRef(),
        React.createRef(), React.createRef(), React.createRef()]);

    // ref={(el) => (myRefs.current[i] = el)}

// const Ref_skyline3     = useRef( null)
// const Ref_skyline2     = useRef( null)
// const Ref_skyline1     = useRef( null)
// const Ref_skyline0     = useRef( null)
// const Ref_floor        = useRef( null)
// const Ref_phonebooth   = useRef( null)
// const Ref_myBase       = useRef( null)

const london_images = [
    Skyline3   ,
    Skyline2   ,
    Skyline1   ,
    Skyline0   ,
    Floor      ,
    Phonebooth ,
    MyBase
]
const attr = [
    // ,  src="./src/sky.svg"
        { key:'skyline3'  ,  className:"london-skyline3-svg londonfull__svg"   ,   alt:'pic of skyline3' },
        { key:'skyline2'  ,  className:"london-skyline2-svg londonfull__svg"   ,   alt:'pic of skyline2' },
        { key:'skyline1'  ,  className:"london-skyline1-svg londonfull__svg"   ,   alt:'pic of skyline1' },
        { key:'skyline0'  ,  className:"london-skyline0-svg londonfull__svg"   ,   alt:'pic of skyline0' },
        { key:'floor'     ,  className:"london-floor-svg londonfull__svg"      ,   alt:'pic of floor' },
        { key:'phonebooth',  className:"london-phonebooth-svg londonfull__svg" ,   alt:'pic of phonebooth' },
        { key:'myBase'    ,  className:"london-myBase-svg londonfull__svg"     ,   alt:'pic of myBase' }
    ];

useLayoutEffect(() => {
    window.addEventListener('scroll',scrollHeandle)
    console.log('Starting')

    return () => {
        window.removeEventListener('scroll',scrollHeandle)
        console.log('terminating')
    }
}, [])

function scrollHeandle(e)
{

    const shift=window.scrollY.toFixed(1);
    if(shift<466){  
        refs.current.forEach((ele,i)=>{
            // console.log( "translate3d(0,"+ (shift/Shift_factor[i]).toFixed(1) +"px, 0)")
            console.log(refs.current)
            // ele.style.transform = "translate3d(0,"+ (shift/Shift_factor[i]).toFixed(1) +"px, 0)";
             ele.style.transform = "translateY("+ (shift/Shift_factor[i]).toFixed(1) +"px)";
        })
    
    }
}



return (
    <>
            { london_images.map((Elem,i)=>  {
                    return  <Elem alt={attr[i].key} ref={refs.current[i]}
                        {...attr[i]} />
                }
            )}
    </>
)
}

export default SVGs
// export  default london_vec;
// export { london_attr,london_images}


// src:"./skyline3.svg"   ,
// src:"./skyline2.svg"   ,
// src:"./skyline1.svg"   ,
// src:"./skyline0.svg"   ,
// src:"./floor.svg"      ,
// src:"./phonebooth.svg" ,