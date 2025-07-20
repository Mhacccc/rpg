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
