const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    const url = req.url; //parse url
    const method = req.method; //parse http method
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Enter your message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    if (url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => { //on allows us to listen to certain events ex. data, close, end, error ...
            body.push(chunk);
            console.log(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1]; //split is used because the expected output is "message=<user's message>"
            fs.writeFileSync("message.txt", message)
        });
        res.statusCode = 302; //status code 302 for redirection
        res.setHeader('Location', '/'); //Location is a default header accepted by the browser; '/' uses the host
        return res.end();
    }
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>My First NodeJS App</title></head>')
        res.write('<body><h1>Hello World!</h1></body>')
        res.write('</html>')
        res.end();
});

server.listen(3000);