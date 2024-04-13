// import ant from './ant-walking-tree.jpg'
import neural from '../../../assets/neuraan.webp'
import brain from '../../../assets/brain-aura.webp'
// import pat from './pat.webp'
// import lab from './lab.webp'
// import boston from './boston.webp'
import robotArm from '../../../assets/new_robot_project.webp'
import mathAI from '../../../assets/mathAI.webp'
import featureMosaic from '../../../assets/featureMosaic.webp'
import pathFinding from '../../../assets/path-finding-phone-googlemap.webp'
import interactive_web_application from '../../../assets/sass_reactjs.webp'



export default function info(){
    return([
        {
            title: 'RL & Cognitive Robot',
            subtitle: 'Agent Collab.',
            brief: 'This project integrates cognitive learning with RL to enhance multi-agent robotics. It improves localization, addresses the sim2real gap, and examines agent interactions for commercial application. By combining probabilistic methods and cognitive models, it advances autonomous collaboration and adaptability.',
            image: brain ,
            alt: "Abstract representation of a brain highlighting cognitive robotics and RL integration"
            // Placeholder for concise visual representation
        },
        {
            title: 'Jackal Robot Sim',
            subtitle: 'ROS & Gazebo ',
            brief: "Explore the Jackal robot in a tailored Gazebo environment, perfect for research and learning. This setup covers custom models, ROS packages, and a step-by-step guide from cloning to launch. With ROS and Gazebo, dive into robotics, SLAM mapping, and AMCL navigation, enriching your simulation experience and autonomous navigation skills.",
            image: neural,
            alt: "Neural network visualization symbolizing the Jackal robot simulation in a Gazebo environment"
            // Placeholder for a visually summarized concept
        },
        {
            title: 'AI & ML Python Projects',
            subtitle: 'Python',
            brief: "Featuring key Python projects: Ant Colony for efficient pathfinding, ANN Simulation with 92% MNIST accuracy, optimized pathfinding with Dijkstra's and A*, innovative My Path Finding Algorithm, 92% accurate House Price Prediction on the Boston dataset, and the application of the Rescorla–Wagner model for psychological learning simulations. Examples showcasing the fusion of theory and practice in AI, highlighting adept problem-solving:",
            image: robotArm,
            alt: "Interactive web application interface depicting AI & ML projects in Python"
        },
        {
            title: 'Project Management',
            subtitle: 'ISO & Scrum',
            brief: "Leading over 100 home automation and commercial projects, I've managed the entire lifecycle from conceptual design with AutoCAD, through electrical planning, to execution and maintenance. My approach involves direct oversight of skilled engineering teams and managing all facets of procurement and logistics. These projects demonstrate my commitment to high standards, from design to client support, highlighting my comprehensive project management expertise.",
            image: pathFinding,
            alt: "Map and navigation tools representing project management in home automation and security systems"
        },
        {
            title: 'Security Systems  ',
            subtitle: 'IP & Analog',
            brief: 'My specialization in enhancing property safety involves sophisticated security configurations and cutting-edge surveillance solutions. Notable tools include Paradox, Hikvision & Aldaua samsung, philps  for top-tier CCTV systems, and Samsung for comprehensive security coverage. These examples illustrate my capability to deliver peace of mind to clients through comprehensive security systems integration.',
            image: 'path/to/security-system-image.webp',
            alt: "Security camera and system icons illustrating advanced property safety solutions"
             // Placeholder for an actual image path
        },
        
        {
            title: 'Home Automation Systems',
            subtitle: 'KNX, CBUS',
            brief: 'Expert in integrating lighting, dimming, and facade lighting with DALI, as well as automating AC, jacuzzis, curtains, and garages. My projects utilize Control4 for seamless lighting and entertainment setups and Crestron for luxury automation. Proficient with scalable smart homes technologies including Control4, Crestron, Jira, Jung, Schneider Electric, and ABB, demonstrating my ability to ensure optimal functionality and integration in home automation systems.',
            image: brain,
            alt: "Smart home automation concept image showcasing integration of modern technology for living spaces"
        },
        {
            title: 'AI Math Core',
            subtitle: 'ros',
            brief: 'An intricate project intertwining the core mathematical pillars of AI: a system that employs advanced algorithms to solve complex mathematical problems. Utilizing Calculus for optimization and Linear Algebra for data representation, this project exemplifies the application of theoretical math in practical AI scenarios.',
            image: mathAI,
            alt: "Mathematical formulas and AI concept art representing the mathematical core of artificial intelligence"
            // This would be a reference to the image created
        },
        {
            title: 'Image Mosaic & Feature ID',
            subtitle: 'OpenCV',
            brief: "This project applies computer vision to construct mosaics and identify key features, utilizing algorithms like SIFT and ORB, along with the Hough Transform for enhanced image analysis and interpretation.",
            image: featureMosaic,
            alt: "Digital mosaic artwork symbolizing image processing and feature identification via computer vision"
             // This would be a reference to the minimalist image created
        }

])}

