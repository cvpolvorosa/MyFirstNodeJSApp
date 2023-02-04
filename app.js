const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url; //parse url
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Enter your message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First NodeJS App</title></head>')
    res.write('<body><h1>Hello World!</h1></body>')
    res.write('</html>')
    res.end();
});

server.listen(3000);