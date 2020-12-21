const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world, dirt1=[], grass=[], dirt2=[], dirt3=[], gold=[], titanium=[], hellstone=[], stone=[], bgImg;
var lastPrism, TheCyborg, player, background, enchantedBook, sword, tree1, tree2, tree3, tree4, Boss, minion, drill;
var player;
var dirtImg = "images/dirt.png", grassImg = "images/Grass Block.png";
var playerImg = "images/player.png", cyborgImg = "images/The cyborg.png", minionImg = "images/Tyrant minion.png";
var treeImg = "images/Tree 2.png", stoneImg = "images/stone block.png", goldImg = "images/Gold_Ore.png";
var hellstoneImg = "images/Hellstone.png", titaniumImg = "images/Titanium_Ore.png"
var swordImg = "images/The sword.png";


function preload (){
  bgImg = loadImage("images/terraria background.jpg");
}

function setup (){
  var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    wall();

    tree1 = new Tree(displayWidth/2+54,displayHeight-displayHeight/4-150,treeImg);
    tree2 = new Tree(displayWidth/2-54,displayHeight-displayHeight/4-150,treeImg);
    player = new Player(displayWidth/2+411,displayHeight/4-95,playerImg);
    TheCyborg = new Player(displayWidth/2+452,displayHeight/4-95,cyborgImg);
    minion = new Player(displayWidth/2+535,displayHeight/4-95,minionImg);
    sword = new Player(displayWidth/2-455,displayHeight/4-95,swordImg);
}
 function draw () {
  background(bgImg);
  Engine.update(engine);

  for(var i = 0; i< dirt1.length; i = i+10){
    dirt1[i].display();
    
  }

  for(var i = 0; i< grass.length; i = i+10){
    grass[i].display();
    
  }

  for(var i = 0; i< dirt2.length; i = i+10){
    dirt2[i].display();
    
  }

  for(var i = 0; i< dirt3.length; i = i+10){
    dirt3[i].display();
    
  }

  for(var i = 0; i< stone.length; i = i+10){
    stone[i].display();
    
  }

  for(var i = 0; i< hellstone.length; i = i+10){
    hellstone[i].display();
    
  }

  for(var i = 0; i< titanium.length; i = i+10){
    titanium[i].display();
    
  }

  for(var i = 0; i< gold.length; i = i+10){
    gold[i].display();
    
  }
  tree1.display();
  tree2.display();
  player.display();
  TheCyborg.display();
  minion.display();
  sword.display();
 }

function keyPressed() {
  if(keyCode === 32 && player.body.position.y>=displayHeight/2) {
    Matter.Body.setVelocity(player.body,{x:0,y:-7});
  }

  if(keyCode === RIGHT_ARROW  ) {
    Matter.Body.setPosition(player.body,{x:player.body.position.x+20,y:player.body.position.y});
  }

  if(keyCode === LEFT_ARROW  ) {
    Matter.Body.setPosition(player.body,{x:player.body.position.x-20,y:player.body.position.y});
  }
}

 function wall () {
  for (var dirt = 0; dirt < width; dirt = dirt+4.8) {
    dirt1.push( new Block(dirt, displayHeight-displayHeight/4,dirtImg));
  }

  for (var dirt = 0; dirt < width; dirt = dirt+4.8) {
    dirt2.push( new Block(dirt, displayHeight-displayHeight/4+40,dirtImg));
  }

  for (var dirt = 0; dirt < width; dirt = dirt+4.8) {
    dirt3.push( new Block(dirt, displayHeight-displayHeight/4+80,dirtImg));
  }

  for(var i = 0; i< width; i = i+4.5){
    grass.push( new Block(i, displayHeight-displayHeight/4-40,grassImg));
    
  }

  for(var i = 0; i< width; i = i+4.5){
    gold.push( new Block(i, displayHeight-displayHeight/4+160,goldImg));
    
  }

  for(var i = 0; i< width; i = i+4.5){
    stone.push( new Block(i, displayHeight-displayHeight/4+120,stoneImg));
    
  }

  for(var i = 0; i< width; i = i+4.5){
    hellstone.push( new Block(i, displayHeight-displayHeight/4+200,hellstoneImg));
    
  }

  for(var i = 0; i< width; i = i+4.5){
    titanium.push( new Block(i, displayHeight-displayHeight/4+240,titaniumImg));
    
  }
 }