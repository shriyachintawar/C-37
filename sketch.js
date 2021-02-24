var db;
var form,player,game;
var gameState = 0;
var playerCount,allPlayers;
var distance = 0;
function setup(){
    createCanvas(500,500);
    db = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    
}

