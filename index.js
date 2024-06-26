const fs = require("fs");
const os = require('os');
const http = require('http');
const events = require('events');

// Content to be written to the file
const content = `Node.js architecture is built for efficiency in handling a high volume of concurrent connections. Here are the key aspects to understand:
Single-threaded Event Loop:
Unlike traditional web servers that use multiple threads, Node.js employs a single-threaded event loop. This means it processes tasks one at a time.
Non-Blocking I/O:
The magic lies in non-blocking I/O operations. When a request arrives, Node.js doesn't wait for slow I/O tasks (like disk access or network calls) to complete.
It places them in a queue and moves on to handle other requests.
Event Queue and Callbacks:
The event queue holds pending I/O tasks.
Once an I/O operation finishes, an event is triggered, and a callback function associated with that task is added to another queue.
The event loop then picks up these callback functions from the queue and executes them, effectively completing the requests.
Modules:
Use Cases of Node.js:
Real-time applications: Chat applications, social media feeds, collaborative editing tools.
I/O bound tasks: Data streaming, APIs, microservices.
Single-page applications (SPAs): Backend for SPAs built with frameworks like React or Angular.
By understanding Node.js architecture, you can leverage its strengths to build efficient and scalable web applications`;

// File operations

    // Read file content
    // const contentRead = fs.readFileSync(content);
    // console.log(contentRead);

    // Append content to file
    fs.appendFile('nodejs_architecture.txt', content, function (err) {
        if (err) {
            console.log(err);
        }
    });

    // Append additional content to file
    const content2 = `I am additional`;
    fs.appendFile('nodejs_architecture.txt', content2, (err) => {
        if (err) {
            console.log(err);
        }
    });

    // Delete the file
    // fs.unlink('nodejs_architecture.txt', (err) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     console.log("File deleted");
    // });


// OS information
console.log(`The OS name is: ${os.hostname()} & released version is: ${os.release()}`);
console.log(`OS architecture: ${os.arch()}`);

// Create HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("I am happy to learn full stack at PW Skills");
    res.end();
});
server.listen(8080, () => {
    console.log("Server is listening on port 8080");
});

// Event emitter
var eventEmitter = new events.EventEmitter();

// First event fire
eventEmitter.on('subscribe', () => {
    console.log("Thank you for subscribing to the channel");
});

// Get Max Listeners
eventEmitter.on('getMaxNumber', () => {
    console.log(eventEmitter.getMaxListeners());
});

// Set Max Listeners
eventEmitter.on('setMaxNumber', () => {
    eventEmitter.setMaxListeners(5);
    console.log(`The max listeners are ${eventEmitter.getMaxListeners()}`);
});

// Emitting events
eventEmitter.emit('subscribe');
eventEmitter.emit('getMaxNumber');
eventEmitter.emit('setMaxNumber');
