
const zmq = require('zeromq');

async function runClient(){

    console.log('Connecting to msg_server...');

    // Create a new socket that sends REQUESTS 
    const sock = new zmq.Request();
    // Connect to the URL at PORT 3000
    sock.connect('tcp://localhost:3000');

    console.log('Sending: [This is a message from CS 361]');

    // Send the message request to the server 
    await sock.send('This is a message from CS 361');

    // Once we receive the result response from server, print it 
    const [result] = await sock.receive();
    console.log('Received' + ': [' + result.toString() + ']');
}

runClient();
