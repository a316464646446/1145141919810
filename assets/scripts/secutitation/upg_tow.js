

function buyMM5TowUpg(id) {
    let uid = Number(id)
    let temp1 = getUpgTow(uid);
    if (canBuyTow(uid) && !hasMM5TowUpg(uid)) {
        shortcut.secu.towerUpgrades.push(id)
        shortcut.secu.tower.spent= shortcut.secu.tower.spent.add(temp1.cost)
        
    }
}
function respecMM5TowUpg() {
    shortcut.secu.towerUpgrades = []
    shortcut.secu.tower.spent = E(0)
    doMM5reset()
}
function hasMM5TowUpg(id) {
    return shortcut.secu.towerUpgrades.includes(Number(id))
}/*
function getMM5TowUpgAffordable(uid){
    let check = /(!\d{2})|(\d{2})/g
    let row = Math.floor((uid / 10) - 1);
    let lie = uid % 10 - 1//列
    let upg = mm5_upg_tow[row][lie]
    console.log(upg.req)
    
}*/
const mm5_upg_tow = [
    [
        {
            id: 11,
            description: "这是一个升级塔，这个升级塔要从上往下升级，购买升级都需要一定的条件。",
            reqDesc: "",
            cost: E(0),
            get affordable() {
                return true
            }

        },
    ],
    [
        {
            id: 21,
            description: "mm<sup>4</sup> 体积获取×1.000e10000",
            reqDesc: "11",
            cost: E("2"),
            get affordable() {
                return hasMM5TowUpg(11)
            }

        }

    ],
    [
        {
            id: 31,
            description: "All 4D Dimension multiplier ×1e10000",
            reqDesc: "21",
            cost: E("2"),
            get affordable() {
                return hasMM5TowUpg(21)
            }
        }
    ],
    [
        {
            id: 41,
            description: "5D Dimensions to 4D Dimensions exponent +2",
            reqDesc: "31",
            cost: E("95"),
            get affordable() {
                return hasMM5TowUpg(31)

            }
        },
        {
            id: 42,
            description: "mm<sup>5</sup> energy 增益 mm<sup>3</sup> 获取",
            reqDesc: "41",
            cost: E("2"),
            get affordable() {
                return hasMM5TowUpg(41)

            }
        },
        {
            id: 43,
            description: "2<sup>nd</sup> 4D Dimensions cost scale 100 -> ~26.44",
            reqDesc: "42",
            cost: E("14"),
            get affordable() {
                return hasMM5TowUpg(42)

            }
        }
    ],
    [
        {
            id: 51,
            description: "2<sup>nd</sup> softcap 弱化 50%",
            reqDesc: "43",
            cost: E("60"),
            get affordable() {
                return hasMM5TowUpg(43)
            }
        },
        {
            id: 52,
            description: "Unlock Reactor",
            reqDesc: "51",
            cost: E("408"),
            get affordable() {
                return hasMM5TowUpg(51)

            }
        }
    ],
    [
        {
            id: 61,
            description: "mm<sup>5.3</sup> boosts mm<sup>4</sup> (after softcap)",
            reqDesc: "52",
            cost: E(1.2e5),
            get affordable() {
                return hasMM5TowUpg(52)
            }
        }
    ]
    /*
    [

        {
            id: 31,
            description: "8<sup>th</sup> 4D Dimension multiplier ×1e1000000",
            reqDesc: "21",
            cost: E("5"),
            get affordable() {
                return hasMM5TowUpg(21)
            }
        }
    ],
    [
        {
            id: 41,
            description: "mm<sup>5</sup> gain ×30",
            reqDesc: "31",
            cost: E("J^999 10"),
            get affordable() {
                return hasMM5TowUpg(31) || hasMM5TowUpg(32)
            }
        },
    ],
    [
        {
            id: 51,
            description: "mm<sup>3</sup> gain ×1e10000",
            reqDesc: "41",
            cost: E("J^999 10"),
            get affordable() {
                return hasMM5TowUpg(41)
            }
        }

    ],
    [
        {
            id: 61,
            additionHint: " 5C1",
            description: "Unlock 1<sup>st</sup> <abbr title=\"mm^5 challenge\">5C</abbr>",
            reqDesc: "51",
            cost: E("J^999 10"),
            get affordable() {
                return hasMM5TowUpg(51)
            }
        }
    ],
    [
        {
            id: 71,
            additionHint: "",
            get description(){ 
                return "你通过了5维挑战1一次！接下来是2个分叉"
            },
            reqDesc: "5C1",
            cost: E("J^999 10"),
            get affordable() {
                return getMM5ChalCompletionTimes(1)
            }
        }
    ],
    [
        {
            id: 81,
            additionHint: " 4D Dim",
            cost: E("J^999 10"),
            reqDesc: "71&!82",
            get description() {
                return ""
            },
            get affordable() {
                return hasMM5TowUpg(71) && !hasMM5TowUpg(82)
            },
            get buyable() {
                return true
            }
        },
        {
            id: 82,
            additionHint: " 5D Dim",
            cost: E("J^999 10"),
            reqDesc: "71&!81",
            get description() {
                return ""
            },
            get affordable() {
                return hasMM5TowUpg(71) && !hasMM5TowUpg(81)
            }
        },
    ],
    [
        {
            id: 91,
            additionHint: " 4D Dim",
            cost: E("J^999 10"),
            reqDesc: "81&!82",
            get description() {
                return "4D Dimensions Cost Scale ×0.99"
            },
            get affordable() {
                return hasMM5TowUpg(81) && !hasMM5TowUpg(82)
            }
        },
        {
            id: 92,
            additionHint: " 5D Dim",
            cost: E("J^999 10"),
            reqDesc: "71&!81",
            get description() {
                return "580000 mm<sup>5</sup> & e5.000e9 mm<sup>3.5</sup>"
            },
            get affordable() {
                return hasMM5TowUpg(82) && !hasMM5TowUpg(81)
            }
        },
    ]*/
]
/*
Vue.component("upgradetower", {
    get template() {
        return `
`
    },
    props: ["hint", "uid"]
})*/
function getUpgTowClass(uid) {
    let temp1 = getUpgTow(uid)
    let temp2 = ""
    if(temp1.isMM6 && !player.exponenting.unl){
        return "upgBoxMM6"
    }
    /*  !player.exponenting.unl corruptedBox*/
    if (hasMM5TowUpg(uid)) {
        temp2 = temp2.concat("upgBoxBought")
    } else {
        if (canBuyTow(uid)) {
            temp2 = temp2.concat("upgBoxBuyable")
        } else {
            temp2 = temp2.concat("upgBox")
        }
    }
    if (temp1.isMM6){
        temp2 = temp2.concat("MM6")
    }
    return temp2


}
function canBuyTow(uid){
    let temp1 = getUpgTow(uid);
    if (temp1.isMM6){
        return player.exponenting.unl && player.exponenting.tower.spent.add(temp1.cost).lte(tmp.mm6tower.totalMM61) && temp1.affordable
    }
    return shortcut.secu.tower.spent.add(temp1.cost).lte(tmp.tower.totalMM52) && temp1.affordable
}
function getUpgTow(uid) {
    let row = Math.floor((uid / 10) - 1);
    let lie = uid % 10 - 1//列
    return mm5_upg_tow[row][lie]

}
function buyMM52(buyid){
    switch (buyid){
        case 1:
            if (player.volumes.gte(tmp.tower.mm52costFrommm4)){
                player.volumes = player.volumes.sub(tmp.tower.mm52costFrommm4)
                shortcut.secu.tower.fromMM4 = shortcut.secu.tower.fromMM4.add(1)
            }
            break;
        case 2:
            if (player.mm3_volumes.points.gte(tmp.tower.mm52costFrommm3)){
                player.mm3_volumes.points = player.mm3_volumes.points.sub(tmp.tower.mm52costFrommm3)
                shortcut.secu.tower.fromMM3 = shortcut.secu.tower.fromMM3.add(1)
            }
            break;
        case 3:
            if (shortcut.mm5.points.gte(tmp.tower.mm52costFrommm5)){
                shortcut.mm5.points = shortcut.mm5.points.sub(tmp.tower.mm52costFrommm5)
                shortcut.secu.tower.fromMM5 = shortcut.secu.tower.fromMM5.add(1)
            }
            break;
        case 4:
            buyMM61()
            break;
    }
}
function buyMM52Max(buyid){
    switch (buyid){
        case 1:
            if (player.volumes.gte(tmp.tower.mm52costFrommm4)){
                shortcut.secu.tower.fromMM4 = shortcut.secu.tower.fromMM4.add(
                    player.volumes.logarithm(10).div("1000000").floor().sub(
                        tmp.tower.mm52costFrommm4.logarithm(10).div("1000000").floor().max(0)
                    )
                )
            }
            break;
        case 2:
            if (player.mm3_volumes.points.gte(tmp.tower.mm52costFrommm3)){
                shortcut.secu.tower.fromMM3 = shortcut.secu.tower.fromMM3.add(
                    player.mm3_volumes.points.logarithm(10).div("2644.54438").floor().sub(
                        tmp.tower.mm52costFrommm3.logarithm(10).div("2644.54438").floor().max(0)
                    )
                )
            }
            break;
        case 3:
            if (shortcut.mm5.points.gte(tmp.tower.mm52costFrommm5)){
                shortcut.secu.tower.fromMM5 = shortcut.secu.tower.fromMM5.add(
                    shortcut.mm5.points.logarithm(2).floor().sub(
                        tmp.tower.mm52costFrommm5.logarithm(2).floor().max(0)
                    )
                )
                shortcut.mm5.points = shortcut.mm5.points.sub(E.pow(2,shortcut.mm5.points.logarithm(2).floor()))
            }
            break;
    }
}
function getBoxClass(uid) {
    let temp1 = getUpgTow(uid)
    if (temp1.isMM6 && !player.exponenting.unl){
        return "corruptedBox"
    }else{
        return ""
}
    //!player.exponenting.unl corruptedBox
}
Vue.component("upgradetowers", {
    get template() {
        return (
            `
<div>
    <div class="center">
        <p>You have {{tmp.tower.totalMM52.sub(player.secutitation.tower.spent).format()}}({{tmp.tower.totalMM52.format(0)}}) mm<sup>5.2</sup></p>
        <button @click="buyMM52(1)" class="btn" :disabled="player.volumes.lt(tmp.tower.mm52costFrommm4)">Buy mm<sup>5.2</sup><br>Cost: {{tmp.tower.mm52costFrommm4.format()}} mm<sup>4</sup></button>
        <button @click="buyMM52(2)" class="btn mm3btn" :disabled="player.mm3_volumes.points.lt(tmp.tower.mm52costFrommm3)">Buy mm<sup>5.2</sup><br>Cost: {{tmp.tower.mm52costFrommm3.format()}} mm<sup>3</sup></button>
        <button @click="buyMM52(3)" class="btn mm5btn" :disabled="player.secutitation.mm5_volumes.points.lt(tmp.tower.mm52costFrommm5)">Buy mm<sup>5.2</sup><br>Cost: {{tmp.tower.mm52costFrommm5.format()}} mm<sup>5</sup></button>
    </div>
    <div v-for="row in mm5_upg_tow" style="display: flex">
        <div v-for="tow in row"  :class="getUpgTowClass(tow.id)" mm5>
            <div style="position: relative; top: -1.5rem; text-align: left; font-size: 16px;" v-html="getHintText(tow.id)"></div>
            <div :class="getBoxClass(tow.id)" class="center" @click="buyMM5TowUpg(tow.id)" style="position: relative; top: -1.5rem; font-size: 10px; height: 100%; vertical-align: middle;">
                <br>
                <span v-html="getTowDescription(tow.id)"></span>
            </div>
        </div>
    </div>
    <!-- <h1 class="center">The game of this version doesn't allow Upgrade Tower's exists.</h1> -->
</div>`
        );
    },
    data() {
        return {
            mm5_upg_tow,
            player,
            tmp
        }
    },
    methods: {
        getHintText(uid) {
            if (getUpgTow(uid).additionHint){
                return uid.toString()+getUpgTow(uid).additionHint
            }else{
                return uid.toString()
            }
        },
        getTowDescription(uid) {
            let temp1 = getUpgTow(uid);
            if (temp1.isMM6){
                if (player.exponenting.unl){
                    return temp1.description + "<br>" + temp1.reqDesc + "<br>" + temp1.cost.format() + " mm<sup>6.1</sup>"
                }else{
                    return "<span class=\"corrupted\">????????<br>??<br>?? ??<sup>???</sup></span>"
                }

            }else{
                return temp1.description + "<br>" + temp1.reqDesc + "<br>" + temp1.cost.format() + " mm<sup>5.2</sup>"
            }
        }
    }
})