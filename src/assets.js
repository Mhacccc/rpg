import k from "./kaplayCtx"

k.loadSprite("player-walk", "./assets/Unarmed_Walk_full.png", {
    sliceX: 6,
    sliceY: 4,
    anims: {
        "idle": 0,
        "walk-down": {
            from: 0,
            to: 5,
            speed: 10,
            loop: true,
        },
        "walk-side": {
            from: 6,
            to: 11,
            speed: 10,
            loop: true,
        },
        "walk-up": {
            from: 18,
            to: 23,
            speed: 10,
            loop: true,
        }

    }
});




k.loadSprite("player-idle", "./assets/Unarmed_Idle_full.png", {
    sliceX: 12,
    sliceY: 4,
    anims: {
        "idle": {
            from: 0,
            to: 39,
            speed: 6,
            pingpong:true,
            loop: true
        },
    }
});

k.loadSprite("attack","assets/Sword_attack_full.png",{
    sliceX:8,
    sliceY:4,
    anims:{
        "attack-down":{
            from:0,
            to:7,
            speed:50,
          
        },
        "attack-left":{
            from:8,
            to:15,
            speed:50, 
        },

        "attack-up":{
            from:24,
            to:31,
            speed:50, 
        },

    }
})



k.loadSprite("map","./assets/map.png");
k.loadSprite("door","./assets/Door.png")
