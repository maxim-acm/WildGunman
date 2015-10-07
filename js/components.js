/**
 * Created by Maxim on 07.10.2015.
 */
var Game = function () {
    this.init();
    this.start();
};

Game.prototype.init = function () {
    this.level = 1;
    this.speed = 800;
    this.moveTime = 2000;

    this.userShoot = false;

    this.timerId;
};

Game.prototype.start = function () {
    this.moveMan();
};

Game.prototype.moveMan = function() {
    var __self = this;
    console.log('move man!');

    setTimeout(function(){
        __self.prepeareToFire();
    }, 2000);
};

Game.prototype.prepeareToFire = function() {
    var __self = this;
    console.log('wait');


        setTimeout(function () {
            if (__self.userShoot == false) {
                __self.startShooting();
            }

        }, 3000);

};

Game.prototype.startShooting = function () {
    console.log('startShooting!');
    this.manFire();



};

Game.prototype.manFire = function() {
    var __self = this;

        this.timerId = setTimeout(function () {

            if (__self.userShoot == false) {
                __self.gameOver();
                console.log('Man Fire!');
            }
        }, 5000);

};

Game.prototype.userFire = function() {
    console.log('user fire!');
    clearTimeout(this.timerId);
    this.userShoot = true;
    this.nextLevel();
};

Game.prototype.gameOver = function () {
    console.log('Game Over!');
};

Game.prototype.nextLevel = function () {

    if (this.level !==7) {
        console.log('Next Level ' + this.level);
        this.level++;
        this.userShoot = false;
        this.start();
    }
    else {
        this.won();
    }
};

Game.prototype.won = function() {
    console.log("Won!");
};

var game = new Game();







