from sympy import Matrix
from scipy.linalg import lu, qr,null_space
import plotly.express as px
import plotly.graph_objs as go
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from numpy import linalg as LA, printoptions
import numpy as np
import math

import sys
# try:
#     sys.path.insert(1, 'D:\AAlearnAA\Python')
#     from rutaul.prnt import pg, pm, pr

# except expression as identifier:
#     print('net_draws Lib: massage from net_lib \n Unble to load rutaul print module')

# A class that return the grid points for any giving matrix

def net3d(matrix, strt=-1, stp=1, num=3):   
    """ Method that return a list of grid coordinate

    Args:
        matrix (numpy.array): the matrix where all the points will be projected by
        strt (int): start of the grid
        stp (int): Stop point of the grid
        num (int): number of points between start and stop

    Returns:
        list: coordinate of the grid[ 
        x_parallel2_X, coordinate of line parllel to x 
        y_parallel2_X, coordinate of line parllel to x
        z_parallel2_X, coordinate of line parllel to x
        x_parallel2_Y, coordinate of line parllel to y
        y_parallel2_Y, coordinate of line parllel to y
        z_parallel2_Y, coordinate of line parllel to y
        x_parallel2_Z, coordinate of line parllel to z
        y_parallel2_Z, coordinate of line parllel to z
        z_parallel2_Z  coordinate of line parllel to z
        ]      
    """

    y_parallel2_X = []
    x_parallel2_X = []
    z_parallel2_X = []
    y_parallel2_Y = []
    x_parallel2_Y = []
    z_parallel2_Y = []
    y_parallel2_Z = []
    x_parallel2_Z = []
    z_parallel2_Z = []
    # This counts for the cube drawing
    count = np.linspace(strt, stp, num)
    for n in count:
        for nn in count:

            # Drawing the lins after dot product with the matrix
            # .......... LINES PARALEL TO X AXIS ..............
            vector = np.array(
                [[strt - .3, -strt + .3], [nn, nn], [n, n], ])
            print('vector')
            print(vector)
            print('matrix')
            print(matrix)

            vector1 = matrix.dot(vector)
            x, y, z = vector1

            print('dot priduct')
            print(vector1)
            x_parallel2_X = x_parallel2_X + list(x)
            x_parallel2_X.append(None)
            y_parallel2_X = y_parallel2_X + list(y)
            y_parallel2_X.append(None)
            z_parallel2_X = z_parallel2_X + list(z)
            z_parallel2_X.append(None)

            # .......... LINES PARALEL TO X AXIS ..............
            vector1 = vector = np.array(
                [[nn, nn], [strt - .3, -strt + .3], [n, n]])
            vector1 = matrix.dot(vector)
            x, y, z = vector1
            x_parallel2_Y = x_parallel2_Y + list(x)
            x_parallel2_Y.append(None)
            y_parallel2_Y = y_parallel2_Y + list(y)
            y_parallel2_Y.append(None)
            z_parallel2_Y = z_parallel2_Y + list(z)
            z_parallel2_Y.append(None) 

            # .......... LINES PARALEL TO X AXIS ..............
            vector1 = vector = np.array(
                [[nn, nn], [n, n], [strt - .3, -strt + .3]])
            vector1 = matrix.dot(vector)
            x, y, z = vector1
            x_parallel2_Z = x_parallel2_Z + list(x)
            x_parallel2_Z.append(None)
            y_parallel2_Z = y_parallel2_Z + list(y)
            y_parallel2_Z.append(None)
            z_parallel2_Z = z_parallel2_Z + list(z)
            z_parallel2_Z.append(None)

    return [ 
        x_parallel2_X,
        y_parallel2_X,
        z_parallel2_X,
        x_parallel2_Y,
        y_parallel2_Y,
        z_parallel2_Y,
        x_parallel2_Z,
        y_parallel2_Z,
        z_parallel2_Z
        ]               
