function no_reward_mm5_reset(){
    no_reward_mm3_reset()
    if (player.secutitation.secutitation_reset_times.lt(4-1)){
        player.mm3_volumes.mm45buyables = [0,0,0]
    }
    if (player.secutitation.secutitation_reset_times.lt(6)){
        player.mm3_volumes.challenges = []
    }else{
        player.mm3_volumes.challenges = [1,2,3,4,5,6,7,8]
    }
    player.mm3_volumes.in_sacrifice = false
    player.mm3_volumes.mm45_points = E(0)
    player.mm3_volumes.points = E(0)
    player.mm3_volumes.sacrifice_times = E(0)
    player.mm3_volumes.upgrades = []

    player.mm35_volumes.points = E(1);
    player.mm35_volumes.san_xiang_bo_points = E(1);
    player.mm35_volumes.unl = false;
    if (player.secutitation.mm5_volumes.galaxies.lt(5)){
        player.secutitation.mm5_volumes.energy = E(1);
    }
    if (player.secutitation.secutitation_reset_times.lt(2)){
        player.upgrades = [];
        player.auto = []
    }else{
        player.upgrades = [1,2,3,4,5,6]
    }
}

function doMM5reset(){
    player.secutitation.secutitation_reset_times = player.secutitation.secutitation_reset_times.add(
        1 * (player.exponenting.unl ? 100 : 1)
        
        )
    player.secutitation.points = player.secutitation.points.add(tmp.mm5.secu_gain)
    player.secutitation.mm5_volumes.points = player.secutitation.mm5_volumes.points.add(tmp.mm5.gain)
    no_reward_mm5_reset()

}

function doMM5resetManmade(){
    if (player.secutitation.secutitation_reset_times.eq(0)){
        if (confirm("Do you want to reset? It'll reset your mm^3 challenges, mm^4.5 volumes mm^3 volumes and a lot of!!!")){
            doMM5reset()
        }
    }else{
        doMM5reset()
    }
    
}
function buymm5dimMax(dim){
    let x = player.secutitation.mm5_volumes.points.clone();
    let temp1 = x.logarithm(mm5_scale[dim-1]).ceil()
    if (temp1.gt(player.mm5_volume_dimensions[DIMENSIONS_BOUGHT][dim - 1])){
        player.mm5_volume_dimensions[DIMENSIONS_POINTS][dim-1] = 
        player.mm5_volume_dimensions[DIMENSIONS_POINTS][dim-1].add(temp1.sub(player.mm5_volume_dimensions[DIMENSIONS_BOUGHT][dim - 1]))
        player.mm5_volume_dimensions[DIMENSIONS_BOUGHT][dim - 1] = temp1.clone()

    }
}
function buymm5dim(dim) {
    if (player.secutitation.mm5_volumes.points.gte(player.mm5_volume_dimensions[DIMENSIONS_COST][dim - 1])) {

        if (!hasMM6Upg(10)) player.secutitation.mm5_volumes.points = player.secutitation.mm5_volumes.points.sub(player.mm5_volume_dimensions[DIMENSIONS_COST][dim - 1])
        
        player.mm5_volume_dimensions[DIMENSIONS_BOUGHT][dim - 1] = player.mm5_volume_dimensions[DIMENSIONS_BOUGHT][dim - 1].add(1);
        player.mm5_volume_dimensions[DIMENSIONS_POINTS][dim - 1] = player.mm5_volume_dimensions[DIMENSIONS_POINTS][dim - 1].add(1); //     player.volumes = player.volumes.sub(E.pow(10,temp1.mul(dim).ceil()))


        return true
    }
    return false


}


function calculate_mm5dim() {
    buyMM52Max(1)
    buyMM52Max(2)
    player.secutitation.mm5_volumes.energy = player.secutitation.mm5_volumes.energy
            .add(
                player.mm5_volume_dimensions[DIMENSIONS_POINTS][0]
                    .mul(player.mm5_volume_dimensions[DIMENSIONS_MULTI][0])

                    .mul(diff)
            );

    for (let i = 0; i < 7; i++) {
        player.mm5_volume_dimensions[DIMENSIONS_POINTS][i] = player.mm5_volume_dimensions[DIMENSIONS_POINTS][i]
            .add(
                player.mm5_volume_dimensions[DIMENSIONS_POINTS][i + 1]
                    .mul(player.mm5_volume_dimensions[DIMENSIONS_MULTI][i + 1])

                    .mul(diff)
            );
            player.mm5_volume_dimensions[DIMENSIONS_MULTI][i] = tmp.mm5.getDimMultiplier(i + 1);
        if (player.mm5_volume_dimensions[DIMENSIONS_POINTS][i].isNaN()) {
            player.mm5_volume_dimensions[DIMENSIONS_POINTS][i] = E(0);
        }
        if (player.auto.includes(13+i)){
            buymm5dimMax(i+1)
        }
    }


    if (player.secutitation.secutitation_reset_times.gte(1)){
        player.mm3_volumes.sacrifice_times = E(1000)
    }
    if (player.secutitation.secutitation_reset_times.gte(4)){
        player.mm3_volumes.points = player.mm3_volumes.points.max("1e10")
    }
    if (player.secutitation.secutitation_reset_times.gte(5)){
        player.volumes = player.volumes.max("1e100")
    }
    if (player.secutitation.secutitation_reset_times.gte(6)){
        for (let i = 1; i < 18; i++){
            if (!hasMM4Upg(i) && mm4_upgrades[i-1].cost.lte(player.volumes)){
                buyMM4Upg(i)
            }
        }
        for (let i = 1; i < 9; i++){
            if (!hasMM3Upg(i) & mm3_opt.upgrades[i-1].cost.lte(player.mm3_volumes.points)){
                buyMM3Upg(i)
            }
        }
    }
    if (player.secutitation.secutitation_reset_times.gte(10) || player.exponenting.unl || secret_achievement_data.dev_passive_generate){
        player.mm3_volumes.points = player.mm3_volumes.points.add(tmp.mm3.gain.mul(diff))
    }
}

