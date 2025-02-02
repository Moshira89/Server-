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
    fs.readFile('home.html', 'utf-8', (err, data) => {
      if (err) {
        console.error('Error reading home.html:', err);  
        res.statusCode = 500;
        res.end('Error loading home page');
        return;
      }
      res.end(data);  
    });
  } else if (pathname === '/page1') {
    fs.readFile('page1.html', 'utf-8', (err, data) => {
      if (err) {
        console.error('Error reading page1.html:', err);
        res.statusCode = 500;
        res.end('Error loading page 1');
        return;
      }
      res.end(data); 
    });
  } else if (pathname === '/page2') {
    fs.readFile('page2.html', 'utf-8', (err, data) => {
      if (err) {
        console.error('Error reading page2.html:', err);
        res.statusCode = 500;
        res.end('Error loading page 2');
        return;
      }
      res.end(data); 
    });
  } else if (pathname === '/content1') {
    const content = query.name ? `${query.name}'s content` : 'Default content';
    fs.readFile('content1.txt', 'utf-8', (err, data) => {
      if (err) {
        console.error('Error reading content1.txt:', err); 
        res.statusCode = 500;
        res.end('Error loading content1.txt');
        return;
      }
      res.end(`${data} - ${content}`);
    });
  } else if (pathname === '/content2') {
    const content = query.message || 'No message provided';
    fs.readFile('content2.txt', 'utf-8', (err, data) => {
      if (err) {
        console.error('Error reading content2.txt:', err);  
        res.statusCode = 500;
        res.end('Error loading content2.txt');
        return;
      }
      res.end(`${data}: ${content}`);
    });

  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});










