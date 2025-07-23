
import kaplay from "kaplay";


const k = kaplay({
    background: [0,0,0],
    width: 1064,
    height: 764,
    letterbox:true,
    touchToMouse:true,
    global:false,
    pixelDensity: devicePixelRatio,
    debug: true,
    canvas:document.getElementById('canvas'),
})

export default k;




