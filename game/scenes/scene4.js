
class GameScene3 extends Phaser.Scene{
  constructor(){
      super({
          key:'GameScene3'
      })
  }



   preload() {
      this.load.image('bug1', 'https://content.codecademy.com/courses/learn-phaser/physics/bug_1.png')
      this.load.image('bug2', 'https://content.codecademy.com/courses/learn-phaser/physics/bug_2.png')
      this.load.image('bug3', 'https://content.codecademy.com/courses/learn-phaser/physics/bug_3.png')
      this.load.image('platform', 'https://content.codecademy.com/courses/learn-phaser/physics/platform.png')
      this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/physics/codey.png')
    }

    


     create() {
      // instade of this.add.sprite to apply physics to the asset 
      gameState.player = this.physics.add.sprite(this.cameras.main.width * 0.5 , this.cameras.main.height * 0.3 , 'codey').setScale(0.9)
  
      //instade of this.add.image 
      //this make this asset under physics umbrella But not effecting by gravity
       gameState.platform = this.physics.add.staticGroup()
       let thePlatform = gameState.platform.create(this.cameras.main.width * 0.5, this.cameras.main.height * 1 ,'platform')
  
       //Make a new Scale for the platform
       thePlatform.setScale(10 , 1)
      //Update the platform with the new scale 
       thePlatform.refreshBody()
      //setCollideWorldBounds(bool) => to make the asset not go out of the screen 
       gameState.player.setCollideWorldBounds(true)
  
       //Make collider between to asset when the player hit platform stops
       this.physics.add.collider(gameState.platform   , gameState.player )
  
  
       //Allow Keyboard interactions in the game 
       gameState.keyboardActions = this.input.keyboard.createCursorKeys();
      
  
  
  
  
       /**BUGS */
       //To add Group of assets
         gameState.bugs = this.physics.add.group();
  
        function bugGen (){
          //make random place for x axis to the same width of the game 
          const XCoord = Math.random() * this.cameras.main.width ;
  
          gameState.bugs.create(XCoord , 10 , 'bug1')
  
        }
  
  
        //Loop and gen bugs 
        //This function make a callbackBack function to bugGen every 1000 ms
        const genBugLoops = this.time.addEvent({
          delay:25,
          callback:bugGen,
          callbackScope:this,
          loop:true
        })
  
        this.physics.add.collider(gameState.bugs , gameState.platform , function(bug){
          bug.destroy()
  
          //Update the score 
          gameState.score += 10;
  
          //Update the score text
          gameState.scoreText.setText(`Score: ${gameState.score}`)
        })
       /**BUGS */
  
  
       /** Scoring **/
       gameState.scoreText = this.add.text(this.cameras.main.width * 0.5 , this.cameras.main.height * 0 , 'Score : 0' , {fontSize:'12px' , fill:"#000000"})
       gameState.heighScore = typeof variable !== 'undefined' ? gameState.heighScore : 0  
       gameState.heighScoreText = this.add.text(195 , 475 , `highest Score :${gameState.heighScore}` , {fontSize:'12px' , fill:"#000000"})
  
  
       /** Scoring **/
  
  
       /** Lose Game Status **/
       //Used arrow function becuase i call this in the fn to point on scene 
        this.physics.add.collider(gameState.player , gameState.bugs , ()=> {
          //Stop Generating Bugs
          genBugLoops.destroy()
  
          //Pause the Game
         this.physics.pause()
         setTimeout(() => {
          console.log(gameState.score)
          this.scene.stop('GameScene1')
          this.scene.start('GameOver')
          
      }, 1000); 
        })
  
  
  
       /** Lose Game Status **/
  
  
       setInterval(()=>{
  
       } , 5000)
  
    
    
      }



    
     update() {
  
      if(gameState.keyboardActions.left.isDown){
          //make asset moves left with speed 100 
          gameState.player.setVelocityX(-150)
      }else if(gameState.keyboardActions.right.isDown){
          //make asset moves left with speed 100 
          gameState.player.setVelocityX(150)
      }else{
          gameState.player.setVelocityX(0)
      }
  
  
    }
}