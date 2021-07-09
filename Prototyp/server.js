"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const io = new socket_io_1.Server("'http://localhost:3000'");
const socket = server.io;
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwqyz0123456789';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
const state = new Map();
const clientRooms = new Map();
const gameScreen = document.getElementById('gameScreen');
const initialScreen = document.getElementById('initialScreen');
const newGameButton = document.getElementById('newGameButton');
const joinGameButton = document.getElementById('joinGameButton');
const invitationCodeInput = document.getElementById('invitationCode');
newGameButton.addEventListener('click', newGame);
joinGameButton.addEventListener('click', joinGame);
const httpServer = http_1.createServer();
exports.io = new socket_io_1.Server(httpServer);
io.on('connection', (client) => {
    client.on('newGame', handleNewGame);
    client.on('joinGame', handleJoinGame);
    function handleJoinGame(gameCode) {
        io.sockets.adapter.rooms.get(gameCode);
        const room = io.sockets.adapter.rooms.get(gameCode);
        let allUsers;
        if (room) {
            allUsers = room.sockets;
        }
        let numClients = 0;
        if (allUsers) {
            numClients = Object.keys(allUsers).length;
        }
        clientRooms.set(client.id, gameCode);
        client.join(gameCode);
        exports.clientNumber = 2;
        client.emit('init', 2);
    }
    function handleNewGame() {
        let roomName = makeid(5);
        clientRooms.set(client.id, roomName);
        client.emit('gameCode', roomName);
        state.set(roomName, initGame());
        client.join(roomName);
        exports.clientNumber = 1;
        client.emit('init', 1);
    }
});
function joinGame() {
    const gameCode = invitationCodeInput.value;
    socket.emit('joinGame', gameCode);
    initGame();
}
function newGame() {
    socket.emit('newGame');
    initGame();
}
function initGame() {
    initialScreen.style.display = "none";
    gameScreen.style.display = "block";
}
io.listen(3000);
//# sourceMappingURL=server.js.map