//window.onload = start;

document.addEventListener("deviceready", start, false);
document.addEventListener("pause", onPause, false);
document.addEventListener("resume", onResume, false);

function start(){ 
    WIDTH = 850; 
    HEIGHT = 1100; 
    
    w = window.innerWidth * window.devicePixelRatio;
    h = window.innerHeight * window.devicePixelRatio;

    game = new Phaser.Game(WIDTH, HEIGHT, Phaser.CANVAS, "game");    
      
    game.state.add("Boot", boot);
    game.state.add("Preloader", preloader);
    game.state.add("Game", gameMain);
    
    game.state.start("Boot");  
}

function onPause(){
    game.paused = true;
}

function onResume(){
    game.paused = false;
    setTimeout(function(){
        try{
            StatusBar.hide();
        }catch(e){}   
    }, 1000);
}

var boot = function(game){};
 
boot.prototype = {
    create: function(){
        game.stage.backgroundColor = '#335';
        font = 'David';
        
        if (this.game.device.desktop){
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
 
            this.scale.maxWidth = w; 
            this.scale.maxHeight = h; 
            
            this.game.scale.pageAlignHorizontally = true;
        } 
        
        else {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            this.scale.maxWidth = window.innerWidth * window.devicePixelRatio;
            this.scale.maxHeight = window.innerHeight * window.devicePixelRatio;
            
            this.scale.forceOrientation(true, false );
        }

        game.state.start('Preloader');
    }
};
