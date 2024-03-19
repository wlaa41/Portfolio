import React, {useState,useRef,useLayoutEffect} from 'react'
import  myavatar_vec  from './media/myavatar/myavatar'
import Nav from '../../layout/nav/Nav'
import { ReactComponent as Wheel} from './media/londonfull/wheel1.svg'
import   skyline3    from "./media/londonfull_wide/skyline3.svg"   
import   skyline2    from "./media/londonfull_wide/skyline2.svg"   
import   skyline1    from "./media/londonfull_wide/skyline1.svg"   
import   skyline0    from "./media/londonfull_wide/skyline0.1.svg"   
import   floor       from "./media/londonfull_wide/floor.svg"      
import   bushes       from "./media/londonfull_wide/bushes.svg"      
import   phonebooth  from "./media/londonfull_wide/phonebooth.svg" 
import   myBase      from './media/londonfull_wide/myBase.svg'
import './Mainintro.scss'
import './myAvatar.scss'
import Arrow from '../arrow/Arrow'


const myAvatar_img_attr =myavatar_vec();

function Mainintro(){
    
    // const talkbtnConRef = useRef({classList:[]})//LET'S TALK BUTTON ADDING CLASS TO MAKE IT CHANGE CONTENT
    const talkbtnConRef = useRef(null)//LET'S TALK BUTTON ADDING CLASS TO MAKE IT CHANGE CONTENT
    const titleRef = useRef(null)
    // const tlkbtnRef = useRef(null)
    let LONDON_scrollStopThreshold = 800;
    let Title_btn_scrollStopThreshold = 200;

    let btnCon_Width = 200;
    let btnCon_Height = 100;
    let classdded=false;
    // this state to move the button of let's talk from the top to corner
    const btn_Translate = [0,0,0]

    const [YShift, setYShift] = useState({
        skyline3:       0         ,
        skyline2:       0         ,
        skyline1:       0         ,
        skyline0:       0         ,
        bushes:         0         ,
        floor:          0         ,
        phonebooth:     0         ,
        myBase:         0                   
    })

    // THESE VARIABLE ARE TO WAIT FOR FOR THE RESIZE FUNCTIONN TO WAIT 
    // UNTIL THE RESIZI IS FINISHED
    var rtime;
    var timeout = false;
    var delta = 200;

    const openBreif =()=>{document.getElementById('Brief').classList.add('Brief-show')
    document.getElementById('brief_parag').focus()
    document.body.style.overflow = 'hidden';
}


    useLayoutEffect(() => {
        scrollHeandle()
        window.addEventListener('resize', ()=>{requestAnimationFrame( ()=> {
            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(handleResize, delta);
            }
        })})

        if(!talkbtnConRef.current) talkbtnConRef.current = document.getElementById('talkbtnCon')
        titleRef.current = titleRef.current ||   document.getElementById('mainTitle')
        // we calculate the movement of the Let's talk button bellow
        implementResizeAction()

        console.log('Starting')

        return () => {
            window.removeEventListener('scroll',scrollHeandle)
            console.log('terminating')
        }
    }, [])

    function handleResize(){
        if (new Date() - rtime < delta) {
            setTimeout(handleResize, delta);
        } else {
            timeout = false;
            implementResizeAction() 
        }}
    
    let CSS_moveBTN=''

    function implementResizeAction() {

        console.log('%cresiezing action has been %ctaken','color: red; font-weight:bold;font-size:22px;','color :green')
        LONDON_scrollStopThreshold = Math.round(window.innerHeight/1.5); 
        Title_btn_scrollStopThreshold  = Math.round(LONDON_scrollStopThreshold/4)
        btnCon_Width = talkbtnConRef.current?.offsetWidth ? (talkbtnConRef.current.offsetWidth - 64) :  btnCon_Width
        btnCon_Height = talkbtnConRef.current?.offsetHeight ? (talkbtnConRef.current.offsetHeight - 76) : btnCon_Height
        const shift=window.scrollY
        console.log(classdded,shift,Title_btn_scrollStopThreshold )
        if(shift>=Title_btn_scrollStopThreshold && classdded){
            console.log('MOVEEE')
            document.getElementById('tlkbtn').style=`transform: translate3d(${btnCon_Width}px,${btnCon_Height}px,0);`
        }}

    
