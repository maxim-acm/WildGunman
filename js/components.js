/**
 * Created by Maxim on 07.10.2015.
 */

var Game = function () {
    this.start();
    this.init();

};

Game.prototype.init = function() {
    this.score = 0;
    this.loss = 0;
    this.over = false;
    this.won = false;

    this.level = 1;

};

Game.prototype.setup = function() {

};

Game.prototype.start = function() {
    this.runMan();
};

Game.prototype.runMan = function() {

};

Game.prototype.upLevel = function() {
  this.level++;

    switch (true) {
        case (this.level == 2):
            this.time += -5;
            break;
        case  (this.level == 3):
            this.time += -10;
            break;
        case  (this.level == 4):
            this.time += -15;
            break;
    }

};

Game.prototype.gameWin = function() {
    this.over = true;
};

Game.prototype.gameOver = function() {
    this.over = true;
};