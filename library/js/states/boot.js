'use strict';

//Boot State
var PhaserBp = {};

PhaserBp.Boot = function(game) {
  console.log("Boot State Initiated");
};

PhaserBp.Boot.prototype = {
    preload: function () {

        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        // If you want background for preloader uncomment and add background image
        // this.load.image('preloaderBackground', 'assets/img/preloader_background.jpg');
        this.load.image('preloaderBar', 'assets/images/preloader_bar_phaser.png');

    },
    create: function() {
        //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
        this.input.maxPointers = 1;
        //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        this.stage.disableVisibilityChange = true;
        
        if (this.game.device.desktop) {
            //  If you have any desktop specific settings, they can go in here
            this.scale.pageAlignHorizontally = true;
        } else {
            //  Same goes for mobile settings.
            //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = 480;
            this.scale.minHeight = 260;
            this.scale.maxWidth = 1024;
            this.scale.maxHeight = 768;
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
            this.scale.setScreenSize(true);
        }
        //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //this.scale.minHeight = 800;
        //this.scale.minWidth = 600;
        //this.scale.pageAlignHorizontally = true;
        //this.scale.pageAlignVertically = true;
        //this.stage.forcePortrait = false;
        this.input.addPointer();
        this.stage.backgroundColor = '#DBDBDB';
        
        //  By this point the preloader assets have loaded to the cache, we've set the game settings
        //  So now let's start the real preloader going
        this.state.start('Preload');
    }
}
