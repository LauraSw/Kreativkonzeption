"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const socket_io_1 = require("socket.io");
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwqyz0123456789';
    //var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
const state = new Map();
const clientRooms = new Map();
const httpServer = http_1.createServer();
exports.io = new socket_io_1.Server(httpServer);
exports.io.on('connection', (client) => {
    client.on('newGame', handleNewGame);
    client.on('joinGame', handleJoinGame);
    function handleJoinGame(gameCode) {
        exports.io.sockets.adapter.rooms.get(gameCode);
        const room = exports.io.sockets.adapter.rooms.get(gameCode);
        let allUsers;
        if (room) {
            allUsers = room.sockets;
        }
        let numClients = 0;
        if (allUsers) {
            numClients = Object.keys(allUsers).length;
        }
        if (numClients === 0) {
            client.emit('unknownGame');
            return;
        }
        else if (numClients > 1) {
            client.emit('tooManyPlayers');
            return;
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
function initGame() {
    story.html;
}
function emitGameState(roomName, state) {
    exports.io.sockets.in(roomName)
        .emit('gameState', JSON.stringify(state));
}
exports.io.listen(3000);
//# sourceMappingURL=server.js.map