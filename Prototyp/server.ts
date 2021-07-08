import { createServer } from "http";
import { Server } from "socket.io";

function makeid(length: any){
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwqyz0123456789';
    //var charactersLength = characters.length;
    for ( var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    
    }
    return result;
}
const state = new Map<any, any>();
const clientRooms = new Map<string, any>()
export let clientNumber: any;

const httpServer= createServer()
export const io= new Server(httpServer);

io.on('connection', (client:any) => {

    client.on('newGame', handleNewGame);
    client.on('joinGame', handleJoinGame);


    function handleJoinGame(gameCode: any) {
        io.sockets.adapter.rooms.get(gameCode)
        const room: any= io.sockets.adapter.rooms.get(gameCode);

        let allUsers;
        if(room) {
            allUsers = room.sockets;
        }

        let numClients = 0;
        if (allUsers) {
            numClients = Object.keys(allUsers).length;
        }

        if (numClients === 0) {
            client.emit('unknownGame');
            return;
         }else if (numClients > 1) {
             client.emit('tooManyPlayers');
             return;
         }

         clientRooms.set(client.id, gameCode);

         client.join(gameCode);
         clientNumber = 2;
         client.emit('init', 2)

    }

    function handleNewGame(){
        let roomName = makeid(5);
        clientRooms.set(client.id, roomName);
        client.emit('gameCode', roomName);

        state.set(roomName, initGame());

        client.join(roomName);
        clientNumber = 1;
        client.emit('init', 1);
    }

});

function initGame  (){
    story.html
}

function emitGameState(roomName: any, state: any) {

    io.sockets.in(roomName)
    .emit('gameState', JSON.stringify(state));
}


io.listen(3000);