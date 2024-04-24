
import http, { createServer } from "http"

const port = 8000;
const hostname = "127.0.0.1";

const data = [{
    Name: "Chandan Lakhara",
    Phone: 7691852665,
    City: "Jaipur"
}]

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    // for normal text "text/plain"
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(data));

})
server.listen(port, hostname, () => { console.log("server Started") })