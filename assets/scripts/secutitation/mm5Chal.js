var mm5_challenges = [
    {
        name: "",
        get unlocked() {
            return hasMM5TowUpg(61)
        },
        desc: "All 4D Dimensions multiplier double-exponent ×0.25(10<sup>10<sup>x</sup></sup>→10<sup>10<sup>0.25x</sup></sup>)",
        complete_requirements: [
            ExpantaNum("1e10047"),
            ExpantaNum("1e1145141919810"),
            ExpantaNum("1e1145141919810"),
            ExpantaNum("1e1145141919810"),
            ExpantaNum("1e1145141919810"),
        ], // Need 3P
        get reward(){
            return "8<sup>th</sup> 4D Dimension exponentplier +"+ (0.01*getMM5ChalCompletionTimes(1)).toString()+"→"+(0.01*(getMM5ChalCompletionTimes(1)+1)).toString()
        }
    }
    /*
    {//1
        name: "Useless mm3.5",
        unlocked: true,
        desc: "mm<sup>3.5</sup> to mm<sup>4</sup>'s multiplier is always ×1",
        complete_requirement: E("1e730"),
        reward: "mm<sup>3.5</sup> to mm<sup>4</sup>'s multiplier ×1.000e3"
    },*/
]

function mm5doChalText(){
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
    if (player.inMM5Challenge){
        a = "You're running challenge "+player.inMM5Challenge.toString()+". "
        a += player.mm3_volumes.points.gte(
            mm5_challenges[player.inMM5Challenge-1].complete_requirements[getMM5ChalCompletionTimes(player.inMM5Challenge)]
        ) ? "Complete challenge and exit" : 
        "Exit challenge"
    }else{
        if (player.selectedMM5Challenge == 0){
            a = "Select a challenge and start"
        }else{
            a = "Enter Challenge"
        }
    }
    return a
}
function mm5ChallengeText(){
    //selectedMM3Challenge
    if (player.selectedMM5Challenge == 0){
        return ""
    }
    else {
        let chal = mm5_challenges[player.selectedMM5Challenge-1]
        let b = "[mm<sup>5</sup> Challenge "
        b = b.concat(player.selectedMM5Challenge.toString());
        b = b.concat("](")
        b = b.concat(getMM5ChalCompletionTimes(player.selectedMM5Challenge))
        b = b.concat("/5)")
        b = b.concat(chal.name)
        b = b.concat("<br>")
        b = b.concat(chal.desc)
        b = b.concat("<br>Complete Requirement: ")
        b = b.concat(chal.complete_requirements[getMM5ChalCompletionTimes(player.selectedMM5Challenge)])
        b = b.concat(" mm<sup>3</sup> <br>Reward:")
        b = b.concat(chal.reward)

        if (chal.effectDisplay !== void 0){
            b = b.concat("<br>")
            b = b.concat(`<span class="green">Currently: ${chal.effectDisplay}</span>`)
        }
        return b
    }

}
function getMM5ChalCompletionTimes(id){
    if (shortcut.secu.challenges5x.includes(id)){
        return 5
    }
    if (shortcut.secu.challenges4x.includes(id)){
        return 4
    }
    if (shortcut.secu.challenges3x.includes(id)){
        return 3
    }
    if (shortcut.secu.challenges2x.includes(id)){
        return 2
    }
    if (shortcut.secu.challenges.includes(id)){
        return 1
    }
    return 0
}
function mm5HandleChallenge(){
    if (player.selectedMM5Challenge != 0 && !player.inMM5Challenge){
        doMM5reset();
        player.inMM5Challenge = player.selectedMM5Challenge
        return;
    }
    if (player.inMM5Challenge){
        compl_times = getMM5ChalCompletionTimes(player.selectedMM5Challenge);
        if (player.mm3_volumes.points.gte(mm5_challenges[player.inMM5Challenge-1].complete_requirements[compl_times])){
            switch (compl_times){
                case 0:
                    shortcut.secu.challenges.push(player.inMM5Challenge);
                    break;
                case 1:
                    shortcut.secu.challenges2x.push(player.inMM5Challenge);
                    break;
                case 2:
                    shortcut.secu.challenges3x.push(player.inMM5Challenge);
                    break;
                case 3:
                    shortcut.secu.challenges4x.push(player.inMM5Challenge);
                    break;
                case 4:
                    shortcut.secu.challenges5x.push(player.inMM5Challenge);
                    break;

            }
            respecMM5TowUpg()
        }
        doMM5reset();
        player.inMM5Challenge = 0

    }
}

function getMM5ChalClass(id){
    let a = "mm5_chal ";
    /*if (hasMM5Chal(id)){
        a+="mm5_chal_completed"
    }*/
    return a;
}
function mm5ShowChallenge(id){
    player.selectedMM5Challenge=id;
}