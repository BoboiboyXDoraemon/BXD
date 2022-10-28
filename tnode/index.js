import http from "http"
const server = http.createServer((req, res) =>{
    res.write("<h1>ffello</h1>")
    res.end()
})

server.listen(3000)