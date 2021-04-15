
var gameState=0;
var playerCount;
var database;
var form;
var player;
var game;
var canvas;


function setup(){
 
  
  canvas=createCanvas(500,500);

  database = firebase.database();
  
  game=new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  
  
}


