import ant from './ant-walking-tree.jpg'
import neural from './neuraan.jpg'
import brain from './brain-aura.jpg'
import pat from './pat.jpg'
import lab from './lab.jpg'
import boston from './boston.jpg'
import pathFinding from './path-finding-phone-googlemap.jpg'



export default function info(){
    return([
            {
                title: 'Ant Colony Simulation ',
                subtitle:'python',
                brief: 'Algorithm that finds the short paths by simulating ants behavior. This is achieved by simulating: pheromone -a chemical substance-, pheromone’s evaporating and a probability equation. Those three factors determine the ant behavior. In addition, the ants who get lost -take to long time before reaching- get terminated. After few iteration the algorithm finds a short path – might not be the best- with minimum processing usage',
                image: ant
            },
            {
                title: 'ANN Simulation',
                subtitle:'python',
                brief: 'Artificial Neural Network built from the gruond up -using back propagation- without using any third library -Only Numpy- the designed ANN is apple to classify MINST data with 92 accuracy. The algorithm allows editing many hyper parameter: Structure, Activation Function, Output Function, Stop Criterion, Cost Function and Default Weights and Biases',
                image: neural
            },
            {
                title: "Dijkstra's algorithm",
                subtitle:'python',
                brief: "Applying the Dijkstra algorithem on 2 dimenssions grid. It finds the path by using three parallel lists that keeps a record of the order of the shortest path. Unlike the ant algorithm -shortest is not guaranteed-. That being said, this comes at the expense of using more resources -CPU and Memory-. Also the algorithm has some flows which has been amended in the A* algorithm by Dijkstra's himself.",
                image: pathFinding
            }
            ,{
                title: "My Path Finding Algorithm",
                subtitle:'python',
                brief: "The algorithm finds the shortest path using the following techniques: A path is created in the start square where it starts to seed to all the adjacent square and those paths are saved in a list. This list is referred to as a Seeding path list ‘seedingpath’. Click to read more and to see how this algorithm has some advantages over both: Ant Colony Simulation and  Dijkstra's algorithm. It uses a totally different method.",
                image: pat
            }
            ,{
                title: "House Price Prediction",
                subtitle:'python',
                brief: 'Machine Learning algorthim applied on data set of Bostom house price.The algorithm runs different models and shows a graph that compare the result After training the model is able gain 92% accuracy. At the end there is a clear comparison and analysis of all the technics used',
                image: boston
            }
            ,{
                title: 'Rescorla–Wagner model',
                subtitle:'python',
                brief: 'A full simulation of the model ploting a graph on how learning process occure in animal -following Rescorla–Wagner theroy- the siimulation is able demonstrate all different types of learning i.e. Blocking, Negative patterning ...etc. It shows also where the models fails. It also suggest some improvement to the model to accommodate some failure. This research is held under PhD Esther Mondragon.',
                image: brain
            }

])}

