"use strict";
var hasLoaded = {status: false};
var player = {};
var developer = {
    timeboost: 1
};
ExpantaNum.prototype.format = function (){
    return format(this);
}
ExpantaNum.prototype.formatA = function (){
    return  gameNaNed ? "NaN" : formatA(this);
}
function formatA(...args){
    return gameNaNed ? "NaN" : format(...args)
}
function formatWholeA(...args){
    return gameNaNed ? "NaN" : formatWhole(...args)
}
function formatGainA(...args){
    return gameNaNed ? "NaN OoM^^2" : formatGain(...args)
}
function softcap(value,start,power,mode,dis=false){
    var x = value.clone()
    if (!dis&&x.gte(start)) {
        if ([0, "pow"].includes(mode)) x = x.div(start).max(1).pow(power).mul(start)
        if ([1, "mul"].includes(mode)) x = x.sub(start).div(power).add(start)
        if ([2, "exp"].includes(mode)) x = expMult(x.div(start), power).mul(start)
        if ([3, "log"].includes(mode)) x = x.div(start).log(power).add(1).mul(start)
    }
    return x
}
ExpantaNum.prototype.softcap = function (start,power,mode,dis=false){
    var x = this.clone()
    return softcap(x,start,power,mode,dis)
}
ExpantaNum.softcap = function(x,...args){
    return softcap(x,...args)
}
ExpantaNum.prototype.tenpow = function (){
    return ExpantaNum.pow(10,this)
}
ExpantaNum.tenpow = function (x){
    return ExpantaNum.pow(10,x)
}
/*
=

* Q.softcap = Q.soft = function (a, start, power, mode, dis=false) {
    return new ExpantaNum(a).softcap(start,power, mode, dis)
  }
  P.softcap = P.soft = function (start, power, mode, dis=false) {
    var x = this.clone()
    if (!dis&&x.gte(start)) {
      if ([0, "pow"].includes(mode)) x = x.div(start).max(1).pow(power).mul(start)
      if ([1, "mul"].includes(mode)) x = x.sub(start).div(power).add(start)
      if ([2, "exp"].includes(mode)) x = expMult(x.div(start), power).mul(start)
      if ([3, "log"].includes(mode)) x = x.div(start).log(power).add(1).mul(start)
    }
    return x
  }*/
function expMult(a,b,base=10) {
    return ExpantaNum.gte(a,10) ? ExpantaNum.pow(base,ExpantaNum.log(a,base).pow(b)) : E(a)
}

const DIMENSIONS_POINTS = 0;
const DIMENSIONS_MULTI = 1;
const DIMENSIONS_BOUGHT = 2;
const DIMENSIONS_COST = 3;
const DIMENSIONS_EXPONENT = 4;

function ENify(a) {
    let b = new ExpantaNum(0);
    if (a !== undefined) {
        b.array = a.array;
        b.layer = a.layer;
        b.sign = a.sign;
    }
    return b
}

function fromCharCodes(list){
    let result = ""
    for (const a of list){
        result += String.fromCharCode(a)
    }
    return result
}
function doubleExponentSoftcap(value,start,power){
    let temp2 = value.clone();
    let temp3 = temp2.clone();
    if (value.gte(start)){
        temp3 = start.log10().log10().add(
            temp2.log10().log10().sub(start.log10().log10()).mul(power)
        ).tenpow().tenpow()
    }
    return temp3;
}

const E30825 = E(Number.MAX_VALUE);
const EE5 = E("ee5");
const EE10 = E("ee10");
const EE1000 = E("ee1000");
const EEE9 = E("eee9");
const K9E15 = E("10").expansion(Number.MAX_SAFE_INTEGER)

const ENDGAME= E("e1.2e110");
const LY = E("9454254955488000000");
const UNI = LY.mul("9.3e10");
const mm5_scale = [2,8,32,128,512,2048,8192,32768]
const three_tetr_four = E(3).tetr(4)

const MEGAVERSE = E("ee24")