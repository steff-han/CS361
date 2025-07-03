const fs = require('fs');

// EVENT 2: prng.txt <--> prng-service.js 
// Read "run" from txt, generate random number, then write to txt

function prngService() {
    // Read prng.txt
    fs.readFile('./prng.txt', (err, data) => {
        if (err){
            console.log("ERROR READING FILE: " + err)
            return;
        }
        // If prng.txt contains "run" string (indexOf returns 0 or higher index), trigger the genNum function 
        if (data.indexOf('run') >= 0){

            let num = genNum();
            // Convert number into a string for file writing
            num = num.toString();
            // Write the number to prng.txt
            fs.writeFile('./prng.txt', num, (err) => {
                if (err){
                    console.error(err)
                }
            });
        }

        console.log("prng-service CONTENT IS: " + data);
    });
}

// Function to generate a random number between [1, 10]
function genNum() {
    let num = Math.floor(Math.random() * 10) + 1;
    return num; 
}

// Set an interval to call prngService()/check prng.txt content every 5 seconds 
setInterval(() => {
    prngService();
    console.log("prngService is listening...");
}, 5000);