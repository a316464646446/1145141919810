function toggleMM35Copying(){
    player.mm35_volumes.machineState = !player.mm35_volumes.machineState
}

function displayMachineState(){
    return player.mm35_volumes.machineState ? "End Copying" : "Start Copying"
}

function mm35_loop(){
    player.mm35_volumes.machineState=true
    if (player.mm35_volumes.machineState &&player.mm35_volumes.unl){
        player.mm35_volumes.points = player.mm35_volumes.points.mul(tmp.mm35.replicatePerSecond.pow(diff));
        if (player.mm35_volumes.points.gte(tmp.mm35.cap)){
            player.mm35_volumes.points = tmp.mm35.cap
        }
    }
    if (!player.mm35_volumes.unl){
        player.mm35_volumes.points = E(1)
    }
    if (player.mm35_volumes.points.gte("1e100") && !player.mm3_volumes.unl){
        for (let i=0;i<8;i++){
            player.dimensions[DIMENSIONS_POINTS][i] = player.dimensions[DIMENSIONS_POINTS][i].div(tmp.mm35.san_xiang_bo_decrease.max(1))

        }
        player.volumes = player.volumes.div(tmp.mm35.san_xiang_bo_decrease.max(1))

        player.mm35_volumes.san_xiang_bo_points = player.mm35_volumes.san_xiang_bo_points.add(diff/10);
        if (player.mm35_volumes.san_xiang_bo_points.lt(1)){
            player.mm35_volumes.san_xiang_bo_points = E(1)
        }
        if (player.volumes.lt("11")){
            no_reward_mm3_reset()
            player.mm3_volumes.points =player.mm3_volumes.points.add(1);
        }
    }
}