import "./kaplayCtx";
import "./assets.js"



const SPEED = 100;

const player = add([
    sprite("player-idle"),
    pos(40, 30),
    scale(2),
    anchor("center"),
    area({ shape: new Rect(vec2(0,0),15,22)}),
    body(),
]);

add([
    rect(100,100),
    pos(400,500),
    outline(),
    area(),
    body({isStatic:true}),
])


onUpdate(()=>{
    setCamPos(player.worldPos());
})


onKeyDown("down", () => {
    player.move(0, SPEED)
    if (player.sprite !== "player-walk") {
        switchAnimation("player-walk", "walk-down")
    }
})

onKeyDown("up", () => {
    player.move(0, -SPEED) //move(x,y) x=horizontal direction, y=vertical direction
    if (player.sprite !== "player-walk") {
        switchAnimation("player-walk", "walk-up")
    }
})
onKeyDown("left", () => {
    player.move(-SPEED, 0)
    if (player.sprite !== "player-walk") {
        switchAnimation("player-walk", "walk-side")
    }
})

onKeyDown("right", () => {
    player.flipX = true;
    player.move(SPEED, 0)
    if (player.sprite !== "player-walk") {
        switchAnimation("player-walk", "walk-side")
    }
})

function switchAnimation(spriteName, animName) {
    player.use(sprite(spriteName));   // changes the sprite texture and anims
    player.play(animName);           // plays the anim from the new sprite
}


onKeyRelease("down", () => {
    if (player.sprite !== "player-idle") {
        switchAnimation("player-idle", "idle")
    }
})
onKeyRelease("up", () => {
    if (player.sprite !== "player-idle") {
        switchAnimation("player-idle", "idle")
    }
})
onKeyRelease("left", () => {
    if (player.sprite !== "player-idle") {
        switchAnimation("player-idle", "idle")
    }
})
onKeyRelease("right", () => {
    if (player.sprite !== "player-idle") {
        switchAnimation("player-idle", "idle")
    }
})