def determanentParallelepiped( matrix):

    c,r = matrix.shape
    # checking if the matrix is invertible
    if np.linalg.matrix_rank(matrix) == c and c==r:
        inverse = np.linalg.inv(matrix)

        # adding x and y vector to get the base then adding x and z the y and z then all to get the corner of the parallelepiped
    vX_Y = matrix[:, 0]+matrix[:, 1]
    vX_Z = matrix[:, 0]+matrix[:, 2]
    vY_Z = matrix[:, 1]+matrix[:, 2]
    vX_Y_Z = matrix[:, 0]+matrix[:, 1]+matrix[:, 2]

    # mesh drawing,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

    # the corners of the parallelepiped arranged as example https://plotly.com/python/3d-mesh/
    x_ = [0, matrix[0, 1], vX_Y[0], matrix[0, 0],
        matrix[0, 2], vY_Z[0], vX_Y_Z[0], vX_Z[0]]
    y_ = [0, matrix[1, 1], vX_Y[1], matrix[1, 0],
        matrix[1, 2], vY_Z[1], vX_Y_Z[1], vX_Z[1]]
    z_ = [0, matrix[2, 1], vX_Y[2], matrix[2, 0],
        matrix[2, 2], vY_Z[2], vX_Y_Z[2], vX_Z[2]]


        # points scatter ..........................................

    x_edge = [0, matrix[0, 1], vX_Y[0], matrix[0, 0], vX_Z[0], vX_Y_Z[0],
            vY_Z[0], matrix[0, 2], 0, matrix[0, 1], vY_Z[0], vX_Y_Z[0], vX_Y[0], matrix[0, 0],0, matrix[0, 2], vX_Z[0]]
    y_edge = [0, matrix[1, 1], vX_Y[1], matrix[1, 0], vX_Z[1], vX_Y_Z[1],
            vY_Z[1], matrix[1, 2], 0, matrix[1, 1], vY_Z[1], vX_Y_Z[1], vX_Y[1], matrix[1, 0],0, matrix[1, 2], vX_Z[1]]
    z_edge = [0, matrix[2, 1], vX_Y[2], matrix[2, 0], vX_Z[2], vX_Y_Z[2],
            vY_Z[2], matrix[2, 2], 0, matrix[2, 1], vY_Z[2], vX_Y_Z[2], vX_Y[2], matrix[2, 0],0, matrix[2, 2], vX_Z[2]]

    return [x_, y_, z_, x_edge, y_edge, z_edge]
