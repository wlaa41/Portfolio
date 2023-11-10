import ant from './ant-walking-tree.jpg'
import neural from './neuraan.jpg'
import brain from './brain-aura.jpg'
import pat from './pat.jpg'
import lab from './lab.jpg'
import boston from './boston.jpg'
import mathAI from './mathAI.webp'
import featureMosaic from './featureMosaic.webp'
import pathFinding from './path-finding-phone-googlemap.jpg'



export default function info(){
    return([
        {
            title: 'Ant Colony Simulation',
            subtitle: 'Python',
            brief: 'An algorithm inspired by the foraging behavior of ants, using pheromone trails, evaporation, and a probabilistic model to discover efficient paths. It includes a mechanism to dismiss stagnating ants, enhancing the process to find near-optimal paths with minimal computational demand.',
            image: ant
        },
        {
            title: 'ANN Simulation',
            subtitle: 'Python',
            brief: 'A custom-built Artificial Neural Network employing backpropagation, relying solely on Numpy for computation. This ANN classifies the MNIST dataset with a 92% accuracy rate, providing flexibility to tweak various hyperparameters such as structure, activation, and output functions.',
            image: neural
        },
        {
            title: "Dijkstra's Algorithm",
            subtitle: 'Python',
            brief: "An implementation of Dijkstra's algorithm for grid-based pathfinding, tracking the shortest path order with three parallel lists. It's resource-intensive, leading to an exploration of Dijkstra's subsequent enhancement, the A* algorithm, to improve efficiency.",
            image: pathFinding
        },
        {
            title: "My Path Finding Algorithm",
            subtitle: 'Python',
            brief: "An innovative pathfinding algorithm that seeds paths from the starting square to adjacent squares, maintained in a 'seedingpath' list. This method offers unique advantages over the Ant Colony and Dijkstra's algorithms, utilizing a distinct approach to ascertain the shortest route.",
            image: pat
        },
        {
            title: "House Price Prediction",
            subtitle: 'Python',
            brief: 'Applying machine learning techniques to the Boston housing dataset, this algorithm compares multiple models and visualizes their performance, achieving a notable 92% prediction accuracy. A thorough analysis provides insights into the efficacy of each approach used.',
            image: boston
        },
        {
            title: 'Rescorla–Wagner Model',
            subtitle: 'Python',
            brief: "A comprehensive simulation of the Rescorla–Wagner model, illustrating various learning types in animals and pinpointing the model's limitations. Enhancements are proposed to mitigate identified shortcomings, stemming from research by PhD Esther Mondragon.",
            image: brain
        },
        {
            title: 'AI Math Core',
            subtitle: 'Python',
            brief: 'An intricate project intertwining the core mathematical pillars of AI: a system that employs advanced algorithms to solve complex mathematical problems. Utilizing Calculus for optimization and Linear Algebra for data representation, this project exemplifies the application of theoretical math in practical AI scenarios.',
            image: mathAI // This would be a reference to the image created
        },
        {
            title: 'Image Mosaic & Feature ID',
            subtitle: 'Python & OpenCV',
            brief: "This project applies computer vision to construct mosaics and identify key features, utilizing algorithms like SIFT and ORB, along with the Hough Transform for enhanced image analysis and interpretation.",
            image: featureMosaic // This would be a reference to the minimalist image created
        }

])}

