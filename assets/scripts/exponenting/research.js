var researchTextReplaceDefault = "This is Research Page. You need to select 4 types to research. You can only do 1 researches at once."
var researchTextReplace = "This is Research Page. You need to select 4 types to research. You can only do 1 researches at once."
var researchScreenTimeout = 0;

const mm6_researches = {
    "6F11": {
        researchDesc: "Softcap^2 weaken based on 6D Fractals",
        cost: {
            time: E(30),

        },
        get effect(){
            return player.exponenting.fractal.fractals.log10().div(1e4).min(0.5)
        },
        get effectDisplay(){
            return `${this.effect.mul(100).formatA()}% weaken`
        },
        get unlocked() {
            return true
        }
    },
    "4B24": {
        researchDesc: "4D Volumes Softcap^1 and Softcap^3 later based on 4D Volumes",
        cost: {
            time: E(60),

        },
        get effect(){
            return player.volumes.log10().log10().max(1)
        },
        get effectDisplay(){
            return `^${this.effect.formatA()} later`
        },
        get unlocked() {
            return hasResearch('6F11')
        }
    },
    "6F22": {
        researchDesc: "Gain more 6D Fractals(^1.2).",
        cost: {
            time: E(120),

        },
        get effect() {
            return 1.2
        },
        get unlocked() {
            return hasResearch('4B24')
        }
    },
    "5D31": {
        researchDesc: "76mm<sup>5</sup>galaxy reward effect is better than before.",
        cost: {
            time: E(240),

        },
        get effect() {
            return 1
        },
        get unlocked() {
            return hasResearch('6F22')
        }
    },
    "5D11": {
        researchDesc: "5D Dimensions buy1 multiplier ×1.5->×3"  ,
        cost: {
            time: E(360),

        },
        get effect() {
            return 1
        },
        get unlocked() {
            return hasResearch('5D31')
        }
    },
    "5D41": {
        researchDesc: "5D ^7 to 4D's multiplier is removed, but get 5D to 4D's exponentplier"  ,
        cost: {
            time: E(180),

        },
        get effect() {
            let x = player.secutitation.mm5_volumes.energy
            return x.log10().div(5e3).max(0)
        },
        get effectDisplay() {
            return "+"+this.effect.formatA()+" to 4D Dimensions exponentplier"
        },
        get unlocked() {
            return hasResearch('5D31')
        }
    },
    "6E41": {
        researchDesc: "Unlock 6DPoint-Allocate.",
        cost: {
            time: E(1440)
        },
        get unlocked() {
            return hasResearch('5D41')
        }

    },
    "6B32": {
        researchDesc: "Late 4D volumes softcap^4 by ^1.2.",
        cost: {
            time: E(1440),
            mm63125: E(50000)
        },
        get unlocked() {
            return hasResearch('6E41')
        }

    },
    "7A11": {
        researchDesc: "Unlock next layer, Void.",
        cost: {
            time: E30825
        },
        unlocked: false
    },
    "8A11": {
        researchDesc: "!?@#>?!#?>!@?#?>!@?*(&%($#",
        cost: {
            time: EEE9
        },
        unlocked: false
    },
}
function ihraed(id,defaultV=1){
    if (hasResearch(id)){
        return mm6_researches[id].effect
    }else{
        return defaultV
    }
}
function checkDynamicResearch(){
    let id = player.exponenting.research.researchSelects[0] +
        player.exponenting.research.researchSelects[1] +
        player.exponenting.research.researchSelects[2] +
        player.exponenting.research.researchSelects[3]
    if (!mm6_researches[id] || !mm6_researches[id].unlocked) {
        setResearchScreenTextTime("Research system cannot found Research.")
    }else if(mm6_researches[id].effectDisplay){
        setResearchScreenTextTime("Research Effect: "+mm6_researches[id].effectDisplay)
    }else{
        setResearchScreenTextTime("This research doesn't have dynamic effects.")
    }
}
function getProgressWidth(id){
    if (player.exponenting.research.researchId){
        let research = mm6_researches[player.exponenting.research.researchId]
        if (id == 1 && research.cost.time) {
            return player.exponenting.research.researchTimeSpent.div(research.cost.time).mul(100).toNumber() + "%"
        }
        if (id == 2 && research.cost.mm63125) {
            return player.exponenting.research.research63125Dspent.div(research.cost.mm63125).mul(100).toNumber() + "%"
        }
    }
    return "0%"
}
function stopResearch(){
    player.exponenting.research.researchId = ''
    player.exponenting.research.research63125Dspent = E(0)
    player.exponenting.research.research6Dspent = E(0)
    player.exponenting.research.researchTimeSpent = E(0)

}
function getResearchScreenText() {
    return researchTextReplace
}
function clearScreen(){
    clearTimeout(researchScreenTimeout);
    researchTextReplace = researchTextReplaceDefault
}
function setResearchScreenTextTime(text, time = 2500) {
    clearScreen()
    researchTextReplace = text;
    researchScreenTimeout = setTimeout(function () {
        researchTextReplace = researchTextReplaceDefault
    }, time)
}

