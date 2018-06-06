if (typeof require !== 'undefined') {
  var Ship = require('./ship.js');
}
function Player(id, color, name){
  this.id = id;
  this.name = name;

  this.kills = 0;
  this.deaths = 0;

  this.dead = false;
  this.color = color;

  this.respawnShip = function(pos){
    console.log(pos);
    this.ship = new Ship(this.color, pos);
    this.dead = false;
  }

  this.killShip = function(ship){
    this.ship = undefined;
    this.dead = true;
  }
}

Player.createFromPlayer = function(player){
  return {
    id: player.id,
    name: player.name,
    kills: player.kills,
    deaths: player.deaths,
    dead: player.dead,
    color: player.color,
    ship : Ship.createFromShip(player.ship)
  }
}

if (typeof exports !== 'undefined') {
  module.exports = Player;
}