def nullSpace(matrix, strt=-6, stp=6, num=3):
    """ Method that return a list of Null space Vector

    Args:
        matrix (numpy.array): the matrix where all the points will be projected by
        strt (int): start of the grid
        stp (int): Stop point of the grid
        num (int): number of points between start and stop

    Returns:
        list: coordinate of the grid[ 
        x_parallel2_X, coordinate of line parllel to x 
        y_parallel2_X, coordinate of line parllel to x
        z_parallel2_X, coordinate of line parllel to x
        x_parallel2_Y, coordinate of line parllel to y
        y_parallel2_Y, coordinate of line parllel to y
        z_parallel2_Y, coordinate of line parllel to y
        x_parallel2_Z, coordinate of line parllel to z
        y_parallel2_Z, coordinate of line parllel to z
        z_parallel2_Z  coordinate of line parllel to z
        ]      
    """
    count = np.linspace(strt, stp, num)

    MainPointsB4project = [[], [], []]  # Points created by 3 loops x y z
    fullSolnAt_Xparticular = [[], [], []] # Line drawn to represent the null solutiob add and subtract by constant C
    pointsB4project_Added = [[], [], []] # Extra points along the full soltn
    projectedPoints = [[], [], []] # the points after the dot product with the matrix - Projected Points -
    TracingLineMainP = [[], [], []]# lines between the prijected point and Points created by 3 loops x y z 
    tracingLine = [[], [], []] # Lines Between the point and its projectioin extra along the full soltn those Lines are Between Extra points created by adding/subtracting c * Null(space) to the main points and its projectioin 

    nullBasis = np.array(null_space(matrix))
    
    for i in range(0, nullBasis.T.__len__()):  # the full solution for each null space base
       

        nul = nullBasis[:, i:i+1]
        # creating points in the space ..............................................................................................
        
        for n in count: # Random Number *can be changed
            for nn in count:  # Random Number *can be changed
                for nnn in count:  # Random Number *can be changed

                    # THE POINT that will projected by the matrix
                    randomV = np.array([[n], [nn], [nnn]])

                    # ploting the whole solution for EACH  random point
                    # ...... the number can be changed "c" from the full solution Ax = xp + c Null(A)
                    c = 6
                    randADDnul = randomV + c * nul
                    randMINUSnull = randomV - c * nul
                    # ..... the above statments creates np array with data type Object .....
                    # .... in order to avoide an error in serilazation I dded
                    # .... astype(float) which change the type to float
                    # ... TO SEE THE ERROR REMOVE .astype(float) FROM THE STATMENT BELOW
                    randomVfull = np.append(
                        randADDnul, randMINUSnull, axis=1).astype(float)

                    # This is to draw the null line --- blue thick
                    fullSolnAt_Xparticular = np.append(
                        fullSolnAt_Xparticular,  randomVfull, axis=1)
                    fullSolnAt_Xparticular = np.append(
                        fullSolnAt_Xparticular,  [[None], [None], [None], ], axis=1)
                    # Plotting the random point that was choosing randomV = np.array([[n], [nn], [nnn]] )
                    MainPointsB4project = np.append(
                        MainPointsB4project,  randomV, axis=1)
                    # x_randomV = x_randomV + list(randomV[0])
                    # x_randomV.append(None)
                    # y_randomV = y_randomV + list(randomV[1])
                    # y_randomV.append(None)
                    # z_randomV = z_randomV + list(randomV[2])
                    # z_randomV.append(None)

                    # Finding where the point landed after multpling with the main matrix
                    dotedV = matrix.dot(randomV)
                    projectedPoints = np.append(
                        projectedPoints, matrix.dot(randomV), axis=1)

                    # Adding conection between the random point and its landing Just for visual
                    vtemp = np.append(dotedV, randomV, axis=1)
                    TracingLineMainP = np.append(
                        TracingLineMainP,  vtemp, axis=1)
                    TracingLineMainP = np.append(
                        TracingLineMainP,  [[None], [None], [None], ], axis=1)

                    SHOWLEGEND = False

                    # creating other points by adding Xn to the random points where b = Xp + c Xn .................................
                    for i in range(-c, c+1, 2 * c):

                        V = randomV + (i * nul)
                        # ..... the above statments creates np array with data type Object .....
                        # .... in order to avoide an error in serilazation I dded
                        # .... astype(float) which change the type to float
                        # ... TO SEE THE ERROR REMOVE .astype(float) FROM THE STATMENT BELOW
                        V = V.astype(float)
                        pointsB4project_Added = np.append(
                            pointsB4project_Added,  V, axis=1)

                        # CAN BE DELETED IT IS ONLY TO DOUBLE CHECK THAT EVERY Xp + c NULL(Matrix) LANDS ON THE SAME POINT Xp LANDS
                        dotedV = matrix.dot(V)
                        projectedPoints = np.append(
                            projectedPoints, matrix.dot(V), axis=1)

                        # # Adding conection between the random point added to by c * Null(space) and its landing Just for visual
                        vtemp = np.append(dotedV, V, axis=1)
                        tracingLine = np.append(
                            tracingLine,  vtemp, axis=1)
                        tracingLine = np.append(
                        tracingLine,  [[None], [None], [None], ], axis=1)
    return {
        'MainPointsB4project': MainPointsB4project ,
        'fullSolnAt_Xparticular': fullSolnAt_Xparticular ,
        'pointsB4project_Added': pointsB4project_Added ,
        'projectedPoints': projectedPoints ,
        'TracingLineMainP': TracingLineMainP ,
        'tracingLine': tracingLine
    }
def matrixvector(matrix):
    row_n = len(matrix)
    vecLine_xyz = [[] for row in matrix ]
    # fitZeros = np.insert(matrix, tuple(range(1,len(matrix))),0, axis=1)
    for col in matrix.T:
        col = col.reshape(row_n,1)
        vecLine_xyz = np.append(vecLine_xyz, col, axis=1)
        vecLine_xyz = np.append(vecLine_xyz, [[0], [0], [0]], axis=1)
        vecLine_xyz = np.append(vecLine_xyz, [[None], [None], [None]], axis=1)

    return vecLine_xyz
        

