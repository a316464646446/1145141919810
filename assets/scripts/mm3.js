var mm3_opt = {
    upgrades: [
        // todo: upgrades
        {//1
            desc: "mm<sup>4</sup> gain ×1.000e5",
            cost: E("1"),
            get unlocked() {
                return player.mm3_volumes.unl;
            }
        },
        {//2
            desc: "1-8<sup>th</sup> 4D Dimensions multiplier ×1.000e10",
            cost: E("2"),
            get unlocked() {
                return hasMM4Upg(7)
            }
        },
        {//3
            desc: "mm<sup>3.5</sup> multiplier to mm<sup>4</sup>'s formula be better<br>Before:log<sub>10</sub>(x)<sup>2</sup>÷10<br>After:log<sub>10</sub>(x)<sup>2.01</sup>÷10",
            cost: E("200"),
            get unlocked() {
                return hasMM3Upg(2)
            }
        },
        {//4
            desc: "mm<sup>3.5</sup> replicante speed ×10 (2x per second -> 2^10x per second)<br>When you buy mm<sup>3</sup> upgrades, you didn't cost your mm<sup>3</sup> volumes.",
            cost: E("2e6"),
            get unlocked() {
                return hasMM3Chal(3)
            }
        },
        {//5
            desc: "Unlock 4<sup>th</sup> mm<sup>3</sup> challenge.",
            cost: E("1.2e8"),
            get unlocked() {
                return hasMM3Upg(4)
            }
        },
        {//6
            desc: "弱化1<sup>st</sup> Softcap 50%",
            cost: E("230000000"),
            get unlocked() {
                return hasMM3Upg(5)
            }
        },
        {//7
            desc: "Buy 1 times dimensions multiplier become ×2.1",
            cost: E("230000000"),
            get unlocked() {
                return hasMM3Upg(6)
            }
        },
        {//8
            desc: "Buy 1 times dimensions multiplier become ×2.105",
            cost: E("1e300"),
            get unlocked(){
                return hasMM3Upg(7)
            }
        },
       /* {//9
            desc: "There is no 1<sup>st</sup> softcap anymore.",
            cost: E("e6.31e5"),
            get unlocked() {
                return hasMM3Upg(8)
            }
        }*/
    ]
}

function hasMM3Upg(id) {
    if (id===2 && player.inMM3Challenge === 2){
        return false;
    }
    return player.mm3_volumes.upgrades.includes(id)

}


function no_reward_mm3_reset() {

    player.volumes = E("11");
    reset_dimensions(1);
    player.galaxy_count = E("0");

    if (!hasMM4Upg(8)){
        player.mm35_volumes.points = E("1")
    }
    player.mm35_volumes.san_xiang_bo_points = E("0")
    player.mm3_volumes.unl = true;

    player.tickspeed = E("0");
    player.time.real_mm3 = 0;
    player.time.mm3 = E(0);
}

function doMM3reset() {

    player.mm3_volumes.points = player.mm3_volumes.points.add(tmp.mm3.gain);
    player.volume_generated.mm3 = player.volume_generated.mm3.add(tmp.mm3.gain);
    no_reward_mm3_reset()
    tmp.mm3.confirm = 0;
}
function doMM3resetManmade(){
    if (player.inMM3Challenge){
        if (player.volumes.gte(mm3_challenges[player.inMM3Challenge-1].complete_requirement)){
            mm3HandleChallenge()
        }
    }else if (player.volumes.gte("1.797e308")){
        doMM3reset();
    }
}

function buyMM3Upg(id) {
    if (player.mm3_volumes.points.gte(mm3_opt.upgrades[id - 1].cost)) {
        if (!hasMM3Upg(4)){
            player.mm3_volumes.points = player.mm3_volumes.points.sub(mm3_opt.upgrades[id - 1].cost)
        }
        player.mm3_volumes.upgrades.push(id)
    }
}

