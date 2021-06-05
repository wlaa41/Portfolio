import ant from './ant-walking-tree.jpg'
import robot from './robot-arm.jpg'
import baby from './baby.jpg'

import sprite from './ICON_sprite.svg'
import React from 'react'



export const  info = [
            {
                title: 'MSc Artificial  intelligance, UK',
                date: '20 to present',
                subtitle:'First-Class Scored',
                brief: `Solid theoretical background in Mathematics & AI, Comfortable with Python and PyTorch.
                         Knowledge in building and testing ML/DL models, Experience of integrating ML/DL as services with different APIs/software applications, Exposure to major machine learning frameworks, languages and NLP frameworks (TensorFlow 2, Keras, Theano, Scikit-learn, Numpy, Scipy & Pandas, NLTK, Matplotlib, Seaborn, Gensim, CoreNLP, spaCy, TextBlob), Version control (Git) and continuous delivery pipeline principles and tools, Experience of troubleshooting issues in development and test environments`,
                image: ant,
                icon:   <svg className="CardEdu_header_icon">
                            <use href={sprite+"#icon-graduation-cap"}>
                            </use>
                        </svg>
            },
            {
                title: 'Career shift: ML, AI, & Reactjs ',
                date: '20 to present',
                subtitle:'More Than 15 AI. related courses',
                brief: 'Along side my study, I invested most all my time learning. I have completed more than 14 courses mainly focusing on math i.e. linear algabra, Probability & Statistics, number theory. I am also currently studying ROS2, techniques to build automotive-related algorithms. I compleated and used. Javascript, SASS, React js -FullStack Development-  in few small freelancing project. ',
                image: robot,
                icon:   <svg className="CardEdu_header_icon">
                            <use href={sprite+"#icon-layers"}>
                            </use>
                        </svg>
            },
            
            {
                title: 'Smart Cities Company, UAE',
                date: '2015 - 20',
                subtitle:'Manager & R&D Manger',
                brief: 'Document and place and commision project plan.  Improve existing products Based on industry trends, As working in Home Automation Company I connected our services using noSQL cloud. Teach member of staff on software i.e AutaCAD, Solid Work and Control4 and KNX system. Develop concepts, products, and solutions by coordinating with sales team. Some the of the concept product was Local Language Voice recognetion system. We used the system that I a have personlly developed with my team in heavly in the company marketing campign as it gives advantge to our home automation solution.  Monitor team metrics and objectives ensuring meeting of goals. Document all phases of research and development.',
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
                brief: `Teach as a member of a teaching team within an established programme of study involving PCB circuit design and microcontroller programming. Develop own teaching materials, methods and approaches taking into account
                established or agreed practices where necessary.Encourage pupils to interact and experment. Set challenging and demanding expectations and promote self-esteem and
                independence.`
                ,
                image: robot,
                icon:   <svg className="CardEdu_header_icon">
                            <use href={sprite+"#icon-blackboard"}>
                            </use>
                        </svg>
            },
            // {
            //     title: 'Born in 1986',
            //     date: '2013 - 15',
            //     subtitle:'Eye opener',
            //     brief: `My love to my mother, late father. Also my supportiv wife and great family around me.`
            //     ,
            //     image: baby,
            //     icon:   <svg className="CardEdu_header_icon">
            //                 <use href={sprite+"#icon-blackboard"}>
            //                 </use>
            //             </svg>
            // }
]


