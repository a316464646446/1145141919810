"use strict";

var parallelUniverseName = "volume-incremental";
/*
try{
    console.log(2n**5n)
    console.log(BigInt(2)**BigInt(5))
}catch{
    alert("doesn't support.")
}*/
var secret_achievement_data = {
    medusa: 0
}

var frameCollection = [];

var this_frame = Date.now();
var last_frame = Date.now();
var diff = 1;
var sound_element = document.getElementById("music");
var mm4_upgrades = [
    {//1
        desc: "1<sup>st</sup> Dimension multiplier add based on mm<sup>4</sup> Volumes",
        get effect() {
            let a = player.volumes.root(90);
            if (hasMM4Upg(14) && !hasMM5TowUpg(81)) {
                a = player.volumes.root(40);
            }
            if (hasMM5TowUpg(81)) {
                a = player.volumes.root(60);

            }
            if (a.gte("1000") && !hasMM5TowUpg(81)) {
                a = softcap(a, 1000, 0.5, "pow", false);
            }
            return a.max(1)
        },
        cost: E("1e75"),
        get effectDisplay() {
            return `×${this.effect.format()}`
        },
        unlocked: true
    },
    {//2
        desc: "7<sup>th</sup> Dimension multiplier add based on 8<sup>th</sup> Dimension Point",
        cost: E("1e85"),
        get effect() {
            let a = player.dimensions[DIMENSIONS_POINTS][8 - 1].mul(0.1).max(1);
            return a
        },
        get unlocked() {
            return hasMM4Upg(1)
        },
        get effectDisplay() {
            return `×${this.effect.format()}`
        },
    },
    {//3
        desc: "Unlock 3.5D",

        cost: E("1.145046196390161e92"),
        get unlocked() {
            return hasMM4Upg(2)
        },

    },
    {//4
        desc: "1-8<sup>th</sup> 4D Dimensions multiplier add based on your mm<sup>3</sup> volumes<br>",
        cost: E("1e50"),
        get unlocked() {
            return player.mm3_volumes.unl;
        },
        get effect() {
            let a = player.mm3_volumes.points.add(1).mul(10).min("1e301")
            a = softcap(a, "5.2e11", 0.5, "pow")

            return a

        },
        get effectDisplay() {
            return `×${this.effect.format()}`
        },
    },
    {//5
        desc: "You can buy dimensions automatically",
        cost: E("114514"),
        get unlocked() {
            return true
        },
    },
    {//6
        desc: "You gain a 1.001x multiplier to this dimension when you buy 10 this dimension",
        cost: E("1e120"),
        get unlocked() {
            return hasMM4Upg(4);
        },
    },
    {//7
        desc: "Unlock Second 3D Upgrades",
        cost: E("1e210"),
        get unlocked() {
            return hasMM4Upg(6);
        },
    },
    {//8
        desc: "Your mm<sup>3.5</sup> volumes doesn't reset on doing mm<sup>3</sup> reset.<br>Unlock mm<sup>3</sup> Challenge",
        cost: E("e830"),
        get unlocked() {
            return hasMM3Upg(3);
        }
    },
    {//9
        desc: "mm<sup>3</sup> volumes gain formula be better",
        cost: E("e5.802e3"),
        get unlocked() {
            return player.volumes.gte("e5.8e3") || hasMM4Upg(9)
        }
    },
    {//10
        desc: "Unlock 5<sup>th</sup> mm<sup>3</sup> challenge",
        cost: E("e6.05e3"),
        get unlocked() {
            return hasMM4Upg(9)
        }
    },
    {//11
        desc: "1<sup>st</sup> Softcap starts at 1.000e400",
        cost: E("e9.2e3"),
        get unlocked() {
            return hasMM4Upg(10)
        }
    },
    {//12
        desc: "1<sup>st</sup> Softcap starts at 1.000e700",
        cost: E("e9.7e3"),
        get unlocked() {
            return hasMM4Upg(11)
        }
    },
    {//13
        desc: "1<sup>st</sup> Softcap starts at 1.000e800",
        cost: E("e1.155e4"),
        get unlocked() {
            return hasMM4Upg(12)
        }
    },
    {//14
        desc: "Make mm<sup>4</sup> Upgrade 1 formula be better",
        cost: E("e1.2222222e4"),
        get unlocked() {
            return hasMM4Upg(13)
        }
    },
    {//15
        desc: "Unlock 6<sup>th</sup> mm<sup>3</sup> Challenge",
        cost: E("e1.3888888888e4"),
        get unlocked() {
            return hasMM4Upg(14)
        }
    },
    {//16
        desc: "1<sup>st</sup> Softcap starts at 1.000e12500",
        cost: E("e1.50505050505050505050e4"),
        get unlocked() {
            return hasMM3Chal(6)
        }
    },
    {//17
        desc: "Unlock mm<sup>4.5</sup>",
        cost: E("e1.50505050505050505050e4"),
        get unlocked() {
            return hasMM4Upg(16)
        }
    }
]
function buyMM4Upg(id) {
    if (player.volumes.gte(mm4_upgrades[id - 1].cost) && !player.upgrades.includes(id)) {
        player.volumes = player.volumes.sub(mm4_upgrades[id - 1].cost)
        player.upgrades.push(id)
    }
}

