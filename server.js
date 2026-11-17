const http = require('http');

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Node.js Kubernetes App</title>
    <style>
        body {
            font-family: Arial;
            text-align: center;
            background: #eef4ff;
            padding: 100px 20px;
        }
        h1 { color: #2563eb; }
        p { font-size: 20px; }
    </style>
</head>
<body>
    <h1>Successfully Deployed on Kubernetes!</h1>
    <p>Node.js application running inside a Docker container.</p>
    <p>Deployed using Kubernetes Deployment and Service.</p>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Node.js server running on port 3000');
});
