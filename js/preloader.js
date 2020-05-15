var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
    	progressTxt = this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 30, '0%',{
             font: '25px', fill: 'white', fontWeight: 'normal', align: 'center'
        });
        this.progress.anchor.setTo(0.5, 0.5);
        this.game.load.onFileComplete.add(this.fileComplete, this);
  
        loadingTxt = this.add.text(this.game.world.centerX - 37,  this.game.world.centerY - 150, "Loading...", {
            font: '18px', fill: 'lightgrey', fontWeight: 'normal', align: 'center'
        });
        
        this.game.load.image("bg", "assets/images/sara.png");
        this.game.load.spritesheet("button", "assets/images/bubble-rect.png");
        this.game.load.image("gear", "assets/images/gearBtn2.png");
        this.game.load.image("ok", "assets/images/ok.png");
        this.game.load.image("musicBtn", "assets/images/musicBtn.png");
        this.game.load.image("panel", "assets/images/panel.png");  
        this.game.load.image("next", "assets/images/next.png");  

        this.game.load.audio('music1', 'assets/audio/music1.ogg');
        this.game.load.audio('music2', 'assets/audio/music2.ogg');
        this.game.load.audio('music3', 'assets/audio/music3.ogg');
        
        this.game.load.audio('sara1', 'assets/audio/sara1_need_to_help.ogg');
        this.game.load.audio('sara2', 'assets/audio/sara2_i_do_it.ogg');
        this.game.load.audio('sara3', 'assets/audio/sara3_maskila.ogg');
        this.game.load.audio('sara4', 'assets/audio/sara4_psicho.ogg');
        this.game.load.audio('sara5', 'assets/audio/sara5_ba.ogg');
        this.game.load.audio('sara6', 'assets/audio/sara6_ma.ogg');
        this.game.load.audio('sara7', 'assets/audio/sara7_zehu.ogg');
        this.game.load.audio('sara8', 'assets/audio/sara8_mekabel.ogg');
        this.game.load.audio('sara9', 'assets/audio/sara9_lama.ogg');
        this.game.load.audio('sara10', 'assets/audio/sara10_lama2.ogg');
        this.game.load.audio('sara11', 'assets/audio/sara11_kol_yom.ogg');
        this.game.load.audio('sara12', 'assets/audio/sara12.ogg');
        
        this.game.load.audio('sara13', 'assets/audio/sara13.ogg');
        this.game.load.audio('sara14', 'assets/audio/sara14.ogg');
        this.game.load.audio('sara15', 'assets/audio/sara15.ogg');
        this.game.load.audio('sara16', 'assets/audio/sara16.ogg');
        this.game.load.audio('sara17', 'assets/audio/sara17.ogg');
        this.game.load.audio('sara18', 'assets/audio/sara18.ogg');
        this.game.load.audio('sara19', 'assets/audio/sara19.ogg');
        this.game.load.audio('sara20', 'assets/audio/sara20.ogg');
        this.game.load.audio('sara21', 'assets/audio/sara21.ogg');
        this.game.load.audio('sara22', 'assets/audio/sara22.ogg');
        this.game.load.audio('sara23', 'assets/audio/sara23.ogg');
        this.game.load.audio('sara24', 'assets/audio/sara24.ogg');
    },
    
    create: function(){
        this.game.state.start("Game"); 
    }
};

preloader.prototype.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
    this.progress.text = progress+"%";
};