function hasMM4Upg(id) {
    if (player.inMM3Challenge == 2 &&
        (between(1, id, 2) || between(4, id, 8))
    ) {
        return false;
    }
    return player.upgrades.includes(id);
}

function reset_dimensions(dim_boost_reset) {
    Object.assign(player,
        {
            dimensions: [
                [E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)], //dimensions
                [E(1), E(1), E(1), E(1), E(1), E(1), E(1), E(1)], //dimensions_multi
                [E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)], // dimensions_bought
                [E(10), E(100), E(1000), E(1e4), E(1e5), E(1e6), E(1e7), E(1e8)],// dim_cost
                [E(1), E(1), E(1), E(1), E(1), E(1), E(1), E(1)], //dim_exponent
            ]
        }
    )
}
function reset_mm5_dimensions() {
    Object.assign(player,
        {
            mm5_volume_dimensions: [
                [E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)], //dimensions
                [E(1), E(1), E(1), E(1), E(1), E(1), E(1), E(1)], //dimensions_multi
                [E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)], // dimensions_bought
                [E(10), E(100), E(1000), E(1e4), E(1e5), E(1e6), E(1e7), E(1e8)],// dim_cost
            ]
        }
    )
}

function hard_reset() {
    if (player.options !== void undefined) {
        var b = player.options;
    }

    window.player = {
        volumes: E(11.4514),
        version: 10,
        recordUnlocked: [],
        volumeInfinite: false,
        display_mode: 0,
        dimensions_buymulti: [
            E(2), E(2), E(2), E(2), E(2), E(2), E(2), E(2),
        ],
        offlinedTime: 0,
        options: {
            showNewsTicker: true,
            stickyDisplay: false,
            music: 0,
            gamespeed: 1,
            percentUpg: false,
            qol_shortDisplay: false
        },

        mm3_volumes: {
            unl: false,
            points: E(0),
            upgrades: [],
            challenges: [],
            in_sacrifice: false,
            mm45_points: E(0),
            sacrifice_times: E(0), // 次数
            mm45buyables: [0, 0, 0]
        },

        mm35_volumes: {
            unl: false,
            points: E(0),
            san_xiang_bo_points: E(0),
            machineState: false
        },
        secutitation: {
            mm5_volumes: {
                points: E(0),
                energy: E(1),
                galaxies: E(0)
            },
            points: E(0),
            challenges: [],
            challenges2x: [],
            challenges3x: [],
            challenges4x: [],
            challenges5x: [],
            upgrades: [],
            towerUpgrades: [],
            tower: {
                fromMM3: E(0),
                fromMM4: E(0),
                fromMM5: E(0),
                spent: E(0)
            },
            secutitation_reset_times: E(0),
            mm53: E(0),
            mm54: E(0),
            mm55: E(0),
            mm56: E(0),
        },
        compress: {
            mm59: E(0),
            mm595: E(0),
            highestMM4inCompress: E(0),
            upgrades: [],
            buyables: [E(0), E(0), E(0),],
            inCompress: false,
            unl: false
        },
        exponenting: {
            points: E(0), //mm^6
            resetTimes: E(0),
            unl: false,
            fractal: {
                fractals: E(0),
                fractalEngine: E(0),
                fractalEngineMore: E(0),
                fractalEngineMK2: E(0)
            },
            tower: {
                from6DFractal: E(0),
                spent: E(0)
            },
            upgrades: [],
            research: {
                researchSelects: [],
                researchId: "",
                researchTimeSpent: E(0),
                research63215Dspent: E(0),
                research6Dspent: E(0),
                researchGetted: []
            },
            pointAllocate: {
                mm6125: E(0),
                mm625: E(0),
                mm6375: E(0),

                mm61875: E(0),
                mm63125: E(0),
                mm64375: E(0),
            }
        },
        auto: [],
        multi: {
            unl: false,
            points: E(0)
        },
        sound_volume: 0,
        upgrades: [],
        // stats
        time: {
            eter: E(0),
            real_eter: 0,
            mm3: E(0),
            real_mm3: 0,
            time_now: Date.now()
        },
        volume_generated: {
            mm4: E(0),
            mm3: E(0),
            mm6: E(0)
        },

        window_show: {
            first_mm3_reset: false
        },
        selectedMM3Challenge: 0,
        inMM3Challenge: 0,
        selectedMM6Challenge: 0,
        inMM6Challenge: 0,
        lastTab: '1',
        unlockedMM5ChallengeLeastOnce: false,
        newsticker_time: 0,
        achievements: [],
        fakeGoInfinite: false,
        fGItime: 0

    }
    reset_dimensions(1)
    reset_mm5_dimensions()
    if (b !== void undefined) {
        player.options = b;
    }
}