function getSubResearchCount(researchSelected) {
    if (researchSelected[1] == null) {
        let temp1 = 0;
        for (const key of ['A','B','D', 'C','E', 'F']) {
            temp1 += getSubResearchCount([researchSelected[0], key])
        }
        return temp1
    }
    else if (researchSelected[2] == null) {
        let temp1 = 0;
        for (const key of ['1', '2', '3', '4']) {
            temp1 += getSubResearchCount([researchSelected[0], researchSelected[1], key])
        }
        return temp1
    }
    else if (researchSelected[3] == null) {
        let temp1 = 0;
        for (const key of [1, 2, 3, 4]) {
            let temp2 = mm6_researches[researchSelected[0] + researchSelected[1] + researchSelected[2] + key]
            if (temp2 != undefined && temp2.unlocked) {
                temp1++
            }
        }
        return temp1
    }
}

function hasResearch(id) {
    return player.exponenting.research.researchGetted.includes(id)
}
function researchStart() {
    let id = player.exponenting.research.researchSelects[0] +
        player.exponenting.research.researchSelects[1] +
        player.exponenting.research.researchSelects[2] +
        player.exponenting.research.researchSelects[3]
    if (!mm6_researches[id] || !mm6_researches[id].unlocked) {
        setResearchScreenTextTime("Research System cannot found Research.")
        
    }else{
        player.exponenting.research.researchId = id;

    }
}
function searchResearches() {
    if (!player.exponenting.research.researchSelects[0] &&
        !player.exponenting.research.researchSelects[1] &&
        !player.exponenting.research.researchSelects[2] &&
        !player.exponenting.research.researchSelects[3]) {
        setResearchScreenTextTime("????")
    } else if (!player.exponenting.research.researchSelects[0] ||
        !player.exponenting.research.researchSelects[1] ||
        !player.exponenting.research.researchSelects[2] ||
        !player.exponenting.research.researchSelects[3]) {
            let temp1 = ""
            setResearchScreenTextTime(`Research System found ${getSubResearchCount(player.exponenting.research.researchSelects)} researches in this researches group.`, 2000)
    } else {
        let id = player.exponenting.research.researchSelects[0] +
            player.exponenting.research.researchSelects[1] +
            player.exponenting.research.researchSelects[2] +
            player.exponenting.research.researchSelects[3]
        if (mm6_researches[id] && mm6_researches[id].unlocked) {
            let temp1 = "Research System found a researchable object!<br><br>Research Desc: " + mm6_researches[id].researchDesc
                + "<br><br>Need: <br>"
            if (mm6_researches[id].cost.time) {
                temp1 = temp1.concat(mm6_researches[id].cost.time.format())
                temp1 = temp1.concat(" time<br>")
            }
            if (mm6_researches[id].cost.mm63125) {
                temp1 = temp1.concat(format(mm6_researches[id].cost.mm63125))
                temp1 = temp1.concat(" mm<sup>6.3125</sup><br>")
            }
            if (mm6_researches[id].cost.mm6) {
                temp1 = temp1.concat(format(mm6_researches[id].cost.mm6))
                temp1 = temp1.concat(" mm<sup>6</sup><br>")
            }
            temp1 = temp1.concat("<br>Push \"Research\" button to research.")
            if (hasResearch(id)){
                temp1 = temp1.concat("<br><span style=\"color: #00ff00\">This research you'd already got!</span>")
            }
            setResearchScreenTextTime(temp1, 5000)
        } else {
            if (Math.random()<0.1){
                setResearchScreenTextTime(`Rickroll System found a rickrollable object!<br><br>Rickroll Desc: You<br><br>Need: <br>Never gonna give you up ms<br>Never gonna let you down mm<sup>4</sup><br>Never gonna around and desert you mm<sup>6</sup>`)
            }else{
                setResearchScreenTextTime("Research System doesn't found a researchable object...")
            }

        }
    }
}

