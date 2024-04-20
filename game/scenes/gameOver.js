class GameOver extends Phaser.Scene{
    constructor(){
        super({
            key:'GameOver'
        })
    }

    create(){
        console.log(gameState)
        this.add.text(this.cameras.main.width * 0.45 , this.cameras.main.height * 0.43, 'Game Over  ', { fontSize: '50px', fill: '#ff0000' })
        let Score = this.add.text(this.cameras.main.width * 0.48 , this.cameras.main.height * 0.49, 'Score : 0  ', { fontSize: '25px', fill: '#FF0000' })

         this.add.text(this.cameras.main.width * 0.42 , this.cameras.main.height * 0.53, 'Click To Start A New Game ', { fontSize: '25px', fill: '#00000' })

         if(gameState.mod == 'GameScene4'){
             this.add.text(this.cameras.main.width * 0.37, this.cameras.main.height * 0.60, '(Bit You To reach score 10,000 in this mod) ', { fontSize: '25px', fill: '#0000FF' })
         }

        Score.setText(`Score: ${gameState.score}`)

        this.input.on('pointerup' , ()=>{
            this.scene.start('GameOver')
            this.scene.start('StartScene')
        })
    }
}