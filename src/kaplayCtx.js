
import kaplay from "kaplay";


const k = kaplay({
    background: [177, 227, 180],
    width: 1064,
    height: 764,
    letterbox:true,
    touchToMouse:true,
    global:false,
    scale:4,
    pixelDensity: devicePixelRatio,
    debug: true,
    canvas:document.getElementById('canvas'),
})

export default k;




