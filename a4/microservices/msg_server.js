
const zmq = require('zeromq');

async function runServer(){

    // Create a new socket that receives REQUESTS (messages) and sends RESPONSES
    const sock = new zmq.Reply();

    // Await a promise to bind the socket to PORT 3000
    await sock.bind('tcp://*:3000');

    // For every message this socket receives, print message and respond with new message 
    for await (const [msg] of sock){
        console.log('Received' + ': [' + msg.toString() + ']');
        await sock.send('This is a message from CS 361');
    }
}

runServer();