/*
* player.tickspeed.gte(1000)
* 1000 1000.50       1001
* 0      1            2
* */


function buyable(dim) {
    if (!tmp.dimension.canbuyDim(dim)) {
        return false
    }
    let temp1 = player.dimensions[DIMENSIONS_COST][dim - 1]
    if (player.inMM3Challenge === 5 && between(7, dim, 8)) {
        return false;
    }
    return player.volumes.gte(temp1)
}

function import_str(pl) {
    let importing_player = JSON.parse(pl);
    Object.assign(player, importing_player)
    fix();
    save();
    location.href = location.href;
}

function buydim(dim, single = false) {
    if (single) {
        if (player.volumes.gte(player.dimensions[DIMENSIONS_COST][dim - 1])) {
            player.dimensions[DIMENSIONS_BOUGHT][dim - 1] = player.dimensions[DIMENSIONS_BOUGHT][dim - 1].add(1);
            return true;
        }
    }
    if (player.inMM3Challenge === 5 && between(7, dim, 8)) {
        return false;
    }
    if (player.volumes.gte(player.dimensions[DIMENSIONS_COST][dim - 1])) {
        let temp1 = player.volumes.logarithm(tmp.dimension.getDimScale(dim))
        let temp2 = (player.dimensions[DIMENSIONS_COST][dim - 1]).logarithm(tmp.dimension.getDimScale(dim))
        let bought_now = player.dimensions[DIMENSIONS_BOUGHT][dim - 1];
        let buycount = temp1.sub(temp2).ceil();
        let temp3 = buycount.clone();

        if (buycount.lt(1)) {
            buycount = E(1)
        }
        player.dimensions[DIMENSIONS_BOUGHT][dim - 1] = player.dimensions[DIMENSIONS_BOUGHT][dim - 1].add(buycount);
        player.dimensions[DIMENSIONS_POINTS][dim - 1] = player.dimensions[DIMENSIONS_POINTS][dim - 1].add(buycount.mul(10)); //     player.volumes = player.volumes.sub(E.pow(10,temp1.mul(dim).ceil()))


        return true
    }
    return false


}



const dim_base_price = [
    E(10), E(100), E(1E3), E(1E4), E(1E5), E(1E6), E(1E7), E(1E8)
]

function calculate_dim() {

    for (let i = 0; i < 7; i++) {
        player.dimensions[DIMENSIONS_POINTS][i] = player.dimensions[DIMENSIONS_POINTS][i]
            .add(
                player.dimensions[DIMENSIONS_POINTS][i + 1]
                    .mul(player.dimensions[DIMENSIONS_MULTI][i + 1])
                    .pow(player.dimensions[DIMENSIONS_EXPONENT][i + 1])
                    .mul(diff)
            );
        if (player.dimensions[DIMENSIONS_POINTS][i].isNaN()) {
            player.dimensions[DIMENSIONS_POINTS][i] = E(0);
        }
    }
}

