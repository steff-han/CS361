// Set up Express environment for local server  
const express = require('express');

const app = express();
const PORT = 3000;
// Call static() to enable our Express.js app to serve static files from the public root directory 
app.use(express.static('public'));

// Call listen() to start listening for HTTP requests on our specified port
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
})

// Set up our Node.js filestream
const fs = require('fs');

/** WRITEFILE to print "run" to prng.txt **/
function writeRun() {
    // Open prng.txt for reading/writing and position filestream at beginning
    // fd is our file descriptor 
    fs.open('./prng.txt', 'w', (err, fd) => {
        if (err){
            console.error("ERROR OPENING FILE: " + err);
            return;
        }
        const run = "run";
        // Write "run" to prng.txt. Print an error message if we can't write it. 
        fs.writeFile('./prng.txt', run, err => {
            if (err){
                console.error("ERROR WRITING TO FILE: " + err);
                return;
            }
        })

        console.log("RUN COMMAND WRITTEN");

        // Close prng.txt 
        fs.close(fd, (err) => {
            if (err){
                console.error("ERROR CLOSING FILE: " + err);
                return;
            }
        });
    });
}

/** WRITEFILE to read random number from prng.txt and print to image.txt **/
function writeNum() {
    fs.readFile('./prng.txt', (err, data) => {
        if (err){
            console.log("ERROR READING FILE: " + err);
            return;
        }

        console.log("RANDOM NUMBER IS: " + data);
        // If the number is a single or double digit integer 
        if (data.length < 2){
            fs.writeFile('./image.txt', data, (err) => {
                if (err){
                    console.log("ERROR WRITING TO FILE");
                    return;
                }
            });
        };
    });
}

/** ReadStream to read image path from image.txt **/
function readImagePath(){

    let imagePath;

    // fs.open('./image.txt', 'r', (err, fd) => {

        fs.readFile('./image.txt', (err, path) => {
            console.log("image.txt PATH IS: " + path);

            imagePath = path;

            console.log("Image Path is: " + imagePath);
            return imagePath;
        });

        // Close image.txt
    //     fs.close(fd, (err) => {
    //         if (err){
    //             console.error("ERROR CLOSING FILE: " + err);
    //             return;
    //         }
    //     });
    // });

    // console.log("Image Path is: " + imagePath);
    // return imagePath;
}

function sleep(time){
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function trigger(){
    writeRun();
    // Pause the function for 5 seconds 
    await sleep(5000);

    writeNum();

    await sleep(5000);

    let path = readImagePath();

    console.log("Image Path is: " + path);

    return path;
}

// GET ROUTE
app.get('/a1', (req, res) => {

    let imagePath = trigger();

    console.log("From main: " + imagePath);

    // res.render(imagePath);

    // We will send the image file path in the response at the end 
    res.send("GET method was called");
});


