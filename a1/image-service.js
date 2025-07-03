const fs = require('fs');

// EVENT 3: image.txt <--> image-service.js 
// Read number from txt, generate image file path, then write to txt

function imageService(){

    fs.readFile('./image.txt', (err, data) => {
        if (err){
            console.log("ERROR READING FILE: " + err)
            return;
        }

        console.log("NUMBER RECEIVED AT image-service.js: " + data);

        // If the data is a single or double digit number...
        if (data.length < 2){
            // Clear the file content first
            fs.writeFile('./image.txt', '', (err) => {
                if (err){
                    console.log("ERROR CLEARING image.txt CONTENT)");
                    return;
                }

                console.log("FILE CLEARED");
            });

            // Generate the image file path 
            // PROBLEM: data for some reason keeps on 
            let imagePath = genPath(data);

            fs.writeFile('./image.txt', imagePath, (err) => {
                if (err){
                    console.log("ERROR WRITING IMAGE PATH");
                    return;
                }
            });

            // console.log("PATH IS: :" + imagePath);
        };
    });
}

function genPath(num){
    let path = `./pictures/nagano${num}.jpeg`;
    return path;
}

setInterval(() => {
    imageService();
    console.log("imageService is listening...");
}, 5000);