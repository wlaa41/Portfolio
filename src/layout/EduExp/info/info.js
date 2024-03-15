import ant from './neural-cell-dark.jpg'
import robot from './robot-arm.jpg'
import new_robot_project from './new_robot_project.webp'
import new_ai_math from './new_ai_math.webp'
import laptop from './Labtop.jpg'
import sprite from './ICON_sprite.svg'
import React from 'react'



export const info = [
    {
        title: "PhD in AI & Robotics Innovations",
        date: "Expected 2028",
        subtitle: "Enhancing Cognitive Robotics",
        brief: "Engaged in groundbreaking research to merge cognitive learning with reinforcement learning for advanced autonomous system adaptability. Focus on multi-agent system collaboration, leveraging simulation and real-world deployment to revolutionize robotic learning.",
        image: new_robot_project, // Placeholder for the actual image
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-graduation-cap"}></use></svg>
    },
    {
        title: "Aviation Control System Research",
        date: "2023/24",
        subtitle: "Control Sysyem",
        brief: "Employed linearized models and Jacobian matrix for RAE plane stability. Aimed at enhancing flight control and safety through mathematical analysis, improving aircraft performance.",
        image: new_ai_math, // Placeholder for the actual image
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-graduation-cap"}></use></svg>
    },
    {
        title: "MSc Artificial Intelligence, 2022",
        subtitle: "With Distinction",
        brief: "• Specialized in Generative AI, excelling in model innovation. • Mastered CNNs and NLP models, applying them to complex datasets. • Focused on Multi-Agent Systems, demonstrating advanced problem-solving skills. • Proficient in TensorFlow, PyTorch, and Pandas, aligning with high employability standards in AI fields.",
        image: laptop, // Placeholder image
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-graduation-cap"}></use></svg>
    },
    {
        title: "Full-Stack Development & AI Integration",
        date: "2020 - 2022",
        subtitle: "Extensive Learning & Application",
        brief: "Completed 25+ courses in AI, mathematics, and Full-Stack development. Applied skills in JavaScript, ReactJS, and AI in freelance projects, demonstrating versatility and proficiency.",
        image: robot, // Placeholder for the actual image
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-layers"}></use></svg>
    },
    {
        title: "Smart City Solutions Leadership",
        date: "2015 - 2019",
        subtitle: "Innovation in Automation",
        brief: "Directed smart city projects, integrating noSQL solutions and pioneering voice recognition systems for automation. Achieved significant advancements in project delivery and product improvement.",
        image: ant, // Placeholder for the actual image
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-layers"}></use></svg>
    },
    {
        title: "DevOps & Cloud Engineering Expertise",
        date: "2023 - 2024",
        subtitle: "Mastering Modern Deployment",
        brief: "Specialized in Docker, Kubernetes, and Azure DevOps. Led projects enhancing CI/CD pipelines, infrastructure as code with Terraform, and system monitoring, ensuring scalable and reliable cloud solutions.",
        image: laptop, // Reused image placeholder
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-layers"}></use></svg>
    },
    {
        title: "Advanced Robotics Simulation",
        date: "2023",
        subtitle: "Gazebo & Jackal Robot Integration",
        brief: "Developed a Gazebo simulation environment, enhancing autonomous navigation research. Authored guides and designed custom models, showcasing proficiency in robotics software development.",
        image: new_robot_project, // Reused image placeholder
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-layers"}></use></svg>
    },
    {
        title: "Smart Home Automation Expert",
        date: "2019",
        subtitle: "Leading Edge in Home Automation",
        brief: "Directed luxury smart home integrations, achieving significant sales growth through innovative marketing and product delivery. Specialized in Control4, Crestron systems, and sustainable energy solutions.",
        image: ant, // Reused image placeholder
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-layers"}></use></svg>
    },
    {
        title: "Programming Inst.II University of Malaysia",
        date: "2013 - 2016",
        subtitle: "OOP & Algorithms Mastery",
        brief: "• Innovated programming education focusing on OOP (Object-Oriented Programming) and algorithms. • Awarded for pedagogical excellence; Pedagogy certified. • Educated over 400 students • Developed coursework that combined theory with practical application.",
        image: robot, // Placeholder for emphasis on technology education
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-blackboard"}></use></svg>
    },
]




