import React from 'react'
import sprite from './ICON_sprite.svg'
import './CARD_edu.scss'

const CardEdu = () => {
    console.log(sprite)
    return (
        <div className='CardEdu'>
             <div className="CardEdu_header">
                <svg className="CardEdu_header_icon">
                <use href={sprite+"#icon-graduation-cap"}>
                </use>
                </svg>
                <h3 className="CardEdu_header_main_title">MSc Artificial  intelligance  <span className="CardEdu_header_year"> </span></h3>
                
            </div>
            <h4 className="CardEdu_second_title" >First-Class Scored</h4>
            <p className="CardEdu_paragraph">eremy tends to favor em, because of the ability to control an area of a design. As in, scale the type in that specific area relatively. I have tended to like rem because of the ability to scale type across </p>
        </div>
    )
}

export default CardEdu
const info = [
    {
        mainTitle:"MSc Artificial  intelligance",
        secondTitle:'First-Class Scored'
    }
]