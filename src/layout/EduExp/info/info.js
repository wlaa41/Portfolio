import brain from './brain-aura.jpg'
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
        title: "APPITUNITY",
        subtitle: "Co-Founder and CEO",
        date: "Jan 2018 - Jan 2022",
        brief: "• Led 30+ digital marketing and web optimization projects, achieving a 40% increase in web traffic and 25% in conversion rates. • Directed a team of 15+ software developers and engineers using Azure boards and Scrum. • Deployed 150+ embedded systems and cloud projects, enhancing operational efficiencies. • Managed 20+ member cross-functional teams, fostering collaboration in complex tech environments.",
        image: robot, // Placeholder image for tech leadership and project management
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-blackboard"}></use></svg>
    },
    {
        title: "My Smart Home",
        subtitle: "Founder and CEO",
        date: "Jan 2015 - Jan 2019",
        brief: "• Grew market value to £2 million in 3 years, achieving platinum with Control4, GIRA, Intesis. • Top Control4 seller in 2019, highlighting sales excellence. • Completed 120+ smart installations across diverse properties. • Implemented solar systems in palaces, cutting energy costs by 43%, ROI in 5 years. • Established R&D for smart home solutions, focusing on protocols. • Tripled sales via targeted ads and SMM, leading YouTube channel in Home Automation.",
        image: new_robot_project, // Placeholder image for innovative smart home solutions
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-layers"}></use></svg>
    },
    {
        title: "MSc Artificial Intelligence, 2022",
        subtitle: "PG With Distinction",
        date: "2021 - 2022",
        brief: "• Specialized in Generative AI, excelling in model innovation. • Mastered CNNs and NLP models, applying them to complex datasets. • Focused on Multi-Agent Systems, demonstrating advanced problem-solving skills. • Proficient in TensorFlow, PyTorch, and Pandas, aligning with high employability standards in AI fields.",
        image: laptop, // Placeholder image
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-graduation-cap"}></use></svg>
    },
    {
        title: "Full-Stack Development",
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
        image: brain, // Placeholder for the actual image
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-layers"}></use></svg>
    },
    {
        title: "DevOps & Cloud Engineering",
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
        image: brain, // Reused image placeholder
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-layers"}></use></svg>
    },
    {
        title: "II, University of Malaysia",
        subtitle: "Lab Instructor",
        date: "Jan 2013 - Jan 2015",
        brief: "• Led OOP & Algorithms courses, improving skills of 400+ students. • Activities boosted student results by 67%. • Balanced theory with practical tasks to foster collaboration. • Certified in innovative teaching methods, achieving pedagogical excellence.",
        image: new_ai_math, // Placeholder image for educational achievement
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-graduation-cap"}></use></svg>
    },
]




