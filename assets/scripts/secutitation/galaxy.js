function mm5Galaxycost(){ //50 100 800
    let x = player.secutitation.mm5_volumes.galaxies
    let temp1 = E.mul("1e6",E.pow("1e3.2",x));
    /*if (x.gte(50)){
        temp1 = temp1.mul(E.pow(10,x.sub(49)))
    }
    if (x.gte(100)){
        temp1 = temp1.mul(E.pow(10,x.sub(99).pow(1.5)))
    }
    if (x.gte(1000)){
        temp1 = temp1.mul(E.pow("1e100",x.sub(999)))
    }*/
    return temp1
    /*if (player.secutitation.mm5_volumes.galaxies.eq(0)){
        return E("1e9");
    }
    if (player.secutitation.mm5_volumes.galaxies.eq(1)){
        return E("1e12");
    }
    if (player.secutitation.mm5_volumes.galaxies.eq(2)){
        return E("1e15");
    }
    if (player.secutitation.mm5_volumes.galaxies.eq(3)){
        return E("1e18");
    }
    return E.GRAHAMS_NUMBER*/
}
function buyMaxGalaxies(){
    let temp1 = player.secutitation.mm5_volumes.energy.div("1e6").logarithm("1e3.2").floor()
    if (temp1.gt(player.secutitation.mm5_volumes.galaxies)){
        player.secutitation.mm5_volumes.galaxies = temp1.clone()
    }
}
const galaxy_rewards = [
    {
        req: E("1"),
        desc: "2~7<sup>th</sup> 4D Dimensions multiplier ^1.01"
    },
    {
        req: E("2"),
        desc: "2~7<sup>th</sup> 4D Dimensions multiplier ×1e1,000,000"
    },
    {
        req: E("3"),
        desc: "Purchasing mm<sup>5</sup> galaxies doesn't reset anything"
    },
    {
        req: E("4"),
        desc: "2~7<sup>th</sup> 4D Dimensions multiplier ×1e10,000"
    },
    {
        req: E("5"),
        desc: "mm<sup>5</sup> reset doesn't reset mm<sup>5</sup> energies"
    },
    {
        req: E("6"),
        desc: "Get a 5D Dimensions multiplier based on mm<sup>4</sup> volumes",
        get effect() {
            return player.volumes.logarithm(2).logarithm(2).max(1)
        },
        get effectDisplay() {
            return "×"+this.effect.format();
        }
    },{
        req: E("10"),
        desc: "Get a 4D Dimensions multiplier based on galaxies count",
        get effect() {
            return E(10).pow(shortcut.mm5.galaxies.pow(1.264454438).mul(1000))
        },
        get effectDisplay() {
            return "×"+this.effect.format();
        }
    },{
        req: E("85"),
        desc: "Get a 4D Dimensions exponentplier based on galaxies count(max 500 galaxies)",
        get effect() {
            return shortcut.mm5.galaxies.min(500).sub(9).logarithm(10).div(40).mul(hasResearch("5D31") ? 12 : 1).max(0)
            /*
            
            */
        },
        get effectDisplay() {
            return "+"+this.effect.format();
        }

    },{
        req: E("290"),
        desc: "You can maxinum buy Galaxies",
    }/*
    {
        req: E("7"),
        desc: "1<sup>st</sup> 4D Dimensions exponentplier +0.05"
    },
    {
        req: E("8"),
        desc: "Improve 5D Dimensions to 4D Dimensions' multiplier formula (x^5 → x^1e5)"
    },
    {
        req: E("9"),
        desc: "Imp 5D→4D multiplier formula (x^1e5 → x^1e6)"
    },
    {
        req: E("10"),
        desc: "All 4D Dimensions multiplier ^1.02"
    }*/
]
function mm5_gal_reset(){
    if (player.secutitation.mm5_volumes.galaxies.lt(2)){
        player.mm5_volume_dimensions[DIMENSIONS_POINTS][0] = E(0);
        player.secutitation.mm5_volumes.energy = E(1);
    }

    player.secutitation.mm5_volumes.galaxies = player.secutitation.mm5_volumes.galaxies.add(1);

}
function mm5_gal_reset_manmade(){
    if (player.secutitation.mm5_volumes.energy.gte(tmp.mm5.galaxycost)){
        mm5_gal_reset()
    }
}
function getSuperMM5GalaxyType(){
    return ""
}
function getMM5galaxyText(){
    let a = `Reach `
    let x = player.secutitation.mm5_volumes.galaxies;
    a = a.concat(tmp.mm5.galaxycost.formatA())
    a = a.concat(` mm<sup>5</sup> energy for a mm<sup>5</sup> galaxy`)
    if (x.lt(galaxy_rewards[galaxy_rewards.length-1].req)){
        for (let i=0;i<galaxy_rewards.length;i++){
            if (x.lt(galaxy_rewards[i].req)){
                a = a.concat("<br>In ")
                a = a.concat(galaxy_rewards[i].req.formatA())
                if (galaxy_rewards[i].req.eq(1)){
                    a = a.concat(" galaxy, ")
                }else{
                    a = a.concat(" galaxies, ")
                }
                a = a.concat(galaxy_rewards[i].desc)
                if (galaxy_rewards[i].effectDisplay){
                    a = a.concat("<br> Currently:");
                    a = a.concat(galaxy_rewards[i].effectDisplay);
                }
                return a;
            }
        }
    }
    return a;
}
function statMM5galaxies() {
    let temp1 = "";
    let x = player.secutitation.mm5_volumes.galaxies;
    for (let i=0;i<galaxy_rewards.length;i++){
        if (x.gte(galaxy_rewards[i].req)){
            let a = "";
            a = a.concat("In ")
            a = a.concat(galaxy_rewards[i].req.formatA())
            if (galaxy_rewards[i].req.eq(1)){
                a = a.concat(" galaxy, ")
            }else{
                a = a.concat(" galaxies, ")
            }
            a = a.concat(galaxy_rewards[i].desc)
            if (galaxy_rewards[i].effectDisplay){
                a = a.concat(" Currently:");
                a = a.concat(galaxy_rewards[i].effectDisplay);
            }
            temp1 = temp1.concat(a)
            temp1 = temp1.concat("<br>")
            a = ""
        }
    }
    return temp1;

}