
Vue.component("achievements", {
    template: `<div>
      <table>
        <tr v-for="achRow in achievements">
          <td v-for="achievement in achRow">
          <div :class="getAchClass(String(achRow.id)+achievement.id)" v-if="!achievement.secret || hasAch(Number(String(achRow.id)+achievement.id))" align="center">
            <span style="height: 70px;" v-html="achievement.title"></span>
            <div class="tooltip" v-html="achievement.tooltip()"></div>
          </div>
          <div :class="getAchClass(String(achRow.id)+achievement.id)" v-else :style="{background:
            '#222'}" align="center">
            <span style="height: 70px;">???</span>
            <div class="tooltip">???</div>
          </div>
          </td>
        </tr>
      </table>
    </div>`,
})
const EE99 = E("ee99")
const achievements = [
    [
        { title: "Hello?", goal: "Buy 1<sup>st</sup> Dimensions" },
        { title: "Producing?", goal: "Buy 2<sup>nd</sup> Dimensions" },
        { title: "Dimension Boosting?", goal: "Buy 20 4<sup>th</sup> Dimensions" },
        { title: "Antimatter Galaxy?", goal: "Buy 80 8<sup>th</sup> Dimensions" },
        { title: "Point<sup>0.5</sup>?", goal: "Unlock mm<sup>3.5</sup>" },
        { title: "Infinite mm<sup>4</sup>", get goal() { return "Reach " + display_volumes(E("1.79e308")) } },
        { title: "Oh, no! My 4D dimensions!", goal: "Trigge dimension collapsing" },
        { title: "授人以鱼，不如授人以鱼限(Fishinity)", get goal() { return "Buy 190 8<sup>th</sup> Dimensions" } },
    ],
    [
        { title: "授人以鱼，不如授人以鱼恒(Fishernity)", get goal() { return "Reach 1.797e308 mm<sup>3</sup>" } },
        { title: "3D Volumes", goal: "Get 1 mm<sup>3</sup>" },
        { title: "Challenge Era", goal: "Unlock mm<sup>3</sup> challenge" },
        { title: "seventeen upgrades", goal: "Unlock 17<sup>th</sup> mm<sup>4</sup> Upgrade" },
        { title: "Why does we cannot produce 8<sup>th</sup> Dimensions?", goal: "Reach 1e20000 mm<sup>3</sup>", secret: true },
        {
            title: `啊${String.fromCodePoint(129322)}～啊${String.fromCodePoint(129322)}～啊咦${String.fromCodePoint(128556)}啊咦${String.fromCodePoint(128556)}`,
            get goal() {
                return "Reach " + display_volumes(E("e2085"))
            }
        }, //30388636569473

        { title: "这软上限也太离谱了", goal: "Unlock 6<sup>th</sup> mm<sup>3</sup> challenge" },
        { title: "这mm<sup>4.5</sup>也太离谱了", goal: "Sacrifice 1000 times" }
    ],
    [
        { title: "Medusa", goal: "See the achievements page 5 minutes.", secret: true },
        { title: "5D volume generator", goal: "Can you produce 1 mm<sup>5</sup> volumes?" },
        { title: "This is not a Point<sup>0.5</sup> galaxy", goal: "Buy a mm<sup>5</sup> galaxy." },
        { title: "<sup>5</sup>2", goal: "Reach " + display_volumes(E(2).tetr(5)) },
        { title: String.fromCodePoint(129420)+"<sup>100,000</sup>", goal: "Reach "+display_volumes(E("e12942000000"))},
        { title: "985211", goal: "Reach "+display_volumes(E("e9.85211e8"))},
        { title: "9.9e99999999", goal: "Reach "+display_volumes(E("9.999e99999999"))},
        { get title() {return "4D multiverse"}, goal: "Reach "+display_volumes(E("ee9"))}
    
    ],
    [
        { title: "无尽能源", goal: "Reach 1.797e308 mm<sup>5</sup> energies" },
        { title: "Hundred Thousand", goal: "Reach 100000 mm<sup>5</sup>"},
        { title: "什么计时器掌握者", goal: "Enable Time Hooker", secret: true },
        { title: "这不是Time Studies，这是升级塔", goal: "Buy mm<sup>5</sup> Tower #51 Upgrade",},
        { title: "这不是炼金生命，这是反应堆", goal: "Unlock Reactor",},
        { title: "你可以获得50-35个星系？", goal: "Get 15 mm<sup>5</sup> Galaxies",},
        { title: "挑战.zip", goal: "Run a challenge in Compress"},
        { title: "3↑↑4", goal: "Reach "+display_volumes(three_tetr_four)}
    
    ],
    [
        { title: "Save fixer 1", goal: "Try to import a save from Wind spirit creation", secret: true },
        { title: "Can you download more RAMs?", goal: "Make 3 FPS", secret: true},
        { title: "MegaVerse", goal: "Reach "+display_volumes(MEGAVERSE)},
        { title: "I didn't need compress, just a upgrade ^_^", goal:"Reach "+display_volumes(E.E_MAX_SAFE_INTEGER)+" without gaining mm<sup>5.95</sup><br>Or get next achievements?"},
        { title: "壹式風靈作成", goal:"Buy a Fractal Engine"},
        { title: "贰式風靈作成", goal:"Buy a Fractal Engine MK2"},
        { title: "Ultraman Zeta", goal: "Reach "+display_volumes(EE99)}
    ],

]
function updateAch() {
    if (player.volumes.gte(-1.79e308) && "AchRow1") {
        if (player.dimensions[DIMENSIONS_BOUGHT][0].gte(1)) {
            getAch(11)
        }
        if (player.dimensions[DIMENSIONS_BOUGHT][1].gte(1)) {
            getAch(12)
        }
        if (player.dimensions[DIMENSIONS_BOUGHT][3].gte(20)) {
            getAch(13)
        }
        if (player.dimensions[DIMENSIONS_BOUGHT][7].gte(80)) {
            getAch(14)
        }
        if (player.mm35_volumes.unl) {
            getAch(15)
        }
        if (player.volumes.gte("1.797e308")) {
            getAch(16)
        }
        if (player.mm3_volumes.unl || (
            !player.mm3_volumes.unl && player.mm35_volumes.points.gte("1e100")
        )) {
            getAch(17)
        }
        if (player.dimensions[DIMENSIONS_BOUGHT][7].gte(190)) {
            getAch(18)
        }
    }
    if (player.volumes.gte(-1.79e308) && "AchRow2") {
        if (player.mm3_volumes.points.gte("1.797e308")) {
            getAch(21)
        }
        if (player.mm3_volumes.points.gte(1)) {
            getAch(22)
        }
        if (hasMM4Upg(8)) {
            getAch(23)
        }
        if (hasMM4Upg(17)) {
            getAch(24)
        }
        if (player.mm3_volumes.points.gte("e2e4")) {
            getAch(25)
        }
        if (player.volumes.gte("e2085")) {
            getAch(26)
        }
        if (mm3_challenges[5].unlocked) {
            getAch(27)
        }
        if (player.mm3_volumes.sacrifice_times.gte(1000)) {
            getAch(28)
        }

    }
    if (player.volumes.gte(-1.79e308) && "AchRow3") {
        if (secret_achievement_data.medusa > 5 * 60) {
            getAch(31)
        }
        if (tmp.mm5.gain.gt(0)) {
            getAch(32)
        }
        if (player.secutitation.mm5_volumes.galaxies.gt(0)) {
            getAch(33)
        }
        if (player.volumes.gte(E(2).tetr(5))) {
            getAch(34)
        }
        if (player.volumes.gte("e1.2942e10")) {
            getAch(35)
        }
        if (player.volumes.gte("e9.85211e8")){
            getAch(36)
        }
        if (player.volumes.gte("9.999e99999999")){
            getAch(37)
        }
        if (player.volumes.gte("ee9")){
            getAch(38)
        }

    }
    if (player.volumes.gte(-1.79e308) && "AchRow4") {
        if (shortcut.secu.mm5_volumes.points.gte(1e5)) {
            getAch(42)
        }
        if (shortcut.secu.mm5_volumes.energy.gte(E30825)) {
            getAch(41)
        }
        if (hasMM5TowUpg(51)) {
            getAch(44)
        }
        if (hasMM5TowUpg(52)) {
            getAch(45)
        }
        if (shortcut.mm5.galaxies.gte(15)) {
            getAch(46)
        }
        if (player.compress.inCompress && player.inMM3Challenge) {
            getAch(47)
        }
        if (player.volumes.gte(three_tetr_four)){
            getAch(48)
        }

    }
    if (player.volumes.gte(-1.79e308) && "AchRow5") {
        if (player.volumes.gte(MEGAVERSE)) {
            getAch(53)
        }
        if ((player.volumes.gte(E.E_MAX_SAFE_INTEGER) && player.compress.mm595.lte(0))||hasAch(55)){
            getAch(54)
        }
        if (player.exponenting.fractal.fractalEngine.gte(1)) {
            getAch(55)
        }
        if (player.exponenting.fractal.fractalEngineMK2.gte(1)) {
            getAch(56)
        }
        if (player.volumes.gte(EE99)) {
            getAch(57)
        }

    }
    
    if (app.tabShow == '26') {
        secret_achievement_data.medusa += global_diff
    } else {
        secret_achievement_data.medusa = 0
    }
}

function hasAch(id) {
    return player.achievements.includes(id)
}
function getAch(id) {
    if (hasAch(id)) return
    player.achievements.push(id)
    let a = Math.floor(id / 10),
        b = id % 10
    addNotify(`Achievement ${a}${b}：${achievements[a - 1][b - 1].title} getted, 但这无关紧要`)
}
let totalachievements = 0
for (let i in achievements) {
    achievements[i].id = parseInt(i) + 1
    for (let ii in achievements[i]) {
        achievements[i][ii].id = parseInt(ii) + 1
        achievements[i][ii].tooltip = function () {
            let tooltip = `Requirement: ${this.goal}`
            if (this.reward) tooltip += `<br>Reward: ${this.reward}`
            if (this.effectDisplay) tooltip += `<br>Currently: ${this.effectDisplay}`
            return tooltip
        }
    }
    totalachievements += achievements[i].length
}

function getAchClass(ach) {
    let name = "achi tooltipBox"
    ach = parseInt(ach)
    if (hasAch(ach)) name += " unlocked"
    return name
}