  
  const gameState = {
    //Define Init Score
    score:0,
    gravity :0
  };
  
  const config = {
    type: Phaser.CANVAS,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: "b9eaff",
    physics: {
      default: 'arcade',
      arcade: {
        //power of gravity
        gravity: { y: 800 },
        //visual the physics actions
        debug: false,
      }
    },
    scene: [StartScene  , GameScene1 , GameScene2 , GameScene3 , GameScene4 , GameOver]
  }
  
  const game = new Phaser.Game(config)
  