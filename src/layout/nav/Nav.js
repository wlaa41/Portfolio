import React from 'react'
import './Nav.scss'
import {ReactComponent as TalkIcon} from './chat_black_24dp.svg'

const Nav = ({talkbtn ,title })=>{


        return(
            <nav className='nav' >
                <div className='navGrid'> 
                        <div ref={title} className='navGrid_titleCon '> 
                                <div  className='navGrid_titleCon_title'> 
                                        Hello There click on my head to get another prverb
                                </div>
                        </div>
                                <div ref={talkbtn} className=' navGrid_BtnCon'> 
                                        <button className='navGrid_BtnCon_button navGrid_BtnCon_button-1 '>Give an offer</button>
                                        <button className='navGrid_BtnCon_button navGrid_BtnCon_button-2'>Let's Talk
                                        <TalkIcon></TalkIcon>
                                        </button>
                                </div>
                </div>

                Navigation bar
            </nav>
        );
    

}
export default Nav;