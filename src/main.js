import k from "./kaplayCtx";
import "./assets.js"



const SPEED = 200;

const player = k.add([
    k.sprite("player-idle"),
    k.pos(40, 30),
    k.scale(2),
    k.anchor("center"),
    k.area({ shape: new k.Rect(k.vec2(0,0),15,22)}),
    k.body(),
]);

k.add([
    k.rect(100,100),
    k.pos(400,500),
    k.outline(),
    k.area(),
    k.body({isStatic:true}),
])


k.onUpdate(()=>{
    k.setCamPos(player.worldPos());
})


    k.onKeyDown("down", () => {
        player.move(0, SPEED)
        if (player.sprite !== "player-walk") {
            switchAnimation("player-walk", "walk-down")
        }
    })

    k.onKeyDown("up", () => {
        player.move(0, -SPEED) 
        if (player.sprite !== "player-walk") {
            switchAnimation("player-walk", "walk-up")
        }
    })
    k.onKeyDown("left", () => {
        player.move(-SPEED, 0)
        if (player.sprite !== "player-walk") {
            switchAnimation("player-walk", "walk-side")
        }
    })

    k.onKeyDown("right", () => {
        player.flipX = true;
        player.move(SPEED, 0)
        if (player.sprite !== "player-walk") {
            switchAnimation("player-walk", "walk-side")
        }
    })

function switchAnimation(spriteName, animName) {
    player.use(k.sprite(spriteName));   // changes the sprite texture and anims
    player.play(animName);           // plays the anim from the new sprite
}

["up","down","left","right"].forEach(key=>{
    k.onKeyRelease(key,()=>{
        if(player.sprite !=="player-idle"){
            switchAnimation("player-idle", "idle")
        }
    })
})