const mm5_upgrades = [
    {//1
        desc: "8<sup>th</sup> 4D Dimension exponentplier +0.05",
        get require(){
            return player.secutitation.points.gte(1000)
        },
        get require_desc(){
            return "1000 secutitation points"
        },
        get unlocked() {
            return player.secutitation.secutitation_reset_times.gt("0");
        },
        bought_do(){
            player.secutitation.points = player.secutitation.points.sub(1000)

        }
    },/*
    {//2
        desc: "2<sup>nd</sup> 4D Dimension exponentplier +0.15",
        get require(){
            return player.secutitation.points.gte(20000)
        },
        get require_desc(){
            return "20000 secutitation points"
        },
        get unlocked() {
            return hasMM5Upg(1);
        },
        bought_do(){
            player.secutitation.points = player.secutitation.points.sub(1024)
        }
    },
    {//3
        desc: "1<sup>st</sup> 4D Dimension exponentplier +0.05",
        get require(){
            return player.secutitation.points.gte(2048)
        },
        get require_desc(){
            return "2048 secutitation points"
        },
        get unlocked() {
            return hasMM5Upg(2);
        },
        bought_do(){
            player.secutitation.points = player.secutitation.points.sub(2048)
        }
    },
    {//4
        desc: "All 4D Dimensions multiplier ^1.02",
        get require(){
            return player.secutitation.mm5_volumes.energy.gte("1e25")
        },
        get require_desc(){
            return "1e25 mm<sup>5</sup> energies"
        },
        get unlocked() {
            return hasMM5Upg(3);
        },
        bought_do(){
        }
    }*/
]


function hasMM5Upg(id) {
    return player.secutitation.upgrades.includes(id)

}
function buyMM5Upg(id) {
    if (mm5_upgrades[id - 1].require) {
        player.secutitation.upgrades.push(id)
        mm5_upgrades[id - 1].bought_do()
    }
}

function getMM5UpgText(){
    if (app.hover_5upg === 0) return;
    let a = "[mm<sup>5</sup> Upgrade "
    a = a.concat(app.hover_5upg)
    a = a.concat("]<br>")
    a = a.concat(mm5_upgrades[app.hover_5upg-1].desc)
    a = a.concat("<br>")
    a = a.concat("Cost: ")
    a = a.concat(mm5_upgrades[app.hover_5upg-1].require_desc)
    if (mm5_upgrades[app.hover_5upg-1].effectDisplay !== void 0){
        a = a.concat("<br>")
        a = a.concat(`<span class="green">Currently: ${mm5_upgrades[app.hover_5upg-1].effectDisplay}</span>`)
    }
    return a
}

function getMM5UpgClassName(id) {
    let upgradeClassName = 'mm5_upg';
    if(hasMM5Upg(id)) {
        upgradeClassName += '_bought';
    }
    //if (typeof (mm4_upgrades[id-1].disableInChal5) == "boolean") upgradeClassName = "mm4_upg_disabled"

    return upgradeClassName
}