/*異議あり*/
function calc_cost(dimid, count) {
    // count before buy
    // 1st dimension dimid = 0
    let temp1 = dim_base_price[dimid]
        .mul(tmp.dimension.getDimScale(dimid + 1).pow(count.floor()));
    if (player.inMM3Challenge === 5 && between(6, dimid, 7)) {
        temp1 = E.expansion(10, 1e15)
    }
    return temp1;
}

function exportErrorLog() {
    let str = `An error log happening at ${getCurrentBeijingTime()}
traceback:
${app.errortext.replaceAll("<br>", "\n")}

save:
${JSON.stringify(player)}
`
    navigator.clipboard.writeText(str);
}

function exportPurePlayerJson() {
    if (app.developer_mode) {
        navigator.clipboard.writeText(JSON.stringify(player));
    }
}
var hasTHContainer = false;
var checkedTH = false;
function loop() {
    try {
        this_frame = Date.now()
        player.time_now = Date.now();
        player.time.time_now = Date.now();
        window.global_diff = (this_frame - last_frame) / 1000;
        if (Number.isNaN(player.offlinedTime)) {
            player.offlinedTime = 0
        }
        player.recordUnlocked = [...(new Set(player.recordUnlocked))]
        if (hasMM6Upg(3)) player.compress.unl=true
        if (window.eHook && !app.developer_mode) {
            getAch(43);

            save();
            clearInterval(window.qqq);
            clearInterval(window.www);
            let urlarray = ["https://www.bilibili.com/video/BV1Jg411o7J4", "https://www.bilibili.com/video/BV15C4y1K7PN"];
            location.href = urlarray[Math.floor(Math.random() * urlarray.length)]

        }
        if (window.global_diff > 0.3333) {
            getAch(52)
        }
        /*if (hasMM5TowUpg(61)){
            player.unlockedMM5ChallengeLeastOnce = true
        }*/
        window.global_diff *= developer.timeboost
        window.diff2 = E(window.global_diff * player.options.gamespeed);
        window.diff = E(diff2 * (player.inMM3Challenge === 8 ? 0.001 : 1)).mul(tmp.mm6.perMM6speed);

        researchLoop()

        sacrif(1)
        updateAch()
        reactorLoop()
        updateFractal()
        updateAllocate()
        // QoL challenging life
        if (player.inMM3Challenge != 0 && player.auto.includes(9) && player.volumes.gte(
            mm3_challenges[player.inMM3Challenge - 1].complete_requirement
        )) {
            mm3HandleChallenge()
        }

        sound_element.volume = player.sound_volume;
        if (player.lastTab != "251") {
            player.selectedMM3Challenge = 0
        }
        if (player.lastTab != "252") {
            player.selectedMM5Challenge = 0
        }

        let temp1 = (player.options.gamespeed - 1) * window.global_diff * 1000
        if (player.offlinedTime < 1) {
            player.offlinedTime = 0
        }
        if (temp1 <= player.offlinedTime) {
            player.offlinedTime -= temp1
        } else {
            if (player.options.gamespeed > 1) {
                player.options.gamespeed = 1
            }
        }
        player.compress.mm595 = player.compress.mm595.add(tmp.mm59.mm595gain.mul(diff))
        mm35_loop();
        if (player.volumes.isNaN()) {
            player.volumes = E(11);
        }
        if (!player.mm35_volumes.unl && hasMM4Upg(3)) {
            player.mm35_volumes.unl = true
        }

        if (player.mm35_volumes.points.lt(1)) {
            player.mm35_volumes.points = E(1);
        }
        if (typeof player.time.eter == 'number') {
            player.time.eter = E(player.time.eter)
        }
        if (typeof player.time.mm3 == 'number') {
            player.time.mm3 = E(player.time.mm3)
        }
        player.time.eter = player.time.eter.add(window.diff2);
        player.time.mm3 = player.time.mm3.add(window.diff);
        player.time.real_eter += window.global_diff;
        player.time.real_mm3 += window.global_diff;
        /* if (player.volumes.isNaN()){
             player.volumes = E(10);
         }*/


        let more = tmp.mm4.gain.mul(diff);
        if (player.volume_generated.mm4 == "NaN") {
            player.volume_generated.mm4 = E(0)
        }
        player.volume_generated.mm4 = player.volume_generated.mm4.add(more);
        //MM35();
        player.volumes = player.volumes.add(
            more
        );
        calculate_dim();
        updateDimensionData()
        calculate_mm5dim();
        for (let i = 0; i < 8; i++) {
            if (player.auto.includes(i + 1) && !(player.inMM3Challenge == 2)) {
                if (buyable(i + 1)) {
                    buydim(i + 1)
                }
            }
        }

        if (player.error !== void 0) {
            throw new Error("you throw a error!");
        }
        if (player.volumes.gte(E.E_MAX_SAFE_INTEGER) && !player.exponenting.unl) {
            player.volumes = E.E_MAX_SAFE_INTEGER.clone()
            player.fakeGoInfinite = true
        }
        if (player.fakeGoInfinite) {
            player.fGItime += global_diff
            if (player.fGItime > 35) {
                player.fGItime = 0
                player.exponenting.unl = true
                //doMM6reset();
                player.fakeGoInfinite = false
            }
        }else{
            player.fGItime = 0
        }



        player.lastTab = app.tabShow
        last_frame = this_frame
    } catch (e) {
        clearInterval(window.qqq);
        clearInterval(window.www);
        setErrorDial(e);
        window.errorMessage = e;
        console.log(e);
    }
}
function updateDimensionData() {
    for (let i = 0; i < 8; i++) {
        player.dimensions[DIMENSIONS_MULTI][i] = tmp.dimension.getDimMultiplier(i + 1);
        player.dimensions[DIMENSIONS_EXPONENT][i] = tmp.dimension.getDimExponentplier(i + 1);
        player.dimensions[DIMENSIONS_COST][i] = calc_cost(i, player.dimensions[DIMENSIONS_BOUGHT][i])
        player.mm5_volume_dimensions[DIMENSIONS_COST][i] = tmp.mm5.dimcost(i + 1)
    }

}
function setErrorDial(q) {
    app.hasError = true;
    app.errortext = q.stack.replaceAll("\n", "<br>");
}

