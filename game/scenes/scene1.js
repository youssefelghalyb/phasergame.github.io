let keyA;
let keyS;
let keyD;
let keyF;
class StartScene extends Phaser.Scene{
    constructor(){
        super({
            key:'StartScene'
        })
    }

    create(){
    
        //Allow Keyboard interactions in the game 
        
        
         gameState.gameName = this.add.text(this.cameras.main.width * 0.38 , this.cameras.main.height * 0.38, 'Avoid the Bugs  ', { fontSize: '50px', fill: '#000000' })
         gameState.mod1 = this.add.text(this.cameras.main.width * 0.38 , this.cameras.main.height * 0.45, 'press a btn  to Select Junior MOD  ', { fontSize: '25px', fill: '#000000' })
         gameState.mod2 =  this.add.text(this.cameras.main.width * 0.38 , this.cameras.main.height * 0.50, 'press s btn to Select Senior MOD  ', { fontSize: '25px', fill: '#000000' })
         gameState.mod3 = this.add.text(this.cameras.main.width * 0.38 , this.cameras.main.height * 0.55, 'press d btn  to Select You Gonna Terminated  MOD  ', { fontSize: '25px', fill: '#000000' })
         gameState.mod4 = this.add.text(this.cameras.main.width * 0.38 , this.cameras.main.height * 0.60, 'press f btn  to Select Still Wanna Play ?   MOD  ', { fontSize: '25px', fill: '#000000' })

         gameState.chooseF = this.add.text(this.cameras.main.width * 0.30 , this.cameras.main.height * 0.34, '', { fontSize: '100px', fill: '#FF0000' })

         gameState.Go = this.add.text(this.cameras.main.width * 0.38 , this.cameras.main.height * 0.45, '', { fontSize: '25px', fill: '#000000' })

        gameState.keyboardActions = this.input.keyboard.createCursorKeys();

        
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

                

        
                
        gameState.mod = '';



    
        this.input.on('pointerup' , ()=>{
    
            if(gameState.mod != ''){
                this.scene.stop('StartScene')
                this.scene.start(gameState.mod)
            }else{
                gameState.chooseF.setText('Chose Mod First') 
                gameState.gameName.setText('')
            }
           })
    }



    update(){
        if(keyA.isDown) {
            gameState.mod = 'GameScene1'
            gameState.mod1.setText('')
            gameState.mod2.setText('')    
            gameState.mod3.setText('')   
            gameState.mod4.setText('') 
            gameState.chooseF.setText('')
            gameState.gameName.setText('Avoid the Bugs')
            gameState.Go.setText(`Click The Page to Go MOD => Junior`)
            gameState.gravity = 500
         } else if(keyS.isDown) {
            gameState.mod = 'GameScene2'
            gameState.mod1.setText('')
            gameState.mod2.setText('')    
            gameState.mod3.setText('')   
            gameState.mod4.setText('') 
            gameState.chooseF.setText('')
            gameState.gameName.setText('Avoid the Bugs')

            gameState.Go.setText('Click The Page to Go MOD => Senior')
            gameState.gravity = 1000


         } else if(keyD.isDown) {
            gameState.mod = 'GameScene3'
            gameState.mod1.setText('')
            gameState.mod2.setText('')    
            gameState.mod3.setText('')    
            gameState.mod4.setText('') 
            gameState.chooseF.setText('')
            gameState.gameName.setText('Avoid the Bugs')

            gameState.Go.setText('Click The Page to Go MOD => You Gonna Terminated')
            gameState.gravity = 1500
         } else if(keyF.isDown) {
            gameState.mod = 'GameScene4'
            gameState.mod1.setText('')
            gameState.mod2.setText('')    
            gameState.mod3.setText('')    
            gameState.mod4.setText('') 
            gameState.chooseF.setText('')
            gameState.gameName.setText('Avoid the Bugs')

            gameState.Go.setText('Click The Page to Go MOD => Still Wanna Play ? ')
            gameState.gravity = 1500


         } 
    }


}