function scrollHeandle(e){   
        requestAnimationFrame(  scrollHeandle)     
        const shift=window.scrollY;
        if(shift<LONDON_scrollStopThreshold){      // window.scrollY/window.innerHeight when resizing the window height it is better to estimate the difference
            setYShift({
            skyline3:   (  shift  / 1.5   )      ,
            skyline2:   (  shift  / 1.6   )      ,
            skyline1:   (  shift  / 1.8   )      ,
            skyline0:   (  shift  / 2.1   )      ,
            bushes:     (  shift  / 2.6   )      ,
            floor:      (  shift  / 3     )      ,
            phonebooth: (  shift  / 3     )      ,
            myBase:     (  shift  / 4     )      })
            shift<Title_btn_scrollStopThreshold ? chekclass_REMOVE() : chekclass_ADD()
        }else{
            // the if below is for the Nav which include vanish text by adding foggyVanish class
            // and changing the button shape by adding navGrid_BtnCon-sp1 class
            // also moving the button by changing the setBtn_Translate state 
            chekclass_ADD()}}

function chekclass_ADD(){ // IS DOWN 
    if(!classdded) {talkbtnConRef?.current?.classList?.add("navGrid_BtnCon-sp1");
    document.getElementById('tlkbtn').style=`transform: translate3d(${btnCon_Width}px,${btnCon_Height}px,0);`
    titleRef?.current?.classList?.add("foggyVanish");
    classdded=true}
}
function chekclass_REMOVE(){
    if(classdded) {  // IS UP 
        talkbtnConRef?.current?.classList?.remove("navGrid_BtnCon-sp1");
        document.getElementById('tlkbtn').style=`transform: translate3d(0,0,0);`
        titleRef?.current?.classList?.remove("foggyVanish");
        classdded=false}
}
        return(
            <>
                
                <Nav talkbtnCon={talkbtnConRef} title={titleRef} translate={btn_Translate}></Nav>
            <section className='Mi_container'>
                <div className='londonfull'>
                    <div className="londonfull__imgcontainer">
                        <img src={skyline3} alt="London Skyline Far Background" className='londonfull__svg' style={{ transform: `translate3d(0,${YShift["skyline3"]}px,0)` }} />
                        <img src={skyline2} alt="London Skyline Middle Background" className='londonfull__svg' style={{ transform: `translate3d(0,${YShift["skyline2"]}px,0)` }} />
                        <img src={skyline1} alt="London Skyline Near Background" className='londonfull__svg' style={{ transform: `translate3d(0,${YShift["skyline1"]}px,0)` }} />
                        {/* Assuming Wheel is an image or component visually representing the London Eye or similar landmark */}
                        <Wheel alt="London Eye Representation" className='londonfull__svg' style={{ transform: `translate3d(0,${YShift["skyline1"]}px,0)` }}></Wheel>
                        <img src={skyline0} alt="Foreground of London Skyline" className='londonfull__svg' style={{ transform: `translate3d(0,${YShift["skyline0"]}px,0)` }} />
                        <img src={bushes} alt="Decorative Bushes in Foreground" className='londonfull__svg' style={{ transform: `translate3d(0,${YShift["bushes"]}px,0)` }} />
                        <img src={floor} alt="Foreground Ground Texture" className='londonfull__svg' style={{ transform: `translate3d(0,${YShift["floor"]}px,0)` }} />
                        <img src={phonebooth} alt="Iconic Red Phone Booth" className='londonfull__svg' style={{ transform: `translate3d(0,${YShift["phonebooth"]}px,0)` }} />
                        <img src={myBase} alt="Base Layer for Parallax Effect" className='londonfull__svg' style={{ transform: `translate3d(0,${YShift["myBase"]}px,0)` }} />
                        <div className='night'></div>
                        <div className='myAvatarStrip'>    
                            <div className='myAvatarStrip_spacer-right'></div>
                            <div className='myAvatarStrip_Ava'>
                                <div className='vertical_spacer'></div>
                                <div onClick={openBreif} className='myAvatarContainer' style={{ transform: `translate3d(0,${YShift["myBase"]}px,0)` }}>
                                    {myAvatar_img_attr.map((element) => {
                                        // Assuming you'll provide a descriptive name for each attribute in your avatar elements
                                        return <img src={element["img"]} alt={`Avatar detail: ${element['attr'].altDescription}`} key={element['attr'].key} {...element['attr']} />;
                                    })}
                                </div>
                            </div>
                            <div id='targetAncher' className='myAvatarStrip_spacer-left'></div>
                        </div>
                    </div>
                </div>
            </section>
            <Arrow></Arrow>
        </>
        );


    

}
export default Mainintro;

