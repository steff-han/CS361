
const zmq = require('zeromq');

// Hello World Server
// Expects "Hello" from the client, returns "World"
// Create a socket of some data type response, binds it to port 5555, then awaits messages 
async function runServer(){
    // Create a socket 
    const sock = new zmq.Reply();
    
    // Bind it to PORT 5555
    await sock.bind('tcp://*:5555');

    // For every message received at this socket, send a WORLD response
    for await (const [msg] of sock){
        console.log('Received' + ': [' + msg.toString() + ']');

        await sock.send('WORLD');

        // Do something in here 

    }
}

runServer();