function getMM3UpgText(){
    if (app.hover_3upg === 0) return;
    let a = "[mm<sup>3</sup> Upgrade "
    a = a.concat(app.hover_3upg)
    a = a.concat("]<br>")
    a = a.concat(mm3_opt.upgrades[app.hover_3upg-1].desc)
    a = a.concat("<br>")
    if (!hasMM3Upg(4)){
        a = a.concat("Cost: ")
    }else{
        a = a.concat("Requirements: ")
    }
    a = a.concat(mm3_opt.upgrades[app.hover_3upg-1].cost.format())
    a = a.concat(" mm<sup>3</sup>")
    if (mm3_opt.upgrades[app.hover_3upg-1].effectDisplay !== void 0){
        a = a.concat("<br>")
        a = a.concat(`<span class="green">Currently: ${mm3_opt.upgrades[app.hover_3upg-1].effectDisplay}</span>`)
    }
    return a
}

function getMM3UpgClassName(id) {
    let upgradeClassName = 'mm3_upg';
    if(hasMM3Upg(id)) {
        upgradeClassName += '_bought';
    }
    if(player.mm3_volumes.points.gte(mm3_opt.upgrades[id - 1].cost) && !hasMM3Upg(id)) {
        upgradeClassName += '_buyable';
    }
    //if (typeof (mm4_upgrades[id-1].disableInChal5) == "boolean") upgradeClassName = "mm4_upg_disabled"

    return upgradeClassName
}

function getMM3resetButton() {
    if (player.inMM3Challenge){
        let req = mm3_challenges[player.inMM3Challenge-1].complete_requirement;
        return  'Reach ' + display_volumes(req)+' to do a mm<sup>3</sup>reset, get ' +format(tmp.mm3.gain)+ 'mm<sup>3</sup> volumes'
        + (player.options.percentUpg ?("(" + player.volumes.logarithm(10).div(req.logarithm(10)).mul(100).min(100).format() + "%)" ): "")
    
    }else{
        return  'Reach '+display_volumes(E('1.797e308'))+' to do a mm<sup>3</sup>reset, get ' +format(tmp.mm3.gain)+ 'mm<sup>3</sup> volumes'
        + (player.options.percentUpg ?("(" + player.volumes.logarithm(10).div("308.2547155599167").mul(100).min(100).format() + "%)" ): "")
    }
}

function sacrif(id){
    if (id==1 && player.volumes.gte(tmp.mm45.sacrifice_goal) && player.mm3_volumes.sacrifice_times.lt(1000)){
        
        player.mm3_volumes.mm45_points = player.mm3_volumes.mm45_points.add(1)
        player.mm3_volumes.sacrifice_times = player.mm3_volumes.sacrifice_times.add(1)
    }
}
function mm45BuyCost(id){
    if (id===1){
        return E(0.5).mul(player.mm3_volumes.mm45buyables[0]+1).min(5)
    }
    if (id===2){
        return E(0.5).mul(player.mm3_volumes.mm45buyables[1]+1).min(5)

    }
    if (id===3){
        return E(player.mm3_volumes.mm45buyables[2]).min(5)

    }
}
function mm45Buy(id){
    if (player.mm3_volumes.mm45_points.gte(mm45BuyCost(id))){
        player.mm3_volumes.mm45_points=player.mm3_volumes.mm45_points.sub(mm45BuyCost(id))
        player.mm3_volumes.mm45buyables[id-1]++
    }
}
function mm45resetopt(){
    player.mm3_volumes.mm45buyables = [0,0,0]
    player.mm3_volumes.mm45_points=E(0)
    player.mm3_volumes.sacrifice_times = E(0)
}
function mm45refund(){
    player.mm3_volumes.mm45_points=player.mm3_volumes.sacrifice_times
    player.mm3_volumes.mm45buyables = [0,0,0]


}
function mm3DevComplete(){
    if (app.developer_mode){
        player.mm3_volumes.challenges.push(player.selectedMM3Challenge)
    }
}