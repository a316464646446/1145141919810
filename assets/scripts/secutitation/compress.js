function tryUnlockCompress() {
    if (player.secutitation.mm57.gte(100000)){
        player.compress.unl = true;
    }
}
function compressButton() {
    if (player.compress.inCompress){
        if (player.compress.highestMM4inCompress.lt(E30825)){
            return "Exit Compress, reach "+display_volumes(E30825)+" to get mm<sup>5.9</sup>"
        }else if (player.volumes.lt(player.compress.highestMM4inCompress)){
            return "Exit Compress, reach "+display_volumes(player.compress.highestMM4inCompress)+" to get mm<sup>5.9</sup>"
        }else{
            return "Exit Compress, gain "+tmp.mm59.gain.format() + " mm<sup>5.9</sup>"
        }
    }else{
        return "Enter Compress"
    }
}
function doubleExponentMult(x,mult){
    return E.pow(10,E.pow(10,x.logarithm(10).logarithm(10).mul(mult)))
}
function getMM595UpgradeCost(x){
    switch(x){
        case 1:
            if (player.compress.buyables[0] === void 0){ 
                player.compress.buyables[0] = E(0)
            }
            return E(100).mul(E.pow(8.64454438,player.compress.buyables[0]))
            // max buy: mm595/100.logarithm(8.64454438).ceil()
        case 2:
            if (player.compress.buyables[1] === void 0){ 
                player.compress.buyables[1] = E(0)
            }
            return E(2000).mul(E.pow(2.3,player.compress.buyables[1]))
            // max buy: mm595/2000.logarithm(2.3).ceil()
        case 3:
            if (player.compress.buyables[2] === void 0){ 
                player.compress.buyables[2] = E(0)
            }
            if (player.compress.buyables[2].lt(87))
                return E(1000).mul(E.pow(1.7,player.compress.buyables[2]))
            else
                return K9E15
    }

}
function buyMM595Upgrade(x){
    if (getMM595UpgradeCost(x).lte(player.compress.mm595)){
        if (!hasMM6Upg(9)) player.compress.mm595 = player.compress.mm595.sub(getMM595UpgradeCost(x))
        player.compress.buyables[x-1] = player.compress.buyables[x-1].add(1)
    }

}

function checkMM595UpgradeBuyable(x){
    return getMM595UpgradeCost(x).gt(player.compress.mm595)
}
function getMM595UpgradeHint(x){
    if (player.compress.mm595.lt(getMM595UpgradeCost(x))){
        let last=getMM595UpgradeCost(x).sub(player.compress.mm595).div(tmp.mm59.mm595gain)
        if (last.isInfinite()){
            return "Never affordable"
        }else{
            return formatTime.fromSeconds(last);
        }
    }else{
        return "Buyable"
    }

}

function handleCompress(){
    if (player.fakeGoInfinite) return;
    if (player.compress.inCompress){
        player.compress.mm59 = player.compress.mm59.add(tmp.mm59.gain)
        player.compress.highestMM4inCompress = E.max(player.compress.highestMM4inCompress,player.volumes)
    }
    player.compress.inCompress = !player.compress.inCompress
    doMM5reset()
}
