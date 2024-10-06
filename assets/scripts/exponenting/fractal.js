// Fracture Ray(不是)

function getFractalEffect() {
    let temp1 = "";
    if (player.exponenting.fractal.fractals.lt(10)) {
        temp1 = temp1.concat("Get 10 6D Fractal unlock 6DFr-1<sup>st</sup> Effect<br>")
    } else {
        temp1 = temp1.concat("mm<sup>5</sup> gain ×" + tmp.mm6.fractal.fracEff1.formatA() + "<br>")
    }
    if (player.exponenting.fractal.fractals.lt(1000)) {
        temp1 = temp1.concat("Get 1,000 6D Fractal unlock 6DFr-2<sup>nd</sup> Effect<br>")
    }else{
        temp1 = temp1.concat("mm<sup>5.95</sup> gain ×"+(tmp.mm6.fractal.fracEff2.formatA() + "<br>"))
    }
    if (player.exponenting.fractal.fractals.lt(12000)) {
        temp1 = temp1.concat("Get 12,000 6D Fractal unlock 6DFr-3<sup>rd</sup> Effect<br>")
    }else{
        temp1 = temp1.concat("6D Fractal gain ×"+(tmp.mm6.fractal.fracEff3.formatA()) + "<br>")
    }
    return temp1
}
function getFractalEngineCost2(){
    return E(6).add(player.exponenting.fractal.fractalEngineMK2.mul(3))
}
function buyFractalEngine2(){
    if (player.exponenting.fractal.fractalEngine.gte(getFractalEngineCost2())){
        if (!hasMM6Upg(12)){
            player.exponenting.fractal.fractalEngine = E(0)
        }
        player.exponenting.fractal.fractalEngineMK2 = player.exponenting.fractal.fractalEngineMK2.add(1)
        no_reward_mm6_reset()

    }
}
function updateFractal(){
    if (player.exponenting.fractal.fractalEngine.add(player.exponenting.fractal.fractalEngineMore).gte(1)){
        player.exponenting.fractal.fractals = player.exponenting.fractal.fractals.add(
            getFractalProduce().mul(diff2)
        )
    }
    player.exponenting.fractal.fractalEngineMore = player.exponenting.fractal.fractalEngineMore.add(
        getFractalProduce2().mul(diff2)
    )
    handleAutobuyMM595()
}
function getFractalProduce(){
    return player.exponenting.fractal.fractalEngine.add(player.exponenting.fractal.fractalEngineMore).mul(E.pow(1.1,player.exponenting.fractal.fractalEngine.add(player.exponenting.fractal.fractalEngineMore))).mul(tmp.mm6.fractal.fracEff3).pow(ihraed("6F22"))
}
function getFractalProduce2(){
    if (!hasMM6Upg(12)){
        return E.mul(0.1,player.exponenting.fractal.fractalEngineMK2)
    }else{
        return E.mul(0.1,player.exponenting.fractal.fractalEngineMK2.pow(3))
    }
}
function getFractalEngineCost() {
    return ExpantaNum.pow(2.64454438, player.exponenting.fractal.fractalEngine)
}
function buyFractalEngine() {
    player.exponenting.points.gte(getFractalEngineCost()) ? (function(){
        player.exponenting.points = player.exponenting.points.sub(getFractalEngineCost())
        player.exponenting.fractal.fractalEngine=player.exponenting.fractal.fractalEngine.add(1)
    })() : (function(){})()
}
function bulkFractalEngine() {
    let bulkTimes = player.exponenting.fractal.fractalEngine.logarithm(2.64454438).floor().sub(
        getFractalEngineCost().logarithm(2.64454438)
    ).floor()

    player.exponenting.fractal.fractalEngine = player.exponenting.fractal.fractalEngine.add(bulkTimes)

}