function researchLoop() {
    if (player.exponenting.research.researchSelects[0]) {
        if (player.exponenting.research.researchSelects[0].array) {
            player.exponenting.research.researchSelects[0] = player.exponenting.research.researchSelects[0].toNumber()
        }
    }
    if (player.exponenting.research.researchSelects[2]) {
        if (player.exponenting.research.researchSelects[2].array) {
            player.exponenting.research.researchSelects[2] = player.exponenting.research.researchSelects[2].toNumber()
        }
    }
    if (player.exponenting.research.researchSelects[3]) {
        if (player.exponenting.research.researchSelects[3].array) {
            player.exponenting.research.researchSelects[3] = player.exponenting.research.researchSelects[3].toNumber()
        }
    }
    if (player.exponenting.research.researchSelects.length < 4) {
        player.exponenting.research.researchSelects = [null, null, null, null]
    }
    if (player.exponenting.research.researchId){

        player.exponenting.research.researchTimeSpent = player.exponenting.research.researchTimeSpent.add(diff2.mul(getMM63125Effect()))
        if (Object.hasOwn(mm6_researches[player.exponenting.research.researchId].cost,"mm63125")){
            if (player.exponenting.research.research63125Dspent.lt(mm6_researches[player.exponenting.research.researchId].cost.mm63125)){
                let addMore = player.exponenting.pointAllocate.mm63125.mul(0.3).mul(diff2);
                player.exponenting.research.research63125Dspent = player.exponenting.research.research63125Dspent.add(addMore)
                player.exponenting.pointAllocate.mm63125 = player.exponenting.pointAllocate.mm63125.sub(
                    addMore
                )
                if (player.exponenting.research.research63125Dspent.gt(mm6_researches[player.exponenting.research.researchId].cost.mm63125)){
                    let overflowP = player.exponenting.research.research63125Dspent.sub(mm6_researches[player.exponenting.research.researchId].cost.mm63125)
                    player.exponenting.research.research63125Dspent = player.exponenting.research.research63125Dspent.sub(
                        overflowP
                    )
                    player.exponenting.pointAllocate.mm63125 = player.exponenting.pointAllocate.mm63125.add(overflowP)
                }
            }
        }

        if (mm6_researches[player.exponenting.research.researchId].cost.time.lte(player.exponenting.research.researchTimeSpent)

        ){
            if (Object.hasOwn(mm6_researches[player.exponenting.research.researchId].cost,"mm63125")){
                if (player.exponenting.research.research63125Dspent.gte(mm6_researches[player.exponenting.research.researchId].cost.mm63125)){
                    doneResearch()
                }
            }else{
                doneResearch()
            }
            
        }

       
    }
}
function doneResearch(){
    player.exponenting.research.researchGetted.push(player.exponenting.research.researchId)
    stopResearch()

}
function researchTypeSelected(index, value) {
    return Boolean(player.exponenting.research.researchSelects[index] == value)
}

function toggleResearchSelectType(index, value) {
    if (player.exponenting.research.researchSelects[index] !== value) {
        player.exponenting.research.researchSelects[index] = value
    }
}
function clearSelectedType() {
    player.exponenting.research.researchSelects = [null, null, null, null]
}

function getProgressText(x){
    switch(x){
        case 1:
            return "Time: "+player.exponenting.research.researchTimeSpent.formatA()
        case 2:
            if (!hasResearch('6E41')) return "Unknown resource type."
            return "mm<sup>6.3125</sup>: "+player.exponenting.research.research63125Dspent.formatA()
    }
    return "Unknown resource type."
}