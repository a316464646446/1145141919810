var mm3_challenges = [
    {//1
        name: "Useless mm3.5",
        get unlocked() {
            return hasMM4Upg(8)
        },
        desc: "mm<sup>3.5</sup> to mm<sup>4</sup>'s multiplier is always ×1",
        complete_requirement: E("1e730"),
        reward: "mm<sup>3.5</sup> to mm<sup>4</sup>'s multiplier ×1.000e3"
    },
    {//2
        name: "Useless upgrades",
        get unlocked(){
            return hasMM3Chal(1)
        },
        desc: "1~2, 4~8 mm<sup>4</sup>, 2<sup>nd</sup> mm<sup>3</sup> Upgrades are useless.",
        complete_requirement: E("1e350"),
        reward: "All dimensions multiplier ×1.000e3"
    },
    {//3
        name: "Dilated 8 times Dimensions",
        get unlocked(){
            return hasMM3Chal(2)
        },
        desc: "All dimension multiplier ^0.1",
        complete_requirement: E("1e42"),
        reward: "All dimension multiplier ^1.1, Unlock 4<sup>th</sup> mm<sup>3</sup> Upgrade"
    },
    {//4
        name: "<del>Dilated END times</del><ins>Unusable</ins> mm<sup>3.5</sup>",
        get unlocked(){
            return hasMM3Upg(5)
        },
        desc: "mm<sup>3.5</sup> replicante ×1 per second.<br>Enter this challenge will reset your mm<sup>3.5</sup> volumes.",
        complete_requirement: E("e2.06e3"),
        reward: "the cap of mm<sup>3.5</sup> volume become higher based of mm<sup>3</sup> volumes.",
        get reward_effect(){
            return shortcut.secu.secutitation_reset_times.gte(200) ? E(10).expansion(Number.MAX_SAFE_INTEGER) : player.mm3_volumes.points.pow(100)
        },
        get effectDisplay(){
            return "×" + this.reward_effect.format() + " later"
        }
    },
    {//5
        name: "Unbuyable seven-eight",
        get unlocked(){
            return hasMM4Upg(10)
        },
        desc: "The cost of 7~8<sup>th</sup> Dimensions are K1.000e15 mm<sup>4</sup>(人话：不能买)",
        complete_requirement: E("2.038e2.038e3"),
        reward: "8<sup>th</sup> Dimensions multiplier ×1.000e200",
        
    },
    {//6
        name: "Early Softcap",
        get unlocked() {
            return hasMM4Upg(15)
        },
        desc: "Softcap starts at 1e100",
        complete_requirement: E("ee4"),
        reward: "Softcap starts at 1e1000"
    },
    {//7
        name: "Decay Dimensions",
        get unlocked() {
            return player.volume_generated.mm4.gte("e3.6e4")
        },
        desc: "All 4D Dimensions' multiplier decays.",
        complete_requirement: E("e26000"),
        reward: "mm<sup>4</sup> gain ×1.000e500."
    },
    {//8
        name: "FINAL",
        get unlocked() {
            return player.volume_generated.mm4.gte("e5.2e4") && hasMM3Chal(7)
        },
        desc: "Game runs 1.000e3 slower and run 3<sup>rd</sup> mm<sup>3</sup> challenge",
        complete_requirement: E("e700"),
        get reward(){
            return ""
        }
    }/*,
    {
        name: "MC玩家你们开心了吧！迷
            return "MC玩家你们开你世们开MC玩家害得，我恨你们陪了我五年，五年啊！说下架就下架！都是你们这些MC玩家害得，我恨你们！",
        complete_requireme下架！你们开你迷你nt: "MC玩家你们开心了些MC玩家害得，我恨界今天下吧！这个游戏陪了我五年，五心了吧！
    }架心了！都是你们这些你世界今天这个游世界今天下架！你说下架就下
        desc: "MC玩家你们开心了吧！！这个游游就下吧！",
        reward: "MC玩家心了吧陪了我五年，五年！迷戏迷年啊！说下架就下架！都是你们这架！戏陪了们开心了吧！这个游戏陪了我五年，五年啊！说下架就下架！都是你们这些MC玩家害得，我恨你们！"?false:true
        },开心了吧！这啊！戏！迷你世界今天下架！你们你世界今天下架！你你们！",
        get unlocked() {架！你们开心了吧！我五年，五年啊！说下架都是你们这些MC玩家害得，我恨你们！"
们开心了吧个

*/
]

function mm3doChalText(){
    /*let a = player.inMM3Challenge == 0 ?
    "Enter challenge" : 
    (
        player.volumes.gte(
            mm3_challenges[player.selectedMM3Challenge-1].complete_requirement
        ) ? "Complete challenge and exit" : 
        "Exit challenge"
    )
    player.selectedMM3Challenge == 0 ? 
    "Select a challenge and start" :
    (
        
    )*/
    let a =""
    if (player.inMM3Challenge){
        a = "You're running challenge "+player.inMM3Challenge.toString()+". "
        a += player.volumes.gte(
            mm3_challenges[player.inMM3Challenge-1].complete_requirement
        ) ? "Complete challenge and exit" : 
        "Exit challenge"
    }else{
        if (player.selectedMM3Challenge == 0){
            a = "Select a challenge and start"
        }else{
            a = "Enter Challenge"
        }
    }
    return a
}
function hasMM3Chal(id){
    return player.mm3_volumes.challenges.includes(id)
}
function mm3ChallengeText(){
    //selectedMM3Challenge
    if (player.selectedMM3Challenge == 0){
        return ""
    }
    else {
        let chal = mm3_challenges[player.selectedMM3Challenge-1]
        let b = "[mm<sup>3</sup> Challenge "
        b = b.concat(player.selectedMM3Challenge.toString());
        b = b.concat("]")
        b = b.concat(chal.name)
        b = b.concat("<br>")
        b = b.concat(chal.desc)
        b = b.concat("<br>Complete Requirement: ")
        b = b.concat(display_volumes(chal.complete_requirement))
        b = b.concat("<br>Reward:")
        b = b.concat(chal.reward)

        if (chal.effectDisplay !== void 0){
            b = b.concat("<br>")
            b = b.concat(`<span class="green">Currently: ${chal.effectDisplay}</span>`)
        }
        return b
    }

}
function mm3HandleChallenge(){
    if (player.selectedMM3Challenge != 0 && !player.inMM3Challenge){
        doMM3reset();
        if (player.selectedMM3Challenge==4){
            player.mm35_volumes.points = E(1);
        }
        player.inMM3Challenge = player.selectedMM3Challenge
        return;
    }
    if (player.inMM3Challenge){
        if (player.volumes.gte(mm3_challenges[player.inMM3Challenge-1].complete_requirement)){
            player.mm3_volumes.challenges.push(player.inMM3Challenge);
        }
        player.inMM3Challenge = 0

    }
}

function getMM3ChalClass(id){
    let a = "mm3_chal ";
    if (hasMM3Chal(id)){
        a+="mm3_chal_completed"
    }
    return a;
}
function mm3ShowChallenge(id){
    player.selectedMM3Challenge=id;
}