def eigenvector(matrix):
    """Compute the eigenvalues and right eigenvectors of a square array.

    Args:
        matrix (array): Matrices for which the eigenvalues and right eigenvectors will be computed          

    Returns:
        w : The eigenvalues, each repeated according to its multiplicity adding to it 0 and None to draw thw lines
        
        v : The normalized (unit “length”) eigenvectors, such that the column v[:,i] is the eigenvector corresponding to the eigenvalue w[i].
        
    """
    w, v = LA.eig(matrix)
    np.printoptions(precision=2)
    row_n = len(v)
    vecLine_xyz = [[] for row in v]
    val_text=[]
    # fitZeros = np.insert(v, tuple(range(1,len(v))),0, axis=1)
    i=0
    for col in v.T:
        col = col.reshape(row_n, 1)
        vecLine_xyz = np.append(vecLine_xyz, col, axis=1)
        vecLine_xyz = np.append(vecLine_xyz, [[0], [0], [0]], axis=1)
        vecLine_xyz = np.append(vecLine_xyz, [[None], [None], [None]], axis=1)
        val_text = np.append(val_text, w[i])
        # val_text = np.append(val_text, [0])
        val_text = np.append(val_text,  [None,None])
        i=i+1
    np.printoptions(precision=2, suppress=True)


    return (val_text, vecLine_xyz, w, v)


