import k from "./kaplayCtx";
import "./assets.js"

const SPEED = 200;
let isAttacking = false;
let facing = "down";



async function main(){
    const mapData = await(await fetch("./assets/map.json")).json()
    const layers = mapData.layers
    


    const map = k.add([
    k.sprite("map"),
    k.pos(0),
    k.scale(2), 
    k.z(5),
    ])
    
    k.add([
        k.sprite("door"),
        k.scale(2),
        k.pos(-225,32),
        k.z(20)
    ])



    const player = k.add([
        k.sprite("player-idle"),
        k.pos(500,280),
        k.scale(2.5),
        k.anchor("center"),
        k.area({ shape: new k.Rect(k.vec2(0,0),15,22)}),
        k.body(),
        k.z(10)
    ]);
    




    for (const layer of layers) {
        if (layer.name === "boundaries") {
            for (const boundary of layer.objects) {
                map.add([
                    k.area({
                        shape: new k.Rect(k.vec2(0), boundary.width, boundary.height),
                    }),
                    k.body({ isStatic: true }),
                    k.pos(boundary.x, boundary.y),
                    boundary.name,
                ]);
                 console.log(map.pos,boundary.x, boundary.y)
            }

           

            continue;
            }

        if(layer.name === "walk-through"){
            for(const through of layer.objects)
                
                map.add([
                    k.area({
                        shape: new k.Rect(k.vec2(0), through.width, through.height),
                    }),
                    k.pos(through.x, through.y),
                    through.name,
                    
                ])
        }

  }




   
    player.onCollide("door",()=>{
        map.z = 15
    })
    player.onCollideEnd("door",()=>{
        map.z = 5
    })
    
    k.onMousePress("left",()=>{
        if(player.sprite!=="attack"){
            switchAnimation("attack", `attack-${facing}`)
        }
    })

    k.onKeyDown("s", () => {
        facing = "down";
        player.move(0, SPEED)
        if (!isAttacking&&player.sprite !== "player-walk") {
            switchAnimation("player-walk", "walk-down")
        }
    })

    k.onKeyDown("w", () => {
        facing = "up";
        console.log(player.sprite)
        player.move(0, -SPEED)
        if (!isAttacking && player.sprite !== "player-walk") {
            switchAnimation("player-walk", "walk-up")
        }
    })
    k.onKeyDown("a", () => {
        facing = "left";
        player.move(-SPEED, 0)
        if (!isAttacking && player.sprite !== "player-walk") {
            switchAnimation("player-walk", "walk-side")
        }
    })

    k.onKeyDown("d", () => {
        facing = "left";
        player.flipX = true;
        player.move(SPEED,0)
        if (!isAttacking && player.sprite !== "player-walk") {
            switchAnimation("player-walk", "walk-side")
        }
    })






    function switchAnimation(spriteName, animName) {
        player.use(k.sprite(spriteName));   // changes the sprite texture and anims
        player.play(animName);           // plays the anim from the new sprite
        

        ["attack-down","attack-left","attack-up"].forEach(dir=>{
            if(animName===dir){
                isAttacking = true;
                player.onAnimEnd(()=>{
                        isAttacking = false;
                    switchAnimation("player-idle","idle")
                })
            }
        })

    }



    ["w","a","s","d"].forEach(key=>{
        k.onKeyRelease(key,()=>{
            if(!isAttacking &&player.sprite !=="player-idle"){
                switchAnimation("player-idle", "idle")
            }
        })
    })
}
main();



