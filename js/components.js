/**
 * Created by Maxim on 07.10.2015.
 */
(function(window, $){

var Game = function () {
    this.init();
    this.start();
};

Game.prototype.init = function () {
    this.level = 1;
    this.speed = 800;
    this.moveTime = 5000;

    this.canFire = false;
    this.userFailFire = false;

    this.timerId;

    this.timePrepeareToFire = function() {
        var min = 1000,
            max = 3000;
        return Math.random() * (max - min) + min ;
    }
};

Game.prototype.start = function () {
    var __self = this;
    $('.menu__a').click(function(){
        $('.game__start').toggleClass('display-none');
        $('.game__man').toggleClass('display-block');
        setTimeout(function(){
            __self.moveMan();
        }, 2000);
    });

};

Game.prototype.moveMan = function() {
    var __self = this;
    console.log('move man!');

    $('.gunman_time').html((__self.speed) / 1000);

    $('.game__man').toggleClass('move-man');
    $('.game__man').toggleClass('going-man');

    setTimeout(function(){
        __self.prepeareToFire();
    }, __self.moveTime)
};

Game.prototype.prepeareToFire = function() {
    var __self = this;
    console.log('wait');

    $('.game__man').one("click", function() {
            __self.userFire();
        console.log('click!');

    });

    $('.game__man').toggleClass('going-man');
    $('.game__man').toggleClass('man-position-in-wait');

        setTimeout(function () {
            if (__self.userFailFire == false) {
                __self.startShooting();
            }

        }, __self.timePrepeareToFire());

};

Game.prototype.startShooting = function () {
    console.log('startShooting!');
    $('.game__status').toggleClass('display-block');
    $('.game__status').html("FIRE!");
    this.canFire = true;
    this.manFire();
    this.timer(new Date().getTime());

};


Game.prototype.timer = function (t) {
    var __self = this;
    var tNow;

    function run() {
        tNow = new Date().getTime();

        if (__self.canFire == true) {
                var res = ((tNow - t) / 1000).toFixed(2);

                setTimeout(run, 1);

                var tUser = document.querySelector('.user_time');
                tUser.innerHTML = res;
        }
    }
    run();

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
    this.speed = 800;
    var __self = this;
    $('.game__man').off("click");
    console.log('Game Over!');
    $('.game__status').html("YOU LOSS!");
    $('.game__over-paranja').toggleClass('display-block');

    setTimeout(function(){
        $('.game__status').removeClass('display-block');

        $('.game__start').toggleClass('display-none');
        $('.game__over-paranja').toggleClass('display-block');

        $('.game__man').removeClass('display-block');
        $('.game__man').removeClass('move-man');
        $('.game__man').removeClass('man-position-in-wait');
        __self.canFire = false;
        __self.userFailFire = false;
    }, 3000);
};

Game.prototype.nextLevel = function () {
    var __self = this;
    if (this.level !==7) {
        $('.game__status').toggleClass('display-block');

        $('.game__man').off("click");
        $('.game__man').toggleClass('move-man');
        $('.game__man').toggleClass('man-position-in-wait');
        this.level++;
        console.log('Next Level ' + this.level);
        this.speed -= 100;
        this.canFire = false;
        this.userFailFire = false;
       setTimeout(function(){
         __self.moveMan();
       }, 1000);
    }
    else {
        this.won();
    }
};

Game.prototype.won = function() {
    $('.game__status').html("YOU WON!");
    console.log("Won!");
};

var game = new Game();

})(window, jQuery);





