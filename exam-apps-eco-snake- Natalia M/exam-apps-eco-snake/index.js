const express = require('express');
const { Server } = require('socket.io');
const PORT = 5050;

let positions = {x: 0, y: 0};
let moveX, moveY = 0;

let contador = 0;

const app = express();
const httpServer = app.listen(PORT, () => {
    console.table(
        {
            'Controller:' : 'http://localhost:5050/controller',
            'Display:' : 'http://localhost:5050/display',
        }
    )
});
const ioServer = new Server(httpServer, { path: '/real-time' });

//const staticController = express.static('public-controller');
//const staticDisplay = express.static('public-display');

app.use('/controller', express.static('public-controller'));
app.use('/display', express.static('public-display'));
app.use(express.json());

/*___________________________________________

1) Create an endpoint to GET a validation message to test if the endpoint is working
_____________________________________________ */
socket.on('', () => {
   
    })

/*___________________________________________

2) Create the socket methods to listen the events and emit a response
It should listen for directions and emit the incoming data.
_____________________________________________ */

function direction() {
    socket.emit('positions', { controlX: pmouseX, controlY: pmouseY });
    }
    socket.on('display-positions', message => {
    let { controlX, controlY } = message;
    controllerX = controlX;
    controllerY = controlY;
    });



//------------------------------------------
ioServer.on('connection', (socket) => {

    socket.emit(directions);
    
});

//------------------------------------

function mouseDrag() {
    socket.emit('positions', { controlX: pmouseX, controlY: pmouseY });
    }

/*___________________________________________

3) Create an endpoint to POST user score and print it
_____________________________________________ */
serverApp.get('score',( response) =>{

    response.send(contador);
})

console.log();


score = request.body;
console.log('Post! from client', request.body);