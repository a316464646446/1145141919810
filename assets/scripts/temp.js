var tmp = {

    dimension: {
        getDimMultiplier(dimid, softcapped = true) {
            i = dimid - 1;
            if (between(1, dimid, 8)) {
                let result = E('2')
                if (hasMM3Upg(7)) {
                    result = E("2.1")
                }
                if (hasMM3Upg(8)) {
                    result = E("2.105")
                }
                //.add(player.mm3o5_volumes.points.logarithm("100").div(10).minimum("1.5")))
                result = result.pow(player.dimensions[DIMENSIONS_BOUGHT][i].floor())
                result = result.mul(tmp.mm35.effect_to_dimensions);

                if (hasMM4Upg(1) && i === 0) {
                    result = result.mul(mm4_upgrades[0].effect);
                }
                if (hasMM4Upg(2) && i === 6) {
                    result = result.mul(mm4_upgrades[1].effect);
                }
                if (hasMM4Upg(4)) {
                    result = result.mul(mm4_upgrades[3].effect);
                }
                if (hasMM4Upg(6)) {
                    result = result.mul(E.pow(1.001, player.dimensions[DIMENSIONS_BOUGHT][i].div(10).floor()));
                }
                if (hasMM3Upg(2)) {
                    result = result.mul("1e10")
                }
                if (hasMM3Chal(2)) {
                    result = result.mul("1e3")
                }
                if (hasMM3Chal(3)) {
                    result = result.pow(1.1);
                }
                if (hasMM3Chal(5) && i === 7) {
                    result = result.mul("1e200");
                }
                if (player.inMM3Challenge === 3 || player.inMM3Challenge === 8) {
                    result = result.pow(0.1);
                }
                if (player.inMM3Challenge === 7) {
                    result = result.div(E.pow("1e5", player.time.mm3));
                }
                if (dimid == 1) {
                    result = result.mul(E("e700").pow(player.mm3_volumes.mm45buyables[1]))
                } else {
                    result = result.mul(E("e600").pow(player.mm3_volumes.mm45buyables[2]));
                }
                result = softcap(result, tmp.dimension.softcap, hasMM3Upg(6) ? 0.95 : 0.9, "pow", dis = !softcapped)

                result = softcap(result, tmp.dimension.softcap2, hasMM5TowUpg(51) ? 0.95 : 0.7, "pow", dis = !softcapped)

                if (!hasResearch('5D41')) result = result.mul(tmp.mm5.energyeffect);
                if (player.secutitation.mm5_volumes.galaxies.gte("2") && dimid != 1) {
                    result = result.mul("e1e6")
                }
                if (player.secutitation.mm5_volumes.galaxies.gte("4") && dimid != 1) {
                    result = result.mul("e1e4")
                }
                if (dimid !== 1 && player.secutitation.mm5_volumes.galaxies.gte("1")) {
                    result = result.pow(1.01)
                }
                /*if (player.secutitation.mm5_volumes.galaxies.gte(10)){
                    result = result.pow(1.02)
                }*/
                if (hasMM5TowUpg(31)) {
                    result = result.mul("ee6")
                }
                if (player.inMM5Challenge == 1) {
                    temp1 = result.logarithm(10).logarithm(10)
                    temp1 = temp1.mul(0.25)
                    result = E(10).pow(E(10).pow(temp1));
                }
                result = result.mul(shortcut.secu.mm5_volumes.galaxies.gte(10) ? galaxy_rewards[6].effect : "1");
                result = result.mul(tmp.mm59.mm595Effect)
                if (player.compress.inCompress) { result = doubleExponentMult(result, tmp.mm59.compressPenalty) }
                if (softcapped){
                    result = doubleExponentSoftcap(result,this.softcap3,0.25)
                }
                return result;
            }
        },
        canbuyDim(dim) {
            /*if (player.dimensions[DIMENSIONS_COST][dim-1].gte(E.pow(10,Number.MAX_SAFE_INTEGER))){
                return false;
            }*/
            return true;
        },
        getDimScale(dimid) {
            let temp1 = E(10);
            temp1 = temp1.pow(dimid);
            if (dimid == 2 && hasMM5TowUpg(43)) {
                temp1 = E(26.445)
            }
            return temp1
        },
        getDimExponentplier(dimid) {
            let result = E(1)
            if (dimid === 8 && hasMM5Upg(1)) {
                result = result.add(0.05)
            }
            /*if (dimid === 1 && player.secutitation.mm5_volumes.galaxies.gte("7")){
                result = result.add(0.05)
            }*/
            if (dimid === 8) {
                result = result.add(0.01 * getMM5ChalCompletionTimes(1))
            }
            if (hasMM6Upg(1)) result = result.add(mm6_upgrades[0].effect)
            if (shortcut.mm5.galaxies.gte(76)) result = result.add(galaxy_rewards[7].effect)
            result = result.add(ihraed('5D41',0))
            if (dimid === 1)  result = result.add(getMM61875Effect())
            return result
        },
        get softcap() {
            let a = E("e308")
            if (hasMM4Upg(11)) {
                a = E("e400")
            }
            if (hasMM4Upg(12)) {
                a = E("e700")
            }
            if (hasMM4Upg(13)) {
                a = E("e800")
            }
            if (hasMM3Chal(6)) {
                a = E("1e1000")
            }
            if (hasMM4Upg(16)) {
                a = E("e12500")
            }
            if (player.inMM3Challenge === 6) {
                a = E("1e100")
            }
            a = a.mul(E("ee4").pow(player.mm3_volumes.mm45buyables[0]))
            return a
        },
        get softcap2() {
            let a = E("e1e7")
            return a;
        },
        get softcap3() {
            return E("ee525")
        }
    },
    mm45: {
        get sacrifice_goal() {
            let a = E("e6.5e4")
            a = a.mul(E.pow("e5e3", player.mm3_volumes.sacrifice_times))
            return a
        }
    },
    mm3: {
        get gain() {
            let a = player.volumes.div("1e8").root(300).div(10);
            if (hasMM4Upg(9)) {
                a = player.volumes.div("1e8").root(250).div(10);
            }
            if (hasMM5TowUpg(42)) {
                a = a.mul(E.pow(10, shortcut.mm5.energy.logarithm(2).mul(1000)))
            }
            //a=a.mul(hasMM5TowUpg(51)?"1e10000":1)
            return a

        },
        get resetable() {
            if (player.inMM3Challenge) {
                return player.volumes.gte(
                    mm3_challenges[player.inMM3Challenge - 1].complete_requirement
                )
            } else {
                return player.volumes.gte('1.797e308')
            }
        },
        confirm: 0
    },
    mm4: {
        get gain() { // gain per second
            let temp1 = player.dimensions[DIMENSIONS_POINTS][0]
            temp1 = temp1.mul(player.dimensions[DIMENSIONS_MULTI][0])
            temp1 = temp1.mul(hasMM3Upg(1) ? 1e5 : 1)
                .mul(hasMM3Chal(7) ? "1e500" : 1)
                .mul(hasMM5TowUpg(21) ? "1e10000" : 1)
            temp1 = temp1.overflow(tmp.mm4.softcap1_start, tmp.mm4.softcap1_power)
            temp1 = temp1.overflow(tmp.mm4.softcap2_start, tmp.mm4.softcap2_power)
                .pow(player.dimensions[DIMENSIONS_EXPONENT][0])
            temp1 = temp1.mul(hasMM5TowUpg(61) ? (
                player.secutitation.mm53.pow(2).tenpow().logarithm(3).tenpow()
            ) : 1)

            
            if (player.compress.inCompress) { temp1 = doubleExponentMult(temp1, tmp.mm59.compressPenalty) }

            temp1 = doubleExponentSoftcap(temp1, tmp.mm4.softcap3_start, tmp.mm4.softcap3_power)
            temp1 = doubleExponentSoftcap(temp1, tmp.mm4.softcap4_start, tmp.mm4.softcap4_power)
            if (temp1.gte(tmp.mm4.softcap4_start)){
                temp1 = tmp.mm4.softcap4_start.log10().log10().add(
                    temp1.log10().log10().sub(tmp.mm4.softcap4_start.log10().log10()).mul(tmp.mm4.softcap4_power)
                ).tenpow().tenpow()
            }
            return temp1;
        },
        get softcapped1() {
            return tmp.mm4.gain.gte(tmp.mm4.softcap1_start)
        },
        get softcap1_power() {
            return 0.9
        },
        get softcap1_start() {
            let temp1 = E("e1.2e14")
            if (hasMM6Upg(2)) temp1 = temp1.pow(mm6_upgrades[1].effect)
            temp1 = temp1.pow(ihraed("4B24"))
            return temp1
        },
        get softcapped2() {
            return tmp.mm4.gain.gte(tmp.mm4.softcap2_start)
        },
        get softcap2_power() {
            return 0.15 + (1-0.15)*ihraed("6F11",0)
        },
        get softcap2_start() {
            return E("e5e36")
        },
        get softcapped3() {
            return tmp.mm4.gain.gte(tmp.mm4.softcap3_start)
        },
        get softcap3_power() {
            return 0.75
        },
        get softcap3_start() {
            return E("e5e85").pow(ihraed("4B24"))
        },
        get softcapped4() {
            return tmp.mm4.gain.gte(tmp.mm4.softcap4_start)
        },
        get softcap4_power() {
            return 0.01
        },
        get softcap4_start() {
            return E("e1e110").pow(hasResearch('6B32') ? 1.2 : 1)
        },
    },
    mm35: {
        get replicatePerSecond() {
            let mult = E(1).add(E(0.1).mul(player.volumes.add(1).logarithm(10).div(80).max(1)))

            if (hasMM3Upg(4)) {
                mult = mult.pow(10)
            }
            if (player.inMM3Challenge == 4) {
                mult = E(1)

            }
            return mult.pow(tmp.mm5.mm35replicatemore)
        },
        get effect_to_dimensions() {

            let a = E("1")
            if (hasMM3Upg(3)) {
                a = player.mm35_volumes.points.logarithm(10).pow(2.01).div(10).max(1)
            } else {
                a = player.mm35_volumes.points.logarithm(10).pow(2).div(10).max(1)
            }

            if (player.inMM3Challenge == 1) {
                a = E(1)
            }
            if (hasMM3Chal(1)) {
                a = a.mul("1e3")
            }
            return a
        },
        get san_xiang_bo_decrease() {
            let a = player.mm35_volumes.san_xiang_bo_points.pow(diff)
            if (player.mm3_volumes.unl) {
                a = E(1)
            }
            return a
        },
        get cap() {
            let a = E("e5000")
            if (hasMM3Chal(4)) a = a.mul(mm3_challenges[4 - 1].reward_effect)

            return a
        }
    },
    mm5: {
        get gain() {
            let temp1 = player.volumes.clone();

            temp1 = temp1.logarithm(10).sub(4500000).div(500000)
            //temp1 = temp1.mul(hasMM5TowUpg(41) ? 30 : 1)
            temp1 = temp1.mul(
                E(2).pow(shortcut.secu.reacUpgrades[0])
            )
            temp1 = temp1.mul(tmp.mm6.fractal.fracEff1)
            temp1 = temp1.floor().max(0)
            return temp1
        },
        get nextmm5At() {
            return E.pow(10, this.gain.add(1).div((tmp.mm6.fractal.fracEff1)).div(E(2).pow(shortcut.secu.reacUpgrades[0]))/*.div(hasMM5TowUpg(41) ? 30 : 1)*/.mul(500000).add(4500000))
        },
        get secu_gain() {
            let temp1 = player.mm3_volumes.points.clone();
            return temp1.logarithm(10).sub(15000).div(5000).floor().max(0)

        },
        get nextSecuAt() {
            return E.pow(10, this.secu_gain.add(1).mul(5000).add(15000));

        },
        get resetable() {

            if (player.inMM5Challenge) {
                return player.mm3_volumes.points.gte(
                    mm5_challenges[player.inMM5Challenge - 1].complete_requirements[getMM5ChalCompletionTimes(player.inMM5Challenge)]
                )
            } else {
                return player.volumes.gte("e5e6") && player.mm3_volumes.points.gte("e2e4")
            }
        },
        get galaxycost() {
            return mm5Galaxycost()
        },
        getDimMultiplier(dimid) {
            i = dimid - 1;
            let result = E('1.5')
            if (hasResearch('5D11')){
                result = E(3)
            }
            //.add(player.mm3o5_volumes.points.logarithm("100").div(10).minimum("1.5")))
            result = result.pow(player.mm5_volume_dimensions[DIMENSIONS_BOUGHT][i].floor())
            /*if (hasMM5TowUpg(82)){
                result = result.pow(1.3)
            }*/
            result = result.mul(shortcut.secu.mm5_volumes.galaxies.gte(6) ? galaxy_rewards[5].effect : "1");
            return result;
        },
        /*
        1st dim x3
        2st dim x5
        3st dim x10
        4st dim x20
        5st dim x35
        6st dim x90
        7st dim x270
        8st dim x1729
        */
        get mm35replicatemore() {
            return shortcut.secu.secutitation_reset_times.gte(200) ? shortcut.mm5.points.max(1) : 1
        },

        dimcost(dimid) { // 1-8
            return E.pow(mm5_scale[dimid - 1], player.mm5_volume_dimensions[DIMENSIONS_BOUGHT][dimid - 1].add(1))
        },
        get energyeffectAfter5D41() {
            return mm6_researches['5D41'].effect
        },
        get energyeffect() {
            /*if (player.secutitation.mm5_volumes.galaxies.gte(9)){
                return player.secutitation.mm5_volumes.energy.pow("1e6")
            }
            if (player.secutitation.mm5_volumes.galaxies.gte(8)){
                return player.secutitation.mm5_volumes.energy.pow("1e5")
            }*/
            return player.secutitation.mm5_volumes.energy.pow(5 + (
                hasMM5TowUpg(41) ? 2 : 0
            ))
        }

    },
    tower: {
        get totalMM52() {
            return shortcut.secu.tower.fromMM3.add(shortcut.secu.tower.fromMM4.add(shortcut.secu.tower.fromMM5))
        },
        get mm52costFrommm3() {
            return E("e435000").mul(
                E("e2644.54438").pow(shortcut.secu.tower.fromMM3)
            )
        },
        get mm52costFrommm4() {
            return E("e5e6").mul(
                E("e1e6").pow(shortcut.secu.tower.fromMM4)
            )
        },
        get mm52costFrommm5() {
            return E("2").pow(shortcut.secu.tower.fromMM5)
        },
    },
    reactor: {
        get speed() {
            let temp1 = E(1)
            temp1 = temp1.mul(E.pow(1.8, shortcut.secu.reacUpgrades[1]))
            temp1 = temp1.mul(E.pow(2, shortcut.secu.reacUpgrades[2]))
            return temp1
        }

    },
    mm59: {
        get gain() {
            if (player.compress.inCompress) {
                //308
                return player.volumes.logarithm(10).sub(player.compress.highestMM4inCompress.max(1)/* max 1 beware of -Infinity*/.log10().max(308.2547)).add(1).floor().max(0)
            } else return E(0)
        },
        get mm595gain() {
            let temp1 =  player.compress.mm59.mul(
                E.pow(3, player.compress.buyables[0])
            ).mul(tmp.mm6.fractal.fracEff2).overflow("1e20",0.7)
            temp1 = temp1.overflow(this.mm595GainSoftcap,0.3)
            return temp1
        },
        get compressPenalty() {
            return E(0.5495).mul(E.pow(1.001, player.compress.buyables[2]))
        },
        get mm595Effect() {
            let temp1 = E.pow(
                E.add(1.165,player.compress.buyables[1].mul(0.02))
                , player.compress.mm595);
            if (temp1.gte("ee9")){
                let temp2 = temp1.log10().log10()
                let temp3 = temp2.sub(9).mul(0.7)
                temp1 = E.add(9,temp3).tenpow().tenpow()

            }
            if (temp1.gte("ee16")){
                let temp2 = temp1.log10().log10()
                let temp3 = temp2.sub(16).mul(0.85)
                temp1 = E.add(16,temp3).tenpow().tenpow()

            }
            return temp1
        },
        get mm595GainSoftcap() {
            let temp1 = E("e300")
            return temp1
        },
        get mm595EffectNosoftcap() {
            let temp1 = E.pow(
                E.add(1.165,player.compress.buyables[1].mul(0.02))
                , player.compress.mm595);
                return temp1

        },
        get mm595EffSoftcapped() {
            return this.mm595Effect.gte("ee9")
        },
        get mm595EffSoftcapText() {
            if (this.mm595Effect.gte("ee16")){
                return "<span class=\"softcap\">(softcapped<sup>2</sup>)</span>"
            }
            if (this.mm595Effect.gte("ee9")){
                return "<span class=\"softcap\">(softcapped)</span>"
            }
        }
    },
    get perMM6speed(){
        return this.mm6.perMM6speed.mul(getMM64375Effect())
    },
    mm6: {
        get gain() {
            let temp1 = player.volumes.log10().log10().sub(15.954589770191003).div("0.1").floor().add(1).mul(hasMM6Upg(6) ? mm6_upgrades[5].effect : 1).mul(hasMM6Upg(13) ? mm6_upgrades[12].effect : 1).floor().max(0);
            return temp1;
        },
        get nextMM6at() {
            return this.gain.floor().add(1).div(hasMM6Upg(13) ? mm6_upgrades[12].effect : 1).div(hasMM6Upg(6) ? mm6_upgrades[5].effect : 1).sub(1).mul(0.1).add(15.954589770191003).tenpow().tenpow()
        },
        get perMM6speed() {
            return E.add(1, player.volume_generated.mm6).overflow(1000, 0.9)
        },
        get resetable() {
            return player.volumes.log10().sub(9007199254740991).gte(0)
        },
        fractal: {
            get fracEff1() {
                return player.exponenting.fractal.fractals.gte(10) ? 
                player.exponenting.fractal.fractals.root(5).max(1) 
                : 1
            },
            get fracEff2() {
                return player.exponenting.fractal.fractals.gte(1000) ? player.exponenting.fractal.fractals.sub(995).root(10).max(1) : 1
            },
            get fracEff3() {
                return player.exponenting.fractal.fractals.gte(12000) ? player.exponenting.fractal.fractals.sub(690).root(10).max(1) : 1
            },
        }

    },
    mm6tower: {
        get totalMM61() {
            return player.exponenting.tower.from6DFractal
        },
        get mm61costFromFractal() {
            return E("3").mul(
                E("2").pow(player.exponenting.tower.from6DFractal)
            )
        }
    },
}