import React from 'react';
import './CardStrip.scss'
import Stk_container from "../../components/stackCards/Stk_container";

export default function CardStrip(){


    return(
    <section className='CardStrip'>
        <div className="CardStrip_BACKGround">
            <div className='CardStrip_BACKGround_left-bg'>
               
            </div>
            <div className='CardStrip_BACKGround_mid-bg'></div>
            <div className='CardStrip_BACKGround_right-bg'></div>

        </div>

        <div className='CardStrip_grid_TOPleft-bg'>
            <div className='CardStrip_grid_TOPleft-bg_txt'>
                                <div className='Training'>Training</div>
                                <div className='and'>and</div>
                                <div className='Projects'>Projects</div>
            </div>
        </div>
        <div className='CardStrip_grid_TOPright-bg'>
            <Stk_container></Stk_container>

        </div>

    </section>)



}