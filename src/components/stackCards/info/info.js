import ant from './ant-walking-tree.jpg'
import neural from './neuraan.jpg'
import brain from './brain-aura.jpg'
import pat from './pat.jpg'
import lab from './lab.jpg'
import boston from './boston.jpg'
import mathAI from './mathAI.webp'
import featureMosaic from './featureMosaic.webp'
import pathFinding from './path-finding-phone-googlemap.jpg'
import interactive_web_application from './sass_reactjs.webp'



export default function info(){
    return([
        {
            title: 'RL & Cognitive Robotics',
            subtitle: 'Agent Collaboration',
            brief: 'This project integrates cognitive learning with RL to enhance multi-agent robotics. It improves localization, addresses the sim2real gap, and examines agent interactions for commercial application. By combining probabilistic methods and cognitive models, it advances autonomous collaboration and adaptability.',
            image: lab // Placeholder for concise visual representation
        },
        {
            title: 'Jackal Robot Sim',
            subtitle: 'ROS & Gazebo ',
            brief: "Explore the Jackal robot in a tailored Gazebo environment, perfect for research and learning. This setup covers custom models, ROS packages, and a step-by-step guide from cloning to launch. With ROS and Gazebo, dive into robotics, SLAM mapping, and AMCL navigation, enriching your simulation experience and autonomous navigation skills.",
            image: neural // Placeholder for a visually summarized concept
        },
        {
            title: 'AI & ML Python Projects',
            subtitle: 'Python',
            brief: "Featuring key Python projects: Ant Colony for efficient pathfinding, ANN Simulation with 92% MNIST accuracy, optimized pathfinding with Dijkstra's and A*, innovative My Path Finding Algorithm, 92% accurate House Price Prediction on the Boston dataset, and the application of the Rescorla–Wagner model for psychological learning simulations. Examples showcasing the fusion of theory and practice in AI, highlighting adept problem-solving:",
            image: interactive_web_application
        },
        {
            title: 'Project Management',
            subtitle: 'ISO & Scrum',
            brief: "Leading over 100 home automation and commercial projects, I've managed the entire lifecycle from conceptual design with AutoCAD, through electrical planning, to execution and maintenance. My approach involves direct oversight of skilled engineering teams and managing all facets of procurement and logistics. These projects demonstrate my commitment to high standards, from design to client support, highlighting my comprehensive project management expertise.",
            image: pathFinding
        },
        {
            title: 'Security Systems  ',
            subtitle: 'IP & Analog',
            brief: 'My specialization in enhancing property safety involves sophisticated security configurations and cutting-edge surveillance solutions. Notable tools include Paradox, Hikvision & Aldaua samsung, philps  for top-tier CCTV systems, and Samsung for comprehensive security coverage. These examples illustrate my capability to deliver peace of mind to clients through comprehensive security systems integration.',
            image: 'path/to/security-system-image.jpg' // Placeholder for an actual image path
        },
        
        {
            title: 'Home Automation Systems',
            subtitle: 'KNX, CBUS',
            brief: 'Expert in integrating lighting, dimming, and facade lighting with DALI, as well as automating AC, jacuzzis, curtains, and garages. My projects utilize Control4 for seamless lighting and entertainment setups and Crestron for luxury automation. Proficient with scalable smart homes technologies including Control4, Crestron, Jira, Jung, Schneider Electric, and ABB, demonstrating my ability to ensure optimal functionality and integration in home automation systems.',
            image: boston
        },
        {
            title: 'AI Math Core',
            subtitle: 'ros',
            brief: 'An intricate project intertwining the core mathematical pillars of AI: a system that employs advanced algorithms to solve complex mathematical problems. Utilizing Calculus for optimization and Linear Algebra for data representation, this project exemplifies the application of theoretical math in practical AI scenarios.',
            image: mathAI // This would be a reference to the image created
        },
        {
            title: 'Image Mosaic & Feature ID',
            subtitle: 'OpenCV',
            brief: "This project applies computer vision to construct mosaics and identify key features, utilizing algorithms like SIFT and ORB, along with the Hough Transform for enhanced image analysis and interpretation.",
            image: featureMosaic // This would be a reference to the minimalist image created
        }

])}

