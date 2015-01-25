{"filter":false,"title":"boot.js","tooltip":"/library/js/states/boot.js","undoManager":{"mark":56,"position":56,"stack":[[{"group":"doc","deltas":[{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":4},"end":{"row":15,"column":6},"action":"insert","lines":["preload: function () {","","        //  Here we load the assets required for our preloader (in this case a background and a loading bar)","        // If you want background for preloader uncomment and add background image","        // this.load.image('preloaderBackground', 'assets/img/preloader_background.jpg');","        this.load.image('preloaderBar', 'assets/img/preloader_bar.png');","","    },"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":8},"end":{"row":13,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":9},"end":{"row":13,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":24},"end":{"row":17,"column":0},"action":"insert","lines":["",""]},{"start":{"row":17,"column":0},"end":{"row":17,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":8},"end":{"row":17,"column":115},"action":"insert","lines":["//  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":35},"end":{"row":19,"column":0},"action":"insert","lines":["",""]},{"start":{"row":19,"column":0},"end":{"row":19,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":8},"end":{"row":20,"column":50},"action":"insert","lines":["//  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:","        this.stage.disableVisibilityChange = true;"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":8},"end":{"row":21,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":9},"end":{"row":21,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":8},"end":{"row":22,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":9},"end":{"row":22,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":8},"end":{"row":23,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":9},"end":{"row":23,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":8},"end":{"row":25,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":8},"end":{"row":24,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":9},"end":{"row":24,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":50},"end":{"row":21,"column":0},"action":"insert","lines":["",""]},{"start":{"row":21,"column":0},"end":{"row":21,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":8},"end":{"row":35,"column":9},"action":"insert","lines":["if (this.game.device.desktop) {","            //  If you have any desktop specific settings, they can go in here","            this.scale.pageAlignHorizontally = true;","        } else {","            //  Same goes for mobile settings.","            //  In this case we're saying \"scale the game, no lower than 480x260 and no higher than 1024x768\"","            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;","            this.scale.minWidth = 480;","            this.scale.minHeight = 260;","            this.scale.maxWidth = 1024;","            this.scale.maxHeight = 768;","            this.scale.forceLandscape = true;","            this.scale.pageAlignHorizontally = true;","            this.scale.setScreenSize(true);","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":8},"end":{"row":22,"column":0},"action":"insert","lines":["",""]},{"start":{"row":22,"column":0},"end":{"row":22,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":0},"end":{"row":45,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":4},"end":{"row":45,"column":8},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":8},"end":{"row":45,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":9},"end":{"row":46,"column":55},"action":"insert","lines":["/  By this point the preloader assets have loaded to the cache, we've set the game settings","        //  So now let's start the real preloader going"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":47},"end":{"row":45,"column":0},"action":"insert","lines":["",""]},{"start":{"row":45,"column":0},"end":{"row":45,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":2},"action":"insert","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":13},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":9},"end":{"row":15,"column":10},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":8},"end":{"row":15,"column":9},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":50},"end":{"row":15,"column":51},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":51},"end":{"row":15,"column":52},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":51},"end":{"row":15,"column":52},"action":"remove","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":52},"end":{"row":15,"column":53},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":53},"end":{"row":15,"column":54},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":68},"end":{"row":15,"column":69},"action":"insert","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":69},"end":{"row":15,"column":70},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":70},"end":{"row":15,"column":71},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":71},"end":{"row":15,"column":72},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":72},"end":{"row":15,"column":73},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":73},"end":{"row":15,"column":74},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":74},"end":{"row":15,"column":75},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":8},"end":{"row":44,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":9},"end":{"row":44,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":39},"end":{"row":46,"column":45},"action":"remove","lines":["111111"]},{"start":{"row":46,"column":39},"end":{"row":46,"column":45},"action":"insert","lines":["DBDBDB"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":8},"end":{"row":50,"column":36},"action":"remove","lines":["//  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1","        this.input.maxPointers = 1;","        //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:","        this.stage.disableVisibilityChange = true;","        ","        if (this.game.device.desktop) {","            //  If you have any desktop specific settings, they can go in here","            this.scale.pageAlignHorizontally = true;","        } else {","            //  Same goes for mobile settings.","            //  In this case we're saying \"scale the game, no lower than 480x260 and no higher than 1024x768\"","            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;","            this.scale.minWidth = 480;","            this.scale.minHeight = 260;","            this.scale.maxWidth = 1024;","            this.scale.maxHeight = 768;","            this.scale.forceLandscape = true;","            this.scale.pageAlignHorizontally = true;","            this.scale.setScreenSize(true);","        }","        //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;","        //this.scale.minHeight = 800;","        //this.scale.minWidth = 600;","        //this.scale.pageAlignHorizontally = true;","        //this.scale.pageAlignVertically = true;","        //this.stage.forcePortrait = false;","        this.input.addPointer();","        this.stage.backgroundColor = '#DBDBDB';","        ","        //  By this point the preloader assets have loaded to the cache, we've set the game settings","        //  So now let's start the real preloader going","        this.state.start('Preload');"]},{"start":{"row":19,"column":8},"end":{"row":41,"column":1},"action":"insert","lines":["//Boot State","var PhaserBp = {};","","PhaserBp.Boot = function(game) {","  console.log(\"Boot State Initiated\");","};","","PhaserBp.Boot.prototype = {","","    create: function() {","        this.input.maxPointers = 1;","        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;","        this.scale.minHeight = 800;","        this.scale.minWidth = 600;","        this.scale.pageAlignHorizontally = true;","        this.scale.pageAlignVertically = true;","        this.stage.forcePortrait = false;","        this.input.addPointer();","        this.stage.backgroundColor = '#111111';","","        this.state.start('Preload');","    }","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":44,"column":0},"action":"remove","lines":["'use strict';","","//Boot State","var PhaserBp = {};","","PhaserBp.Boot = function(game) {","  console.log(\"Boot State Initiated\");","};","","PhaserBp.Boot.prototype = {","    preload: function () {","","        //  Here we load the assets required for our preloader (in this case a background and a loading bar)","        // If you want background for preloader uncomment and add background image","        // this.load.image('preloaderBackground', 'assets/img/preloader_background.jpg');","        this.load.image('preloaderBar', 'assets/images/preloader_bar_phaser.png');","","    },","    create: function() {","        //Boot State","var PhaserBp = {};","","PhaserBp.Boot = function(game) {","  console.log(\"Boot State Initiated\");","};","","PhaserBp.Boot.prototype = {","","    create: function() {","        this.input.maxPointers = 1;","        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;","        this.scale.minHeight = 800;","        this.scale.minWidth = 600;","        this.scale.pageAlignHorizontally = true;","        this.scale.pageAlignVertically = true;","        this.stage.forcePortrait = false;","        this.input.addPointer();","        this.stage.backgroundColor = '#111111';","","        this.state.start('Preload');","    }","}","    }","}",""]},{"start":{"row":0,"column":0},"end":{"row":22,"column":1},"action":"insert","lines":["//Boot State","var PhaserBp = {};","","PhaserBp.Boot = function(game) {","  console.log(\"Boot State Initiated\");","};","","PhaserBp.Boot.prototype = {","","    create: function() {","        this.input.maxPointers = 1;","        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;","        this.scale.minHeight = 800;","        this.scale.minWidth = 600;","        this.scale.pageAlignHorizontally = true;","        this.scale.pageAlignVertically = true;","        this.stage.forcePortrait = false;","        this.input.addPointer();","        this.stage.backgroundColor = '#111111';","","        this.state.start('Preload');","    }","}"]}]}]]},"ace":{"folds":[],"scrolltop":431.5,"scrollleft":0,"selection":{"start":{"row":48,"column":39},"end":{"row":48,"column":39},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1422180748494,"hash":"01b49ccfd876d448d5e29be421ee4a7653666293"}