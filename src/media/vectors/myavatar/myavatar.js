// gathering all london imges in one constant
import   eyes        from "./eyes.svg"   
import   body        from "./body.svg"   
import   eyelash    from "./eyelash.svg"   
const london_images = [
    eyes       ,
    body       ,
    eyelash  

]

const london_attr = [
    // ,  src="./src/sky.svg"
       { key:'eyes    '  ,  className:"myAvatar-eyes-svg     myAvatar_svg"   ,   alt:'pic of my Avatar' },
       { key:'body    '  ,  className:"myAvatar-body-svg     myAvatar_svg"   ,   alt:'pic of my Avatar' },
       { key:'eyelash '  ,  className:"myAvatar-eyelash-svg  myAvatar_svg"   ,   alt:'pic of my Avatar' }
    ];


// reading the images then saving them in one var where image and attr are saved
const myavatar_vec =()=>{
    const arr = []
    london_images.map((element,index)=> {
        arr.push( {"img": element , "attr": london_attr[index]})
        // console.log(arr[0]['img'])
    })
    return arr;
}
export  default myavatar_vec;
