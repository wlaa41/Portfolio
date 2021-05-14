import  * as np  from '../../../rutaul/numpee' 
// import {tensor} from '@tensorflow/tfjs';
import {matrix,multiply } from "mathjs"



export const NetDraws = async (myMatrix = matrix([[5,0, 0], [0,1,0], [0,0,2]]), strt=-1, stp=1, num=3 )=>{
    // const result = await calc(product);


    // console.log('%c ------------------ this is np','color:green')

    let y_parallel2_X = []
    let x_parallel2_X = []
    let z_parallel2_X = []
    let y_parallel2_Y = []
    let x_parallel2_Y = []
    let z_parallel2_Y = []
    let y_parallel2_Z = []
    let x_parallel2_Z = []
    let z_parallel2_Z = []

    // // This counts for the cube drawing
    // console.log('%c ------------------ this is np','color:green')
    const count = np.linspace(strt, stp, num)


    count.forEach(n => {
        count.forEach(nn => {
                // debugger;
    //         // Drawing the lins after dot product with the matrix
    //         // .......... LINES PARALEL TO X AXIS ..............
            let vector = matrix(
                [[strt - .3, -strt + .3], [nn, nn], [n, n] ])

            let vector1 = multiply(myMatrix,vector)
            let [x, y, z] = vector1._data
             x_parallel2_X = x_parallel2_X.concat(x) 
             x_parallel2_X.push(null)
             y_parallel2_X = y_parallel2_X.concat(y)
             y_parallel2_X.push(null)
             z_parallel2_X = z_parallel2_X.concat(z)
             z_parallel2_X.push(null)

            // .......... LINES PARALEL TO X AXIS ..............
             vector = matrix(
                [[nn, nn], [strt - .3, -strt + .3], [n, n]])
            let vector2 = multiply(myMatrix,vector)
            let [xx, yy, zz] = vector2._data
            x_parallel2_Y = x_parallel2_Y.concat(xx) 
            x_parallel2_Y.push(null)
            y_parallel2_Y = y_parallel2_Y.concat(yy)
            y_parallel2_Y.push(null)
            z_parallel2_Y = z_parallel2_Y.concat(zz)
            z_parallel2_Y.push(null) 

            // .......... LINES PARALEL TO X AXIS ..............
             vector = matrix(
            [[nn, nn], [n, n], [strt - .3, -strt + .3]])
            vector1 = null

            let vector3 = multiply(myMatrix,vector)
            let [xxx, yyy, zzz] = vector3._data
            x_parallel2_Z = x_parallel2_Z.concat(xxx) 
            x_parallel2_Z.push(null)
            y_parallel2_Z = y_parallel2_Z.concat(yyy)
            y_parallel2_Z.push(null)
            z_parallel2_Z = z_parallel2_Z.concat(zzz)
            z_parallel2_Z.push(null)
    // x_parallel2_X
    // y_parallel2_X
    // z_parallel2_X
    // debugger;
  


        });
    });
    console.log(x_parallel2_X)
    console.log(x_parallel2_Y)
    console.log(x_parallel2_Z)
    
    // debugger;
    return [ 
        x_parallel2_X.concat(x_parallel2_Y).concat(x_parallel2_Z),
        y_parallel2_X.concat(y_parallel2_Y).concat(y_parallel2_Z),
        z_parallel2_X.concat(z_parallel2_Y).concat(z_parallel2_Z),
        x_parallel2_Y,
        y_parallel2_Y,
        z_parallel2_Y,
        x_parallel2_Z,
        y_parallel2_Z,
        z_parallel2_Z
        ]  

}
