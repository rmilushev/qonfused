window.onload = function() {
  var gameWidth = 800, // game width in px
      gameHeight = 600; // game height in px
  var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'phaser-stage');

  game.state.add('Boot', PhaserBp.Boot);
  game.state.add('Preload', PhaserBp.Preload);
  game.state.add('MainMenu', PhaserBp.MainMenu);
  game.state.add('Game', PhaserBp.Game);

  game.state.start('Boot');
};
