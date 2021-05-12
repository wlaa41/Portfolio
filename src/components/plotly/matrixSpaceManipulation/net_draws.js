import { Matrix } from 'ml-matrix';
import  * as np  from '../../../rutaul/numpee' 
// import * as tf from '@tensorflow/tfjs';



export const NetDraws = (matrix, strt=-1, stp=1, num=3)=>{

    // console.log('%c ------------------ this is np','color:green')
    // console.log({np})
    // console.log({np})
    // console.log(np.linespace(4,6,5))
    // const y_parallel2_X = []
    // const x_parallel2_X = []
    // const z_parallel2_X = []
    // const y_parallel2_Y = []
    // const x_parallel2_Y = []
    // const z_parallel2_Y = []
    // const y_parallel2_Z = []
    // const x_parallel2_Z = []
    // const z_parallel2_Z = []

    // // This counts for the cube drawing
    // console.log('%c ------------------ this is np','color:green')

    const count = np.linspace(strt, stp, num)
    // console.log('%c ------------------ this is np','color:green')
    const a = tf.tensor([[1, 2], [3, 4]]);
    console.log('%c ------------tf.tensor([[1, 2], [3, 4]]','color:green')
    console.log('shape:', a.shape);
    count.forEach(n => {
        count.forEach(nn => {
                


    //         // Drawing the lins after dot product with the matrix
    //         // .......... LINES PARALEL TO X AXIS ..............
    //         vector = np.array(
    //             [[strt - .3, -strt + .3], [nn, nn], [n, n], ])
    //         vector1 = matrix.dot(vector)
    //         x, y, z = vector1
    //         x_parallel2_X = x_parallel2_X + list(x)
    //         x_parallel2_X.append(None)
    //         y_parallel2_X = y_parallel2_X + list(y)
    //         y_parallel2_X.append(None)
    //         z_parallel2_X = z_parallel2_X + list(z)
    //         z_parallel2_X.append(None)

    //         // .......... LINES PARALEL TO X AXIS ..............
    //         vector1 = vector = np.array(
    //             [[nn, nn], [strt - .3, -strt + .3], [n, n]])
    //         vector1 = matrix.dot(vector)
    //         x, y, z = vector1
    //         x_parallel2_Y = x_parallel2_Y + list(x)
    //         x_parallel2_Y.append(None)
    //         y_parallel2_Y = y_parallel2_Y + list(y)
    //         y_parallel2_Y.append(None)
    //         z_parallel2_Y = z_parallel2_Y + list(z)
    //         z_parallel2_Y.append(None) 

    //         // .......... LINES PARALEL TO X AXIS ..............
    //         vector1 = vector = np.array(
    //             [[nn, nn], [n, n], [strt - .3, -strt + .3]])
    //         vector1 = matrix.dot(vector)
    //         x, y, z = vector1
    //         x_parallel2_Z = x_parallel2_Z + list(x)
    //         x_parallel2_Z.append(None)
    //         y_parallel2_Z = y_parallel2_Z + list(y)
    //         y_parallel2_Z.append(None)
    //         z_parallel2_Z = z_parallel2_Z + list(z)
    //         z_parallel2_Z.append(None)

    // return [ 
    //     x_parallel2_X,
    //     y_parallel2_X,
    //     z_parallel2_X,
    //     x_parallel2_Y,
    //     y_parallel2_Y,
    //     z_parallel2_Y,
    //     x_parallel2_Z,
    //     y_parallel2_Z,
    //     z_parallel2_Z
    //     ]    


        });
    });



}
