function allocate(x) {
    let allocateCount = E(0)
    switch(x){
        case 1:
            if (ExpantaNum.isNaN(app.input1)){
                addNotify("Invaild Number");
            }
            allocateCount = E(app.input1).floor()
            break;
        case 2:
            if (ExpantaNum.isNaN(app.input2)){
                addNotify("Invaild Number");
            }
            allocateCount = E(app.input2).floor()
            break;
        case 3:
            if (ExpantaNum.isNaN(app.input3)){
                addNotify("Invaild Number");
            }
            allocateCount = E(app.input3).floor()
            break;
    }
    if (allocateCount.mul(1e8).gt(player.exponenting.points)){
        allocateCount = player.exponenting.points.div(1e8).floor()
    }

    if (allocateCount.lt(0)){
        allocateCount = E(0)
    }

    player.exponenting.points = player.exponenting.points.sub(
        allocateCount.mul(1e8)
    )

    switch(x){
        case 1:
            player.exponenting.pointAllocate.mm6125 = player.exponenting.pointAllocate.mm6125.add(allocateCount)
            break;
        case 2:
            player.exponenting.pointAllocate.mm625 = player.exponenting.pointAllocate.mm625.add(allocateCount)
            break;
        case 3:
            player.exponenting.pointAllocate.mm6375 = player.exponenting.pointAllocate.mm6375.add(allocateCount)
            break;
    }

}

function updateAllocate(){
    player.exponenting.pointAllocate.mm61875 = player.exponenting.pointAllocate.mm61875.add(player.exponenting.pointAllocate.mm6125.mul(diff2))
    player.exponenting.pointAllocate.mm63125 = player.exponenting.pointAllocate.mm63125.add(player.exponenting.pointAllocate.mm625.mul(diff2))
    player.exponenting.pointAllocate.mm64375 = player.exponenting.pointAllocate.mm64375.add(player.exponenting.pointAllocate.mm6375.mul(diff2))
}

function getMM61875Effect(){
    return player.exponenting.pointAllocate.mm61875.log10().max(0)
}
function getMM63125Effect(){
    return player.exponenting.pointAllocate.mm63125.log10().max(1)
}
function getMM64375Effect(){
    return player.exponenting.pointAllocate.mm64375.root(5).max(1)
}