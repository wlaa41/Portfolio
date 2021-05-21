import React from 'react'
import './Nav.scss'
import {ReactComponent as TalkIcon} from './chat_black_24dp.svg'

const Nav = ({opacity})=>{


        return(
            <nav className='nav' >
                <div className='navGrid'> 
                        <div className='navGrid_titleCon'> 
                                <div className='navGrid_titleCon_title'> 
                                        Hello There click on my head to get another prverb
                                </div>
                        </div>
                                <div className=' navGrid_BtnCon navGrid_BtnCon-sp1'> 
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