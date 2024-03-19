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
        date: "On Progress",
        subtitle: "Enhancing Cognitive Robotics",
        brief: "• Engaged in groundbreaking research merging cognitive and reinforcement learning.\n• Focused on multi-agent system collaboration.\n• Leveraging simulation and real-world deployment to revolutionize robotic learning.",
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
        brief: "• Led 30+ digital marketing and web optimization projects, achieving a 40% increase in web traffic and 25% in conversion rates. \n• Directed a team of 15+ software developers and engineers using Azure boards and Scrum. \n• Deployed 150+ embedded systems and cloud projects, enhancing operational efficiencies. \n• Managed 20+ member cross-functional teams, fostering collaboration in complex tech environments.",
        image: robot, // Placeholder image for tech leadership and project management
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-blackboard"}></use></svg>
    },
    {
        title: "My Smart Home",
        subtitle: "Founder and CEO",
        date: "Jan 2015 - Jan 2019",
        brief: "• Grew market value to £2 million in 3 years, achieving platinum with Control4, GIRA, Intesis. \n• Top Control4 seller in 2019, highlighting sales excellence. \n• Completed 120+ smart installations across diverse properties. \n• Implemented solar systems in palaces, cutting energy costs by 43%, ROI in 5 years. \n• Established R&D for smart home solutions, focusing on protocols. \n• Tripled sales via targeted ads and SMM, leading YouTube channel in Home Automation.",
        image: new_robot_project, // Placeholder image for innovative smart home solutions
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-layers"}></use></svg>
    },
    {
        title: "MSc Artificial Intelligence",
        subtitle: "PG With Distinction",
        date: "2021 - 2022",
        brief: "• Specialized in Generative AI, excelling in model innovation. \n• Mastered CNNs and NLP models, applying them to complex datasets. \n• Focused on Multi-Agent Systems, demonstrating advanced problem-solving skills. \n• Proficient in TensorFlow, PyTorch, and Pandas, aligning with high employability standards in AI fields.",
        image: laptop, // Placeholder image
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-graduation-cap"}></use></svg>
    },
    {
        title: "Full-Stack Development",
        date: "2020 - 2022",
        subtitle: "Extensive Learning & Application",
        brief: "• Completed 25+ courses in AI, mathematics, and Full-Stack development.\n• Applied skills in JavaScript, ReactJS, and AI in freelance projects, demonstrating versatility.",
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
        brief: "• Mastery in containerization and orchestration with Docker and Kubernetes, enabling scalable and efficient application deployment. • Proficient in infrastructure as code (IaC) using Terraform and Ansible for automated configuration and management. • Extensive experience with Azure and Azure DevOps for seamless cloud integration and deployment pipelines. • Skilled in version control systems, particularly git and GitHub, ensuring robust code management and collaboration.",
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
    {
        title: "Real Passion for AI and Robotics",
        subtitle: "Mastering Tools and Technologies",
        date: "Lifelong Dedication",
        brief: `• Expertise in programming languages and tools such as Python, JavaScript, HTML, and C#, critical for diverse project requirements. 
                • Advanced proficiency in deployment and automation technologies, including Docker, Kubernetes, Terraform, and Ansible. 
                • Comprehensive experience with Azure, Azure DevOps, git, GitHub, and Prometheus for project management and operational monitoring. 
                • Specialization in AI and Machine Learning technologies like TensorFlow, PyTorch, CNNs, RL, and ANN, pushing the boundaries of intelligent systems. 
                • Skilled in utilizing robotics components such as Cameras, LiDARs, IMUs, GNSS, alongside precision measurement systems like motion capture and 3D scanning for enhanced robotic perception and navigation.`,
        image: brain, // Placeholder or an icon that represents technical skills
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-tools"}></use></svg>
    },
    {
        title: "Certifications & Educational",
        subtitle: "Foundation of Knowledge and Expertise",
        date: "Ongoing",
        brief: `• BSc in Electrical Engineering, laying the groundwork for a deep understanding of technology's core principles. 
                • Currently pursuing the Hashicorp Terraform Associate 003 certification, demonstrating a commitment to mastering infrastructure as code. 
                • Completed the DevOps Engineering certification from AiCore, showcasing skills in modern deployment practices. 
                • Graduated with Distinction in AI and Machine Learning from City, University of London, evidencing advanced competencies in cutting-edge AI technologies. 
                • Expertise in smart environment systems certified by KNX and distinguished as a top Control4 seller, reflecting prowess in home automation.`,
        image: new_robot_project, // Placeholder or an icon that signifies achievements
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-graduation-cap"}></use></svg>
    },
    {
        title: "Speed, Engineering & Wellness",
        subtitle: "A Devoted Enthusiast & Athlete",
        date: "Lifelong Dedication",
        brief: `• Passionately dedicated to exploring the synergy between the thrill of motorbikes, the precision of engineering, and the discipline of sports. 
                • Immersed in the latest advancements in technology, mechanics, and sports science, I strive to understand and optimize performance and well-being. 
                • Hands-on in enhancing machine performance and personal physical fitness, I advocate for a no sugar, no preservative lifestyle, emphasizing health and sustainability.
                • Through community engagement and shared experiences, I promote a balanced approach to speed, innovation, and health, valuing safety and engineering excellence alongside holistic well-being.
                • My journey is a continuous exploration of human and mechanical capabilities, celebrating historical milestones and personal achievements in engineering and athleticism.`,
        image: brain, // A symbol that represents your passions and dedication
        icon: <svg className="CardEdu_header_icon"><use href={sprite+"#icon-speedometer"}></use></svg>
    }
    
    


]




