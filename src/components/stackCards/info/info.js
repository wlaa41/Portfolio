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
                brief: 'Finds the short paths by simulating real ant behavior. The uses probabilty to and by repitition it finds short paths without exhausting proccessor resources. I have also add a graph that shows the best paths found',
                image: ant
            },
            {
                title: 'ANN Simulationn',
                subtitle:'python',
                brief: 'Artificial Neural Network built from the gruond up without using any third library -Only Numpy- the designed network is apple to classify MINST data with 92 accuracy',
                image: neural
            },
            {
                title: "Dijkstra's algorithm",
                subtitle:'python',
                brief: 'Applying  the Dijkstra algorithem  on 2 dimenssion grid. The algorithm is written in Python. Also, there is a brief comparission between three defferent path finding algorithm',
                image: pathFinding
            }
            ,{
                title: "My Path Finding Algorithm",
                subtitle:'python',
                brief: 'A compenation on A star and Ant Colony where it can finds the best path with minium resources. The code graphs a the path found and prints out the passed nodes ',
                image: pat
            }
            ,{
                title: "House Price Predection",
                subtitle:'python',
                brief: 'Machine Learning algorthim applied on data set of Bostom house prices. After training the model is able gain 92% accuracy. The algorithm runs different models and shows a graph that compare the result',
                image: boston
            }
            ,{
                title: 'Rescorla–Wagner model',
                subtitle:'python',
                brief: 'A full simulation of the model ploting a graph on how learning process occure in animal -following Rescorla–Wagner theroy- the siimulation is able demonstrate all different types of learning i.e. Blocking, Negative patterning ...etc. It shows also where the models fall.   ',
                image: brain
            }

])}

