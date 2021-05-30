import ant from './ant-walking-tree.jpg'
import robot from './robot-arm.jpg'
import sprite from './ICON_sprite.svg'
import React from 'react'


export const  info = [
            {
                title: 'MSc Artificial  intelligance, UK',
                date: '20 to present',
                subtitle:'First-Class Scored',
                brief: 'Gained a closer look at the math behind machine learning technique. I enjoyed studyiing mutlt-agent course and managed to solve challaging assigenment problem. I went behind the curiculum and self studied few mathmatical books ',
                image: ant,
                icon:   <svg className="CardEdu_header_icon">
                            <use href={sprite+"#icon-graduation-cap"}>
                            </use>
                        </svg>
            },
            {
                title: 'ML, React, and SASS Javascript',
                date: '20 to present',
                subtitle:'More Than 15 Artificial Intell. related courses',
                brief: 'Along side my study, I invested most of my time learning. I have completed more around 14 courses in subject ranging from math, machine learning, and number theory reading amazing mathmatical book. All the way to refresh and stringthen my knowledge in SASS, NodeJs, Javascript, UX/UI in different platform such as Coursera, Tedex, Udemy.',
                image: robot,
                icon:   <svg className="CardEdu_header_icon">
                            <use href={sprite+"#icon-layers"}>
                            </use>
                        </svg>
            },
            {
                title: 'Smart Cities Company, UAE',
                date: '2015 - 20',
                subtitle:'Manager & R&D ',
                brief: 'Before, I decided to take a shift to my career I have been in great position as Electronic and Electrical Engineer. I have manged a project and led a team of 25 engieneers and technichans. I gained a lot of knowledge on how to lead by doing. and also learned that the powers comes when working along side others',
                image: ant,
                icon:   <svg className="CardEdu_header_icon">
                            <use href={sprite+"#icon-layers"}>
                            </use>
                        </svg>
            },
            {
                title: 'Int. I. University of Malaysia',
                date: '2013 - 15',
                subtitle:'Lab instructor Assitant',
                brief: 'Before, I decided to take a shift to my career I have been in great position as Electronic and Electrical Engineer. I have manged a project and led a team of 25 engieneers and technichans. I gained a lot of knowledge on how to lead by doing. and also learned that the powers comes when working along side others',
                image: robot,
                icon:   <svg className="CardEdu_header_icon">
                            <use href={sprite+"#icon-blackboard"}>
                            </use>
                        </svg>
            },
]


