function getRealmm61() {
    return player.exponenting.tower.from6DFractal.sub(player.exponenting.tower.spent)
}
const mm6_upgrades = [
    {//1
        desc: "All 4D Dimensions exponentplier mores based on 6D Fractals",
        get require(){
            return getRealmm61().gte(15)
        },
        get require_desc(){
            return "15 mm<sup>6.1</sup>"
        },
        unlocked: true,
        bought_do() {
            player.exponenting.tower.spent = player.exponenting.tower.spent.add(15)
        },
        get effect(){
            if (hasMM6Upg(8)){
                return player.exponenting.fractal.fractals.slog().slog().div(2.7)

            }
            return player.exponenting.fractal.fractals.slog().slog().div(3)
        },
        get effectDisplay() {
            return `+${this.effect.formatA()} more`
        }
    },
    {//2
        desc: "4D Volumes softcap^1 lates based on 6D Fractals",
        get require() {
            return getRealmm61().gte(2)
        },
        get require_desc(){
            return "2 mm<sup>6.1</sup>"
        },
        get unlocked(){
            return hasMM6Upg(1)
        },
        bought_do() {
            player.exponenting.tower.spent = player.exponenting.tower.spent.add(2)
        },
        get effect(){
            return player.exponenting.fractal.fractals.slog().div(3).add(1).max(1)
        },
        get effectDisplay() {
            return `^${this.effect.formatA()} later`
        }
    },
    {//3
        desc: "Force unlock Compress",
        get require() {
            return player.exponenting.fractal.fractalEngine.gte(5)
        },
        get require_desc(){
            return "5 Fractal Engines"
        },
        get unlocked(){
            return hasMM6Upg(2)
        },
        bought_do() {
        },
    },
    {//4
        desc: "Unlock Fractal Engine MK2",
        get require() {
            return player.volume_generated.mm6.gte(200)
        },
        get require_desc(){
            return "Total 200 mm<sup>6</sup>"
        },
        get unlocked(){
            return hasMM6Upg(3)
        },
        bought_do() {
        },

    },
    {//5
        desc: "Keep 5D Dimensions when reseting",
        get require() {
            return getRealmm61().gte(5)
        },
        get require_desc(){
            return "5 mm<sup>6.1</sup>"
        },
        get unlocked(){
            return hasMM6Upg(4)
        },
        bought_do() {
            player.exponenting.tower.spent = player.exponenting.tower.spent.add(5)
        },

    },
    {//6
        desc: "Gain more mm<sup>6</sup> based on 6D Fractals",
        get require() {
            return getRealmm61().gte(50)
        },
        get require_desc(){
            return "50 mm<sup>6.1</sup>"
        },
        get unlocked(){
            return hasMM6Upg(5)
        },
        bought_do() {
            player.exponenting.tower.spent = player.exponenting.tower.spent.add(50)
        },
        get effect(){
            return player.exponenting.fractal.fractals.slog().mul(200)
        },
        get effectDisplay() {
            return `×${this.effect.formatA()}`
        }

    },
    {//7
        desc: "Buying mm<sup>6.1</sup> doesn't cost fractals, you can buy max",
        get require() {
            return getRealmm61().gte(10)
        },
        get require_desc(){
            return "10 mm<sup>6.1</sup>"
        },
        get unlocked(){
            return hasMM6Upg(6)
        },
        bought_do() {
            player.exponenting.tower.spent = player.exponenting.tower.spent.add(10)
        }
    },
    {//8
        desc: "Improve 1<sup>st</sup> mm<sup>6</sup> upgrade formula",
        get require() {
            return getRealmm61().gte(150)
        },
        get require_desc(){
            return "150 mm<sup>6.1</sup>"
        },
        get unlocked(){
            return hasMM6Upg(7)
        },
        bought_do() {
            player.exponenting.tower.spent = player.exponenting.tower.spent.add(150)
        }
    },
    {//9
        desc: "Buying mm<sup>5.95</sup> upgrades doesn't cost. You can auto buy mm<sup>5.95</sup> upgrades",
        get require() {
            return getRealmm61().gte(10)
        },
        get require_desc(){
            return "10 mm<sup>6.1</sup>"
        },
        get unlocked(){
            return hasMM6Upg(8)
        },
        bought_do() {
            player.exponenting.tower.spent = player.exponenting.tower.spent.add(10)
        }
    },
    {//10
        desc: "Buying 5D Dimensions doesn't cost. You can auto buy 5D Dimensions ",
        get require() {
            return getRealmm61().gte(300)
        },
        get require_desc(){
            return "300 mm<sup>6.1</sup>"
        },
        get unlocked(){
            return hasMM6Upg(9)
        },
        bought_do() {
            player.exponenting.tower.spent = player.exponenting.tower.spent.add(300)
        }
    },
    {//11
        desc: "Keep mm<sup>5.9</sup> when reset",
        get require() {
            return getRealmm61().gte(250)
        },
        get require_desc(){
            return "250 mm<sup>6.1</sup>"
        },
        get unlocked(){
            return hasMM6Upg(10)
        },
        bought_do() {
            player.exponenting.tower.spent = player.exponenting.tower.spent.add(250)
        }
    },
    {//12
        desc: "Buying Fractal Engine MK2 doesn't reset Fractal Engine MK1.<br>Fractal Engine MK2 produce more Fractal Engine MK1.",
        get require() {
            return true
        },
        get require_desc(){
            return "Nothing"
        },
        get unlocked(){
            return hasMM6Upg(11)
        },
        bought_do() {
           
        }
    },
    
    {//13
        desc: "Gain more mm<sup>6</sup> based on total mm<sup>6.1</sup>'s.<br>Keep mm<sup>5</sup> galaxies in exponenting reset.<br>Unlock Research.",
        get require() {
            return player.exponenting.tower.from6DFractal.gte(1000)
        },
        get require_desc(){
            return "Total 1000 mm<sup>6.1</sup>"
        },
        get unlocked(){
            return hasMM6Upg(12)
        },
        bought_do() {
           
        },
        get effect(){
            return player.exponenting.tower.from6DFractal.root(2.5)
        },
        get effectDisplay() {
            return `×${this.effect.formatA()} to mm<sup>6</sup> gain`
        }
    },
     
    /*
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


function hasMM6Upg(id) {
    return player.exponenting.upgrades.includes(id)

}
function buyMM6Upg(id) {
    if (mm6_upgrades[id - 1].require && !hasMM6Upg(id)) {
        player.exponenting.upgrades.push(id)
        mm6_upgrades[id - 1].bought_do()
    }
}

function getMM6UpgText(){
    if (app.hover_6upg === 0) return;
    let a = "[mm<sup>6</sup> Upgrade "
    a = a.concat(app.hover_6upg)
    a = a.concat("]")
    a = a.concat(mm6_upgrades[app.hover_6upg-1].name ? mm6_upgrades[app.hover_6upg-1].name : "")
    a = a.concat("<br>")
    a = a.concat(mm6_upgrades[app.hover_6upg-1].desc)
    a = a.concat("<br>")
    a = a.concat("Cost: ")
    a = a.concat(mm6_upgrades[app.hover_6upg-1].require_desc)
    if (mm6_upgrades[app.hover_6upg-1].effectDisplay !== void 0){
        a = a.concat("<br>")
        a = a.concat(`<span class="green">Currently: ${mm6_upgrades[app.hover_6upg-1].effectDisplay}</span>`)
    }
    return a
}

function getMM6UpgClassName(id) {
    let upgradeClassName = 'mm6_upg';
    if(hasMM6Upg(id)) {
        upgradeClassName += '_bought';
    }
    //if (typeof (mm4_upgrades[id-1].disableInChal5) == "boolean") upgradeClassName = "mm4_upg_disabled"

    return upgradeClassName
}
function buyMM61(){
    if (player.exponenting.fractal.fractals.gte(tmp.mm6tower.mm61costFromFractal)){
        if (!hasMM6Upg(7)){
            player.exponenting.fractal.fractals = player.exponenting.fractal.fractals.sub(tmp.mm6tower.mm61costFromFractal)
        }
        player.exponenting.tower.from6DFractal = player.exponenting.tower.from6DFractal.add(1)
    }
}
function buyMM61Max() {
    if (!hasMM6Upg(7)){
        buyMM61()
    }else{
        let buycounttotal = player.exponenting.fractal.fractals.div(3).logarithm(2).floor();
        if (buycounttotal.gt(player.exponenting.tower.from6DFractal)){
            player.exponenting.tower.from6DFractal = buycounttotal.clone()
        }
    }
}
function handleAutobuyMM595(){
    if (hasMM6Upg(9) && player.auto.includes(12)) buyMM595Upgrade(3)
    if (hasMM6Upg(9)){
        if (player.auto.includes(10)){
            let temp1 = player.compress.mm595.div(100).logarithm(8.64454438).ceil();
            if (temp1.gt(player.compress.buyables[0])){
                player.compress.buyables[0] = temp1
            }
        }
        if (player.auto.includes(11)){
            let temp2 = player.compress.mm595.div(2000).logarithm(2.3).ceil();
            if (temp2.gt(player.compress.buyables[1])){
                player.compress.buyables[1] = temp2
            }
        }
    }
    
// player.compress.mm595.div(2000).logarithm(2.3).ceil()      2
// player.compress.mm595.div(100).logarithm(8.64454438).ceil()1
}