class Draw:
    def __init__(self,  fig):
        self.fig = fig


    def MainAxices(self, xLen=4, yLen=4, zLen=4):
            # ........... .... x y z axis .... .................
        self.fig.add_trace(
            go.Scatter3d(
                x=[xLen, -xLen, None, 0, 0, None, 0,     0],
                y=[0,    0, None, yLen, -yLen, None, 0,     0],
                z=[0,    0, None, 0, 0, None, zLen, -zLen],
                mode='lines',
                showlegend=True,
                name='xyz',
                line=dict(
                    color=['#8ee600', '#8ee600',
                           'white', '#b3005c', '#b3005c', 'white', '#0079ad', '#0079ad'],
                     width=5
                )))

    # Drawing the matrix column vector
    def MatVector(self, MatrixV_mat, namex='xyz Vectors', namey='y', namez='z', colorx='#e4ff94', colory='#ffa8f1', colorz='#a8d5ff', width=10, showlegend=True):

        # print(MatrixV_mat)
        self.fig.add_trace(
            go.Scatter3d(
                x=MatrixV_mat[0],
                y=MatrixV_mat[1],
                z=MatrixV_mat[2],
                mode='lines',
                name=namex,
                showlegend=showlegend,
                line=dict(
                    color=[colorx, colorx,
                           'white', colory, colory, 'white', colorz, colorz],
                    width=width
                )
            ))

    # a method that add trace to the figure and draw LINES BETWEEN THEM
    def Mat3grid(self, xyz_lines, color='#ecfc03', colorY='', colorZ='', name='Grid', nameX='', nameY='', nameZ='', opacity=.6, width=2, showlegend=True):

        if colorY == '':
            colorY = color
        if colorZ == '':
            colorZ = color
        if nameX == '':
            nameX = name + ' X'
        if nameY == '':
            nameY = name + ' Y'
        if nameZ == '':
            nameZ = name + ' Z'
        self.fig.add_trace(go.Scatter3d(
            x=xyz_lines[0],
            y=xyz_lines[1],
            z=xyz_lines[2],
            mode='lines',
            showlegend=showlegend,
            legendgroup=nameX,
            name=nameX,
            line_color=color,
            opacity=opacity,
            line=dict(
                width=width
            )))
        self.fig.add_trace(go.Scatter3d(
            x=xyz_lines[3],
            y=xyz_lines[4],
            z=xyz_lines[5],
            mode='lines',
            showlegend=showlegend,
            legendgroup=nameX,
            name=nameY,
            line_color=colorY,
            opacity=opacity,
            line=dict(
                width=width
            )))
        self.fig.add_trace(go.Scatter3d(
            x=xyz_lines[6],
            y=xyz_lines[7],
            z=xyz_lines[8],
            legendgroup=nameX,
            mode='lines',
            showlegend=showlegend,
            name=nameZ,
            line_color=colorZ,
            opacity=opacity,
            line=dict(
                width=width
            )))

    def determanent(self, vPoints, color='#ecfc03', size=4, name='Determanent', nameX='',  opacity=.1, width=2, showlegend=True):
        self.fig.add_trace(go.Mesh3d(
            # 8 vertices of a cube
            x=vPoints[0],
            y=vPoints[1],
            z=vPoints[2],
            opacity=opacity,
            color=color,
            # colorbar_title='z',
            # i, j and k give the vertices of triangles from the points above
            i=[7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
            j=[3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
            k=[0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
            legendgroup=name,
            name=name,
            showlegend=showlegend
        ))

        # points scatter ..........................................
        self.fig.add_trace(
            go.Scatter3d(
                x=vPoints[3],
                y=vPoints[4],
                z=vPoints[5],
                mode="markers+text+lines",
                text=[i for i in range(1, 9)],
                textposition="bottom center",
                legendgroup=name,
                name=name,
                marker=dict(
                    color=color,
                    size=size
                ),
                showlegend=showlegend,
                line=dict(
                    width=width
                )
            ))

    def Nullspace(self, **kargs):
        # Points along rhe null base
        self.fig.add_trace(go.Scatter3d(
            x=kargs['pointsB4project_Added'][0],
            y=kargs['pointsB4project_Added'][1],
            z=kargs['pointsB4project_Added'][2],
            name='Before Projectoin Added Along NullSpace',
            mode='markers',
            showlegend=True,
            marker=dict(color='greenyellow'
                        )))

        self.fig.add_trace(go.Scatter3d(
            x=kargs['MainPointsB4project'][0],
            y=kargs['MainPointsB4project'][1],
            z=kargs['MainPointsB4project'][2],
            mode='markers',
            name='Before Projectoin Main',
            showlegend=True,
            marker=dict(color='deepskyblue'
                        )))

        self.fig.add_trace(go.Scatter3d(
            x=kargs['projectedPoints'][0],
            y=kargs['projectedPoints'][1],
            z=kargs['projectedPoints'][2],
            mode='markers',
            showlegend=False,
            marker=dict(color='mediumvioletred'
                        )))

        # plotting the vector from -c  to  +c  "Null base"
        self.fig.add_trace(go.Scatter3d(
            x=kargs['fullSolnAt_Xparticular'][0],
            y=kargs['fullSolnAt_Xparticular'][1],
            z=kargs['fullSolnAt_Xparticular'][2],
            mode='lines',
            showlegend=True,
            legendgroup="group2",
            name='Null Base',
            line_color='lightskyblue',
            opacity=0.6,
            line=dict(
                width=9
            )))

        # Adding conection between the random point and its landing Just for visual
        self.fig.add_trace(go.Scatter3d(
            x=kargs['tracingLine'][0],
            y=kargs['tracingLine'][1],
            z=kargs['tracingLine'][2],
            mode='lines',
            showlegend=True,
            name='Landing connection Trace',
            line_color='gray',
            opacity=0.9,
            line=dict(
                width=3
            )
        ))
        self.fig.add_trace(go.Scatter3d(
            x=kargs['TracingLineMainP'][0],
            y=kargs['TracingLineMainP'][1],
            z=kargs['TracingLineMainP'][2],
            mode='lines',
            showlegend=True,
            name='Landing connection',
            line_color='red',
            opacity=0.9,
            line=dict(
                width=2
            )))
        




        ######################################################################
        ######################################################################
        ######################################################################
        ######################################################################
        ######################################################################
        ######################################################################
        ######################################################################
        ######################################################################
        ######################################################################
        ######################################################################
        ######################################################################
# The main method

    # Drawing the matrix column vector

    def EigVector(self, Eig_Vec_Val, namex='EigenVectors', namey='y', namez='z', colorx='#e4ff94', colory='#ffa8f1', colorz='#a8d5ff', width=10, showlegend=True):

        val, mat = Eig_Vec_Val
        self.fig.add_trace(
            go.Scatter3d(
                x=mat[0],
                y=mat[1],
                z=mat[2],
                mode='lines+text',
                name=namex,
                text=val,
                showlegend=showlegend,
                line=dict(
                    color=[colorx, colorx,
                           'white', colory, colory, 'white', colorz, colorz],
                    width=width
                )
            ))



if __name__ == "__main__":
    # prntm(matrixvector(np.array([[1,2,3],[22,33,44]]))
    fig = go.Figure()
    fig.update_layout(template='plotly_dark')

    # draw = Draw(fig)

    # val, mat, w, v = eigenvector(np.array([[1, 0, 1], [0, 3, 0], [1, 0, 1]]))
    def dotspace(matrix=np.array([[1, 0, 1], [0, 1, 0], [0, 0, 1]]), linspace=np.linspace(-5, 5, 11), linspacey='', linspacez=''):
        linespacey = linspace if linspacey == '' else linespacey
            
    # draw.EigVector((val, mat))
    # draw.determanent(determanentParallelepiped(v),name='eigen Determent')
    fig.show()
    print(v)









