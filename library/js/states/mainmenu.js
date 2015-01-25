'use strict';

// MainMenu State
PhaserBp.MainMenu = function(game) {
	console.log("MainMenu State Initiated");
  	
  	this.music = null;
    this.playButton = null;
};

// Pause flag
var paused = true;

PhaserBp.MainMenu.prototype = {
    create: function () {
	    // We've already preloaded our assets, so let's kick right into the Main Menu itself.
        // Here all we're doing is playing some music and adding a picture and button
        // Naturally I expect you to do something significantly better :)

        // Here we add music
        this.music = this.add.audio('menuMusic');
        //this.music.play();

        // Add menu background
        this.add.sprite(0, 0, 'menuBg');

        // Add play button for game start
        this.playButton = this.add.button(gameWidth / 2 - 48, 260, 'playButton', this.startGame, this, 'buttonOver', 'buttonOut', 'buttonOver');

        // Add a pause button
        this.btnMusicPause = this.game.add.button(20, 20, 'btnMusicPause', this.pauseMusic, this);

        // Let's build a pause panel
        this.musicPanel = new MusicPanel(this.game);
        this.game.add.existing(this.musicPanel);

        // Enter play music mode
        this.music.play();
        this.playMusic();
    },

	update: function () {
    	
    	// Do some nice funky main menu effect here
	},
	
	startGame: function (pointer) {

        // Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
        this.music.stop();

        // And start the actual game
        this.state.start('Game');
    },

    pauseMusic: function () {
        if (!paused) {
            // Enter pause
            paused = true;

            // Show pause panel
            this.musicPanel.show();

            // Pause music
            this.music.pause();
        }
    },

    playMusic: function () {
        if (paused) {
            // Leaving pause
            paused = false;
            // Hide pause panel
            this.musicPanel.hide();

            // Resume music
            this.music.resume();
        }
    }
};

// Create our pause panel extending Phaser.Group
var MusicPanel = function (game, parent) {
    // Super call to Phaser.Group
    Phaser.Group.call(this, game, parent);

    // Add play button
    this.btnMusicPlay = this.game.add.button(20, 20, 'btnMusicPlay', function () {
        this.game.state.getCurrentState().playMusic();
    }, this);

    this.add(this.btnMusicPlay);

    // Place it out of bounds
    this.x = 0;
    this.y = -100;
};

MusicPanel.prototype = Object.create(Phaser.Group.prototype);
MusicPanel.constructor = MusicPanel;

MusicPanel.prototype.show = function () {
	// Add tween
    this.game.add.tween(this).to({y: 0}, 500, Phaser.Easing.Bounce.Out, true);
};
MusicPanel.prototype.hide = function () {
	// If you want tween uncomment
    //this.game.add.tween(this).to({y: -350}, 1, Phaser.Easing.Linear.NONE, true);
    this.y = -350;
};