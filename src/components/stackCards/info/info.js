import ant from './ant-walking-tree.jpg'
import neural from './neural-cell-dark.jpg'
import brain from './brain-aura.jpg'
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
                brief: 'Based on the known algorithem a full python code that run simulationn on 2 dimenssion grid,',
                image: pathFinding
            }
            ,{
                title: "My Path Finding Algorithm",
                subtitle:'python',
                brief: 'A compenation on A star and Ant Colony where it can finds the best path with minium resources. The code graphs a the path found and prints out the passed nodes ',
                image: ant
            }
            ,{
                title: "Bostom House Price Predection",
                subtitle:'python',
                brief: 'runing different macheine learning model on data and get the best result ',
                image: brain
            }
            ,{
                title: 'Rescorla–Wagner model',
                subtitle:'python',
                brief: 'A full simulation of the model ploting a graph on how learning process occure in animal -following Rescorla–Wagner theroy- the siimulation is able demonstrate all different types of learning i.e. Blocking, Negative patterning ...etc. It shows also where the models fall.   ',
                image: brain
            }

])}