const musics = [
    "OFF",
    "Heaven and Hell",
    "Arseniy Shkljaev - Nuclearoids (http://arseniymusic.com/)",
    "A Journey Through The Universe - Lesion X (Mpgun.com)"
]

function toggleMusic(a = -1) {
    if (a === -1) {
        player.options.music++
    } else {
        player.options.music = a
    }

    if (player.options.music > 3) {
        player.options.music = 0
    }
    let ele = document.querySelector("audio");
    let playPromise;
    switch (player.options.music) {
        case 0:
            ele.src = "";

            break;
        case 1:

            ele.src = "./assets/sounds/heavenandhell.mp3";
            playPromise = ele.play()
            playPromise.catch(function () {
                addNotify("Sorry, I can't play the music.")
                player.options.music = 0
            })
            break;
        case 2:

            ele.src = "./assets/sounds/Arseniy Shkljaev.mp3";
            playPromise = ele.play()
            playPromise.catch(function () {
                addNotify("Sorry, I can't play the music.")
                player.options.music = 0
            })
            break;
        case 3:

            ele.src = "./assets/sounds/Lesion X - A Journey Through The Universe [Mpgun.com].mp3";
            playPromise = ele.play()
            playPromise.catch(function () {
                addNotify("Sorry, I can't play the music.")
                player.options.music = 0
            })
            break;
    }
}

function toggleAutobuyer(i) {
    let temp1 = player.auto.indexOf(i)
    if (temp1 == -1) {
        player.auto.push(i)
    } else {
        player.auto.splice(temp1, 1)
    }
    /*
        if (between(1, i, 4)) {
            player.mm3_volumes.automation[i] = !player.mm3_volumes.automation[i];
        }
        if (between(5, i, 8) && hasMM3upgrade(12)) {
            player.mm3_volumes.automation[i] = !player.mm3_volumes.automation[i];
        }
        if (between(9, i, 9) && hasMM3upgrade(13)) {
            player.mm3_volumes.automation[i] = !player.mm3_volumes.automation[i];
        }
        if (between(10, i, 10) && hasMM3upgrade(21)) {
            player.mm3_volumes.automation[i] = !player.mm3_volumes.automation[i];
        }*/
}

