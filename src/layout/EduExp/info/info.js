import ant from './neural-cell-dark.jpg'
import robot from './robot-arm.jpg'
import new_robot_project from './new_robot_project.webp'
import new_ai_math from './new_ai_math.webp'
import laptop from './Labtop.jpg'
import sprite from './ICON_sprite.svg'
import React from 'react'



export const  info = [
    {
        title: "PhD AI & Robotics Innovations",
        date: "2023/24",
        subtitle: "PhD Enhancing Autonomous Robotics with Cognitive RL",
        brief: "This research aims to advance autonomous robotics in multi-agent systems by merging cognitive learning with reinforcement learning (RL) for better localization and sim2real adaptation. Focusing on probabilistic optimization and agent interaction dynamics, the project bridges theory with practical application, targeting improved collaboration and adaptability in commercial environments. Through a blend of simulation testing and real-world deployment, it seeks to transform robotic learning, making it more adaptable and effective for complex tasks.",
        image: new_robot_project, // Placeholder for the actual image
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-graduation-cap"}></use></svg>
    },
    {
        title: "Aviation Control System Enhancement",
        date: "2023/24",
        subtitle: "Linearized Models & Jacobian Matrix",
        brief: "Focusing on aviation control systems, this study uses linearized models and the Jacobian matrix to analyze and stabilize the RAE (Research Aircraft Experiment) plane. Linearized models help predict the aircraft's response to perturbations, while the Jacobian matrix offers insights into system stability and control feedback mechanisms. This methodology aims to improve flight stability and performance, applying fundamental mathematical principles to address complex engineering challenges in aviation. The project exemplifies the application of advanced mathematical techniques in enhancing the safety and efficiency of aircraft operations.",
        image: new_ai_math, // Placeholder for the actual image
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-graduation-cap"}></use></svg>
    },
    {
        title: "MSc in Artificial Intelligence, UK",
        date: "2020 to present",
        subtitle: "Achieved First-Class Honors",
        brief: "Possesses a robust theoretical foundation in Mathematics and AI with proficiency in Python and PyTorch. Skilled in crafting and evaluating ML/DL models and integrating them as services via diverse APIs/software. Familiar with leading machine learning, NLP frameworks (including TensorFlow 2, Keras, Theano, Scikit-learn, and others), and adept in version control (Git) with an understanding of continuous delivery pipelines. Expert in resolving developmental and testing environment issues.",
        image: laptop,
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-graduation-cap"}></use></svg>
    },
    {
        title: "Transition to ML, AI & ReactJS",
        date: "2020 to 2022",
        subtitle: "Completed 15+ AI-Related Courses",
        brief: "Dedicated substantial time to learning alongside my studies, completing over 14 courses with a focus on mathematics, including linear algebra, probability, statistics, and number theory. Presently exploring ROS2 for automotive algorithm development. Applied JavaScript, SASS, and ReactJS in freelance projects, demonstrating FullStack development proficiency.",
        image: robot,
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-layers"}></use></svg>
    },
    {
        title: "Smart Cities Company, UAE",
        date: "2015 - 2020",
        subtitle: "Manager & R&D Manager",
        brief: "Spearheaded project planning, commissioning, and product improvement based on industry trends. Integrated services with noSQL cloud solutions, educated staff on AutoCAD, SolidWorks, Control4, and KNX systems. Innovated a local language voice recognition system, pivotal in marketing campaigns, giving a competitive edge to our automation solutions. Ensured team metrics and goals were met with comprehensive documentation throughout R&D phases.",
        image: ant,
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-layers"}></use></svg>
    },
    {
        title: "Int. Islamic University of Malaysia",
        date: "2013 - 2015",
        subtitle: "Lab Instructor Assistant",
        brief: "Collaborated with a teaching team on PCB design and microcontroller programming courses. Created teaching materials and methods, aligning with established academic practices. Fostered a hands-on learning environment, set high expectations, and nurtured student independence and self-esteem.",
        image: robot,
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-blackboard"}></use></svg>
    },
    // Additional Entries:
   
    
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


