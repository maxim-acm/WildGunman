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

    this.canFire = false;
    this.userFailFire = false;

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
            if (__self.userFailFire == false) {
                __self.startShooting();
            }

        }, 3000);

};

Game.prototype.startShooting = function () {
    console.log('startShooting!');
    this.canFire = true;
    this.manFire();

};

Game.prototype.manFire = function() {
    var __self = this;

        this.timerId = setTimeout(function () {
            console.log('man Fire!');
            __self.gameOver();

        }, __self.speed);

};

Game.prototype.userFire = function() {
    console.log('user fire!');
    var __self = this;
    if (__self.canFire == false) {
        __self.userFailFire = true;
        __self.gameOver();
    }

    else if (__self.canFire == true) {
        clearTimeout(__self.timerId);
        __self.nextLevel();
    }

};

Game.prototype.gameOver = function () {
    console.log('Game Over!');
};

Game.prototype.nextLevel = function () {

    if (this.level !==7) {
        this.level++;
        console.log('Next Level ' + this.level);
        this.speed -= 100;
        this.canFire = false;
        this.userFailFire = false;
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