function buyAll() {
    buydim(1);
    buydim(2);
    buydim(3);
    buydim(4);
    buydim(5);
    buydim(6);
    buydim(7);
    buydim(8);
}
function transformToE(object) {
    for (let key in object) {
        if (key == "offlinedTime" || key == "researchGetted" || key == "researchId" || key=="recordUnlocked"){
            continue
        }
        if (typeof object[key] === "string" && !E.isNaN(object[key])) {
            
            console.log(key)
            object[key] = new E(object[key]);
        }
        if (typeof object[key] === "object") {
            transformToE(object[key]);
        }
    }
}

function fix() {/*
    player.volumes = ENify(player.volumes);
    player.mm3_volumes.points = ENify(player.mm3_volumes.points);
    player.mm35_volumes.points = ENify(player.mm35_volumes.points);
    player.mm35_volumes.san_xiang_bo_points = ENify(player.mm35_volumes.san_xiang_bo_points);
    player.multi.points = ENify(player.multi.points);

    player.volume_generated.mm3 = ENify(player.volume_generated.mm3);

    //player.volume_generated.mm35 = ENify(player.volume_generated.mm35);
    player.volume_generated.mm4 = ENify(player.volume_generated.mm4);
    for (let i = 0; i < 8; i++) {
        player.dimensions[DIMENSIONS_MULTI][i] = ENify(player.dimensions[DIMENSIONS_MULTI][i])
        player.dimensions_buymulti[i] = ENify(player.dimensions_buymulti[i])
        player.dimensions[DIMENSIONS_BOUGHT][i] = ENify(player.dimensions[DIMENSIONS_BOUGHT][i])
        player.dimensions[DIMENSIONS_COST][i] = ENify(player.dimensions[DIMENSIONS_COST][i])
        player.dimensions[DIMENSIONS_POINTS][i] = ENify(player.dimensions[DIMENSIONS_POINTS][i])
        //player.dimensions[DIMENSIONS_SCALE][i] = ENify(player.dimensions[DIMENSIONS_SCALE][i])

    }*/
    transformToE(player);
    if (player.mm35_volumes.machineState === void 0) {
        player.mm35_volumes.machineState = 1;
    }
    if (player.options.music === void 0) {
        player.options.music = 0;
    }
    if (player.time.mm3 === void 0) {
        player.time.mm3 = 0;
    }
    if (player.time.real_mm3 === void 0) {
        player.time.real_mm3 = 0;
    }
    if (player.options.gamespeed === void 0) {
        player.options.gamespeed = 1;
    }
    if (player.options.percentUpg === void 0) {
        player.options.percentUpg = false;
    }
    if (player.options.qol_shortDisplay === void 0) {
        player.options.qol_shortDisplay = false;

    }
    if (player.volume_generated.mm6 === void 0) {
        player.volume_generated.mm6 = E(0)
    }
    if (player.mm3_volumes.challenges === void 0) {
        player.mm3_volumes.challenges = [];
    }
    if (shortcut.secu.challenges === void 0) {
        shortcut.secu.challenges = [];
    }
    if (shortcut.secu.challenges2x === void 0) {
        shortcut.secu.challenges2x = [];
    }
    if (shortcut.secu.challenges3x === void 0) {
        shortcut.secu.challenges3x = [];
    }
    if (shortcut.secu.challenges4x === void 0) {
        shortcut.secu.challenges4x = [];
    }
    if (shortcut.secu.challenges5x === void 0) {
        shortcut.secu.challenges5x = [];
    }
    if (player.mm3_volumes.upgrades.toString() === "[object Object]") {
        player.mm3_volumes.upgrades = []
    }
    player.mm3_volumes.upgrades = [...new Set(player.mm3_volumes.upgrades)]
    if (player.mm3_volumes.in_sacrifice === void 0) {
        player.mm3_volumes.in_sacrifice = false
    }
    if (player.mm3_volumes.mm45_points === void 0) {
        player.mm3_volumes.mm45_points = E(0)
    }
    if (player.mm3_volumes.sacrifice_times === void 0) {
        player.mm3_volumes.sacrifice_times = E(0)
    }
    if (player.mm3_volumes.mm45buyables === void 0) {
        player.mm3_volumes.mm45buyables = [0, 0, 0]
    }
    if (player.secutitation.mm5_volumes.energy === void 0) {
        player.secutitation.mm5_volumes.energy = E(1)

    }
    if (player.secutitation.mm5_volumes.galaxies === void 0) {
        player.secutitation.mm5_volumes.galaxies = E(0)

    }
    if (player.secutitation.towerUpgrades === void 0) {
        player.secutitation.towerUpgrades = []
    }
    if (player.secutitation.reacUpgrades === void 0) {
        player.secutitation.reacUpgrades = [0, 0, 0, 0, 0, 0]
    }
    if (player.secutitation.tower === void 0) {
        player.secutitation.tower = {
            fromMM3: E(0),
            fromMM4: E(0),
            fromMM5: E(0),
            spent: E(0)
        }
    }
    
    if (player.dimensions[DIMENSIONS_EXPONENT] === void 0) {
        player.dimensions[DIMENSIONS_EXPONENT] = [E(1), E(1), E(1), E(1), E(1), E(1), E(1), E(1)]
    }
    for (let i = 0; i < 6; i++) {
        let temp1 = ["mm53", "mm54", "mm55", 'mm56', "mm57"]
        if (player.secutitation[temp1[i]] === void 0) {
            player.secutitation[temp1[i]] = E(0)
        }
    }
    if (player.secutitation.reactorStates === void 0) {
        player.secutitation.reactorStates = []
    }

    if (player.compress.mm595 === void 0) {
        player.compress.mm595 = E(0)
    }
    if (player.compress.buyables.length !== 3) {
        player.compress.buyables = [E(0), E(0), E(0)]
    }
    if (player.compress.highestMM4inCompress === void 0) {
        player.compress.highestMM4inCompress = E(0)
    }
    fixExponenting()
    player.lastTab = player.lastTab.toNumber().toString()
}
var parallelUniverseId = 1
function goParaUni(id) {
    if (parallelUniverseId == id) {
        alert("You're currently in this parallel universe")
        return;
    }
    else if (confirm("Are you sure you want to go to Parallel Universe #" + id.toString())) {
        save()
        localStorage.setItem("volume-incremental-parallel-universe", Number(id))
        location.href = location.href

    }
}
function delParaUni(id) {
    if (confirm("Are you sure you want to delete Parallel Universe #" + id.toString() + "?")) {
        let temp2 = "volume-incremental";
        let temp1 = id
        if (temp1 > 1) {
            temp2 = temp2.concat("-" + temp1.toString())
        }
        localStorage.removeItem(temp2)

    }
}
function getParaUniState(id) {
    if (id == parallelUniverseId) {
        return "Parallel Universe #" + id.toString() + " Volumes: " + player.volumes.format() + " mm<sup>4</sup>"
    }
    let temp1
    switch (id) {
        case 1:
            temp1 = localStorage.getItem("volume-incremental")
            if (!temp1 || temp1 === null) {
                return "Parallel Universe #1 Volumes: Uninited"
            } else {
                return "Parallel Universe #1 Volumes: " + E(JSON.parse(temp1).volumes).format() + " mm<sup>4</sup>"
            }

        case 2:
            temp1 = localStorage.getItem("volume-incremental-2")
            if (!temp1 || temp1 === null) {
                return "Parallel Universe #2 Volumes: Uninited"
            } else {
                return "Parallel Universe #2 Volumes: " + E(JSON.parse(temp1).volumes).format() + " mm<sup>4</sup>"
            }

        case 3:
            temp1 = localStorage.getItem("volume-incremental-3")
            if (!temp1 || temp1 === null) {
                return "Parallel Universe #3 Volumes: Uninited"
            } else {
                return "Parallel Universe #3 Volumes: " + E(JSON.parse(temp1).volumes).format() + " mm<sup>4</sup>"
            }

    }
}
function load() {
    try {
        let temp1 = Number(localStorage.getItem("volume-incremental-parallel-universe"))
        if (temp1 == 0 || Number.isNaN(temp1)) {
            localStorage.setItem("volume-incremental-parallel-universe", 1)
            temp1 = 1
        }
        parallelUniverseId = temp1;


        hard_reset();
        parallelUniverseName = "volume-incremental";
        if (temp1 > 1) {
            parallelUniverseName = parallelUniverseName.concat("-" + temp1.toString())
        }
        let loadplayer = JSON.parse(localStorage.getItem(parallelUniverseName));
        let loaddeveloper = JSON.parse(localStorage.getItem("developerSettings"));
        if (loadplayer != null) {
            if (loadplayer.version != player.version) {
                alert("游戏已更新")
                alert("游戏已更新")
            }
            Object.assign(player, loadplayer)
        }
        if (loadplayer != null) {
            Object.assign(developer, loaddeveloper)
        }
        last_frame = Date.now();
        fix();
        player.offlinedTime += (this_frame - player.time_now)
        /* if ((this_frame - player.time_now) < 0){ // 穿越？
             localStorage.setItem("backup",formatsave.encode(player));
             console.log("Bye")
             hard_reset();
 
         }*/
        let temp = Math.random();
        /*
        mm3FixOldSaves();
        delete player.error*/
        if (temp < 0.01) {
            if (location.hostname.endsWith("github.io")) {
                document.getElementById("unknown").style.display = "block"
                document.getElementById("app").style.display = "none"
                document.getElementById("fatalerror").innerHTML = "FATALERROR ".repeat(1000)
                setTimeout(loadVueNormaly, 5000)
            } else {
                console.log("dev, youre lucky!")
                loadVueNormaly()
            }
        } else {
            loadVueNormaly()

        }
        hasLoaded.status = true
    } catch (e) {
        alert(e.stack);

        // document.querySelectorAll("[if-not-fatal-error]").forEach((value, key, parent)=>{
        //     value.style.display="none";
        // })

    }
}
function loadVueNormaly() {
    document.getElementById("unknown").style.display = "none"
    document.getElementById("app").style.display = "block"
    document.getElementById("fatalerror").innerHTML = "?"
    loadVue();
    app.tabShow = player.lastTab
    toggleMusic(player.options.music)
    window.qqq = setInterval(loop, 35)
    window.www = setInterval(save, 1000);
    if (window.newsTickerError !== undefined) {
        app.hasNewsTickerError = true;
    }

}
var qqq;
var www;

