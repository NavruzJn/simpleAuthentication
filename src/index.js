const express = require('express');
const http = require('http');
const bodyParser = require("body-parser");
const { UserService } = require('./db/services/UserService');
const { Database } = require("./db/database");
const app = express();
const server = http.Server(app);
const io = require('socket.io')(server);
const db = new Database();

app.use(express.static("public"));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.get('/', function (req, res) {
    console.log("Welcome");
});

require('socketio-auth')(io, {
    authenticate: function (socket, data, callback) {
        const userService = new UserService(db);
        const {username, password} = data;
        try {
            const user = userService.getUser(username, password);
            console.log(user);
            callback(null, user);
        } catch (error) {
            callback(error);
        }
    }
});

server.listen(9000);