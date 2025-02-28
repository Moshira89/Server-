const http = require('http');
const fs = require("fs");
const url = require('url');
const PORT = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    res.setHeader('Content-Type', 'text/html');

    if (pathname === '/' || pathname === '/home') {
        fs.readFile('./data/home.html', (err, data) => {
            if (err) {
                console.error('Error reading home.html:', err);
                res.statusCode = 500;
                res.end('Error loading home page');
                return;
            }
            res.statusCode = 200;
            res.end(data);
        });

    } else if (pathname === '/page1') {
        fs.readFile('./data/page1.html', (err, data) => {
            if (err) {
                console.error('Error reading page1.html:', err);
                res.statusCode = 500;
                res.end('Error loading page 1');
                return;
            }
            res.statusCode = 200;
            res.end(data);
        });

    } else if (pathname === '/page2') {
        fs.readFile('./data/page2.html', (err, data) => {
            if (err) {
                console.error('Error reading page2.html:', err);
                res.statusCode = 500;
                res.end('Error loading page 2');
                return;
            }
            res.statusCode = 200;
            res.end(data);
        });

    } else if (pathname === '/contact') {
        fs.readFile('./data/contact.html', (err, data) => {
            if (err) {
                console.error('Error reading contact.html:', err);
                res.statusCode = 500;
                res.end('Error loading contact page');
                return;
            }
            res.statusCode = 200;
            res.end(data);
        });

    } else if (pathname === '/content1') {  
        const name = query.name ? query.name : "Guest";
        fs.readFile('./data/content1.txt',(err, data) => {
            if (err) {
                console.error('Error reading content1.txt:', err);
                res.statusCode = 500;
                res.end('Error loading content');
                return;
            }
            res.statusCode = 200;
            res.end(`${data} - Welcome, ${name}!`);
        });

    } else if (pathname === '/content2') {
        const message = query.message || "No message provided";
        fs.readFile('./data/content2.txt',(err, data) => {
            if (err) {
                console.error('Error reading content2.txt:', err);
                res.statusCode = 500;
                res.end('Error loading content');
                return;
            }
            res.statusCode = 200;
            res.end(`${data} - Your message: ${message}`);
        });

    } else {
        res.statusCode = 404;
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>404 Not Found</title>
            </head>
            <body>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
            </body>
            </html>
        `);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});













