
const zmq = require('zeromq');

// Hello World Client 
async function runClient(){{
    console.log('Connecting to helloworld_server...');

    const sock = new zmq.Request();
    sock.connect('tcp://localhost:5555');

    // Send 10 messages to the server 
    for (let i = 0; i < 10; i++){
        console.log('Sending HELLO at ' + i + ' times');
        await sock.send('HELLO');
        const [result] = await sock.receive();
        console.log('Received' + ': [' + result.toString() + '] ' + i + ' times');
        console.log('\n');
    }
}}

runClient();