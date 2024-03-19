import   skyline3    from "./skyline3.svg"   
import   skyline2    from "./skyline2.svg"   
import   skyline1    from "./skyline1.svg"   
import   skyline0    from "./skyline0.svg"   
import   floor       from "./floor.svg"      
import   phonebooth  from "./phonebooth.svg" 
import   myBase  from "./myBase.svg" 

const london_images = [
    skyline3   ,
    skyline2   ,
    skyline1   ,
    skyline0   ,
    floor      ,
    phonebooth ,
    myBase
]

const london_attr = [
    // ,  src="./src/sky.svg"
       { key:'skyline3'  ,  className:"london-skyline3-svg londonfull__svg"   ,   alt:'pic of skyline3' },
          { key:'skyline2'  ,  className:"london-skyline2-svg londonfull__svg"   ,   alt:'pic of skyline2' },
       { key:'skyline1'  ,  className:"london-skyline1-svg londonfull__svg"   ,   alt:'pic of skyline1' },
       { key:'skyline0'  ,  className:"london-skyline0-svg londonfull__svg"   ,   alt:'pic of skyline0' },
       { key:'floor'     ,  className:"london-floor-svg londonfull__svg"      ,   alt:'pic of floor' },
       { key:'phonebooth',  className:"london-phonebooth-svg londonfull__svg" ,   alt:'pic of phonebooth' },
       { key:'myBase'    ,  className:"london-myBase-svg londonfull__svg"     ,   alt:'pic of myBase' }
    ];


// reading the images then saving them in one var where image and attr are saved
const london_vec =()=>{
    const arr = []
    london_images.forEach((element,index)=> {
        arr.push( {"img": element , "attr": london_attr[index]})
        // console.log(arr[0]['img'])
    })
    return arr;
}


export  default london_vec;
export { london_attr,london_images}


// src:"./skyline3.svg"   ,
// src:"./skyline2.svg"   ,
// src:"./skyline1.svg"   ,
// src:"./skyline0.svg"   ,
// src:"./floor.svg"      ,
// src:"./phonebooth.svg" ,