function between(x, y, z) {
    return x <= y && y <= z;
}

function getAchieve(id, condition) {
    if (player.achieve[id]) {
        return true;
    }
    if (condition) {
        player.achieve[id] = true;
        return true
    }
    return false;
}



// endregion Vue
function speedrun(a) {
    alert("Speedrun is not allowed in the release version");
}

function get_mm4_vol(a) {
    alert("Get mm4 volume is not allowed in the release version");
}

function dev_reset_vol() {
    player.volumes = E(10);
}
function devPassiveGenerate() {
    alert("PassiveGenerate is not allowed in the release version");
}
(() => {
    if (!location.hostname.endsWith("github.io")) {
        window.speedrun = function (timeBoost) {
            developer.timeboost = timeBoost;
            if (isNaN(developer.timeboost)) {
                developer.timeboost = 1;
            }
        };
        window.get_mm4_vol = function () {
            player.volumes = player.volumes.add(app.developer_get_mm4);
        };
        window.devPassiveGenerate = function () {
            secret_achievement_data.dev_passive_generate = true;
        }
    }
})();

document.addEventListener('DOMContentLoaded', function () {

    load();

});
var openPopup = function (option) {
    app.isShowingPopup = option
}

function db_pianyi() {
    var q = "";
    for (let i = 0; i < app.pianyi0.length; i++) {
        q = q.concat(String.fromCharCode(app.pianyi0[i].charCodeAt(0) + Number(app.pianyi1)));
    }
    return q;
}

function changeTabShow(a, b) {
    app.tabShow = a.toString();
}

var shortcut = {
    get secu() {
        return player.secutitation
    },
    get mm5() {
        return player.secutitation.mm5_volumes

    }
}

function overflow(number,start,power,meta=1){
    if (E.isNaN(number)) return E(0)
    start = E.iteratedexp(10,meta-1,1.0001).max(start)
    if (number.gte(start)){
        let s = start.iteratedlog(10,meta)
        number = E.iteratedexp(10,meta,number.iteratedlog(10,meta).div(s).pow(power).mul(s))
    }
}

function tetraflow(number,start,power) { // EXPERIMENTAL FUNCTION - x => 10^^((slog10(x)-slog10(s))*p+slog10(s))
    if(E.isNaN(number))return E(0);
	start=E(start);
	if(number.gte(start)){
        let s = start.slog(10)
        // Fun Fact: if 0 < number.slog(10) - start.slog(10) < 1, such like overflow(number,start,power,start.slog(10).sub(1).floor())
		number=E.tetrate(10,number.slog(10).sub(s).mul(power).add(s))
	}
	return number;
}
