var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","3114e98b-6ee7-45e3-9c68-238d4a76878b","6b9f2360-f290-4556-8714-de315fa13019","f74b6304-9e60-4bf7-b4eb-9b179c9691e6","307f590e-81af-4f8e-bc45-903afaf313bd","98a521b3-231e-4b1b-ac67-f3f003d405fa"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"OVU9bw0aA1x3.TFI3AU.6AE2JjFThOq5","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"3114e98b-6ee7-45e3-9c68-238d4a76878b":{"name":"carrot_gold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/LAW.Xj.ys6BFIpkx7tRDDUCTXl9sLAn7/category_food/carrot_gold.png","frameSize":{"x":78,"y":70},"frameCount":1,"looping":true,"frameDelay":2,"version":"LAW.Xj.ys6BFIpkx7tRDDUCTXl9sLAn7","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":70},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LAW.Xj.ys6BFIpkx7tRDDUCTXl9sLAn7/category_food/carrot_gold.png"},"6b9f2360-f290-4556-8714-de315fa13019":{"name":"rockSnow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wqyWFq1ZjqadkykLPRGIxFqNSt7SWfYL/category_obstacles/rockSnow.png","frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":2,"version":"wqyWFq1ZjqadkykLPRGIxFqNSt7SWfYL","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wqyWFq1ZjqadkykLPRGIxFqNSt7SWfYL/category_obstacles/rockSnow.png"},"f74b6304-9e60-4bf7-b4eb-9b179c9691e6":{"name":"rockIce_1","sourceUrl":"assets/api/v1/animation-library/gamelab/gIGJ.1uWK69Stk7gn_BcFEkB6mS_I_.A/category_obstacles/rockIce.png","frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":2,"version":"gIGJ.1uWK69Stk7gn_BcFEkB6mS_I_.A","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gIGJ.1uWK69Stk7gn_BcFEkB6mS_I_.A/category_obstacles/rockIce.png"},"307f590e-81af-4f8e-bc45-903afaf313bd":{"name":"rockGrass_1","sourceUrl":"assets/api/v1/animation-library/gamelab/c7njzBqNr5dJqCb8jXbsXQfJEdmMskSf/category_obstacles/rockGrass.png","frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":2,"version":"c7njzBqNr5dJqCb8jXbsXQfJEdmMskSf","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/c7njzBqNr5dJqCb8jXbsXQfJEdmMskSf/category_obstacles/rockGrass.png"},"98a521b3-231e-4b1b-ac67-f3f003d405fa":{"name":"ground2.png_1","sourceUrl":"assets/v3/animations/82PZXfpEcbL7m0WV6UBZRiGVbPUYllvEvZdfFhk-Gh4/98a521b3-231e-4b1b-ac67-f3f003d405fa.png","frameSize":{"x":2377,"y":12},"frameCount":1,"looping":true,"frameDelay":4,"version":"gkfRQCx8OQh09.FIYBrVGKJbBTpKBZyw","loadedFromSource":true,"saved":true,"sourceSize":{"x":2377,"y":12},"rootRelativePath":"assets/v3/animations/82PZXfpEcbL7m0WV6UBZRiGVbPUYllvEvZdfFhk-Gh4/98a521b3-231e-4b1b-ac67-f3f003d405fa.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var monkey=createSprite(41,335,20,20);
monkey.setAnimation("monkey");
monkey.scale=0.1;
monkey.x=50;

var invisibleGround = createSprite(101,381,400,5);
invisibleGround.visible = false;

var ground = createSprite(196,376,400,20);
ground.setAnimation("ground2.png_1");
ground.x = ground.width /2;

var bananaGroup = createGroup();
var obstacleGroup = createGroup();

textSize(18);
textFont("Georgia");
textStyle(BOLD);

monkey.collide(invisibleGround);


function draw() {
background("white");

monkey.collide(ground);

ground.velocityX = -6;

if (ground.x < 0){
      ground.x = ground.width/2;
      
    }


    
if(keyDown("space") && monkey.y >= 359){
 monkey.velocityY = -12 ;
}   

monkey.velocityY = monkey.velocityY + 0.8;

spawnbananas();
spawnObstacles();

obstacleGroup.setLifetimeEach(-1);
bananaGroup.setLifetimeEach(-1);

drawSprites(); 
}
function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(218,364,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
   
   obstacle.setAnimation("rockGrass_1");
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
 obstacle.lifetime = 70;
    
    
    
  
  }
}

function spawnbananas() {
  //write code here to spawn the banana
  if (World.frameCount % 60 === 0) {
    var banana = createSprite(400,320,40,10);
    banana.y = randomNumber(280,320);
    banana.setAnimation("carrot_gold_1");
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 134;
    
    //adjust the depth
    banana.depth = monkey.depth;
   monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
}

  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
