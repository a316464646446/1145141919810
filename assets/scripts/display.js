var gameNaNed=false;

function errorText(length, q) {
    let errorTexts = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁ˂˃˄˅ˆˇˈˉˊˋˌˍˎˏːˑ˒˓˔˕˖˗˘˙˚˛˜˝˞˟ˠˡˢˣˤ˥˦˧˨˩˪˫ˬ˭ˮ˯˰˱˲˳˴˵˶˷˸˹˺˻˼˽˾˿̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ͏͓͔͕͖͙͚͐͑͒͗͛ͣͤͥͦͧͨͩͪͫͬͭͮͯ͘͜͟͢͝͞͠͡ͰͱͲͳʹ͵Ͷͷ͸͹ͺͻͼͽ;Ϳ΀΁΂΃΄΅Ά·ΈΉΊ΋Ό΍ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ΢ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨϩϪϫϬϭϮϯϰϱϲϳϴϵ϶ϷϸϹϺϻϼϽϾϿЀЁЂЃЄЅІЇЈЉЊЋЌЍЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяѐёђѓєѕіїјљњћќѝўџѠѡѢѣѤѥѦѧѨѩѪѫѬѭѮѯѰѱѲѳѴѵѶѷѸѹѺѻѼѽѾѿҀҁ҂҃҄҅҆҇҈҉ҊҋҌҍҎҏҐґҒғҔҕҖҗҘҙҚқҜҝҞҟҠҡҢңҤҥҦҧҨҩҪҫҬҭҮүҰұҲҳҴҵҶҷҸҹҺһҼҽҾҿӀӁӂӃӄӅӆӇӈӉӊӋӌӍӎӏӐӑӒӓӔӕӖӗӘәӚӛӜӝӞӟӠӡӢӣӤӥӦӧӨөӪӫӬӭӮӯӰӱӲӳӴӵӶӷӸӹӺӻӼӽӾӿԀԁԂԃԄԅԆԇԈԉԊԋԌԍԎԏԐԑԒԓԔԕԖԗԘԙԚԛԜԝԞԟԠԡԢԣԤԥԦԧԨԩԪԫԬԭԮԯ԰ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖՙ՚՛՜՝՞՟աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆև։֊";
    if (q === 1) {
        errorTexts = "!\"#$%&'()*+,-./0123456789:;<=>?[\\]^_`abcdefghijklmnopqrstuvwxyz{|}àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿāăąćĉċčďđēĕėęěĝğġńņňŧũūŭůű"
    }
    let errorTextLength = errorTexts.length;
    let indexes = [];
    let result = "";
    for (let i = 0; i < length; i++) {
        indexes.push(Math.floor(Math.random() * errorTextLength));
    }
    for (let j = 0; j < length; j++) {
        result += (errorTexts[indexes[j]]);
    }
    return result

}

function getUndulatingColor(period = Math.sqrt(760)) {
    let t = new Date().getTime()
    let a = Math.sin(t / 1e3 / period * 2 * Math.PI)
    let b = Math.sin(t / 1e3 / period * 2 * Math.PI + 2)
    let c = Math.sin(t / 1e3 / period * 2 * Math.PI + 4)
    a = convertToB16(Math.floor(a * 128) + 128)
    b = convertToB16(Math.floor(b * 128) + 128)
    c = convertToB16(Math.floor(c * 128) + 128)
    return "#" + String(a) + String(b) + String(c)
}

function convertToB16(n) {
    let codes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let x = n % 16
    return codes[(n - x) / 16] + codes[x]
}

function getOpenClose(bool) {
    return bool ? "开" : "关"
}

function toggleNewsTicker() {
    player.options.showNewsTicker = !player.options.showNewsTicker
}

function toggleStickyDisplay() {
    player.options.stickyDisplay = !player.options.stickyDisplay
}

var notify = document.getElementById('notify');

// 显示通知框
function showNotify(str) {
    notify.classList.remove('hide');
    notify.innerHTML = str
}

// 隐藏通知框
function hideNotify() {
    notify.classList.add('hide');
}

function addNotify(str) {
    showNotify(str)
    setTimeout(function () {
        hideNotify()
    }, 2000)
}   // 单位
const format_config = [ //after ee9 mm^4
    "mlt", "mgv", "giv", "tev", "pev", "exv", "zev", "yov",
    "rnv", "quv", "xnv", "wkv", "vev", "udv", "trv", "srv",
    "qxv", "ppv", "ocv", "nev", "miv", "luv", "kev", "jrv",
    "iqv", "huv", "gav", "fev", "env", "dsv", "cev", "bev",
    "avv"
]
function display_volumes_stat(a) {
    if (a.lt("1e4")) {
        return `${formatWhole(a)} mm<sup>4</sup>`
    } else if (a.lt("1e8")) {
        return `${format(a.div("1e4"))} cm<sup>4</sup>`
    } else if (a.lt("1e12")) {
        return `${format(a.div("1e8"))} dm<sup>4</sup>`
    } else if (a.lt("1e16")) {
        return `${format(a.div("1e12"))} m<sup>4</sup>`
    } else if (a.lt("1e20")) {
        return `${format(a.div("1e16"))} Dem<sup>4</sup>`
    } else if (a.lt("1e24")) {
        return `${format(a.div("1e20"))} hm<sup>4</sup>`
    } else if (a.lt("1e36")) {
        return `${format(a.div("1e24"), 5, false)} km<sup>4</sup>`
    } else if (a.lt("1e48")) {
        return `${format(a.div("1e36"), 5, false)} Mm<sup>4</sup>`
    } else if (a.lt("1e60")) {
        return `${format(a.div("1e48"), 5, false)} Gm<sup>4</sup>`
    } else if (a.lt("1e72")) {
        return `${format(a.div("1e60"), 5, false)} Tm<sup>4</sup>`
    } else if (a.lt(LY.pow(4))) {
        return `${format(a.div("1e72"), 5, false)} Pm<sup>4</sup>`
    } else if (a.lt(LY.mul(1000).pow(4))) {
        return `${format(a.div(LY.pow(4)), 5, false)} ly<sup>4</sup>`
    } else if (a.lt(LY.mul('1e6').pow(4))) {
        return `${format(a.div(LY.mul(1000).pow(4)), 5, false)} kly<sup>4</sup>`
    } else if (a.lt(LY.mul('1e9').pow(4))) {
        return `${format(a.div(LY.mul('1e6').pow(4)), 5, false)} Mly<sup>4</sup>`
    } else if (a.lt(UNI.pow(4))) {
        return `${format(a.div(LY.mul('1e9').pow(4)), 5, false)} Gly<sup>4</sup>`
    } else if (a.lt('ee9')) {
        return `${format(a.div(UNI.pow(4)), 5, false)} uni<sup>4</sup>`
    } else if (a.lt('1e1e129')) {
        /*let log_v = a.logarithm(10);
        let temp1 = log_v.root("1e9").root("1e15").floor().toNumber() // javascript number
        let temp2 = a.logarithm(10).;*/
        let log_v = a.logarithm(10);
        // mlt log_v/1e9
        let temp14 = log_v.div("1e9")
        let temp15 = temp14.logarithm(10).div(15).floor()
        let temp16 = temp15.toNumber()// getindex
        let temp17 = temp14.div(E.pow("1e15", temp15));
        return `${temp17.format()} ` + format_config[temp16] + "<sup>4</sup>"
    } else if (a.lt('eee9')) {
        /*let log_v = a.logarithm(10);
        let temp1 = log_v.root("1e9").root("1e15").floor().toNumber() // javascript number
        let temp2 = a.logarithm(10).;*/
        let log_v = a.logarithm(10);
        // mlt log_v/1e9
        let temp14 = log_v.div("1e9")
        let temp15 = temp14.logarithm(10).div(15).floor()
        let temp17 = temp14.div(E.pow("1e15", temp15));
        return `${temp17.format()} ` + `(arv^${formatWhole(temp15.add(1))})<sup>4</sup>`
    } else {
        return `${format(a)} mm<sup>4</sup>`
    }
}

function display_volumes(a) {
    if (player.display_mode == 0){
        return a.formatA() + " mm<sup>4</sup>";
    }
    return display_volumes_stat(a)
}

function getMM4UpgClassName(id) {
    let upgradeClassName = 'mm4_upg';
    if (hasMM4Upg(id)) {
        upgradeClassName += '_bought';
    }
    if (player.volumes.gte(mm4_upgrades[id - 1].cost) && !hasMM4Upg(id)) {
        upgradeClassName += '_buyable';
    }
    //if (typeof (mm4_upgrades[id-1].disableInChal5) == "boolean") upgradeClassName = "mm4_upg_disabled"
    upgradeClassName += " mm4_upg_" + id.toString()
    return upgradeClassName
}
function getMM4UpgText() {
    let b;
    if (app.hover_upg === 0) return;
    let a = "[mm<sup>4</sup> Upgrade "
    a = a.concat(app.hover_upg)
    a = a.concat("]<br>")
    a = a.concat(mm4_upgrades[app.hover_upg - 1].desc)
    a = a.concat("<br>")
    a = a.concat("Cost: ")
    a = a.concat(display_volumes(mm4_upgrades[app.hover_upg - 1].cost))
    if (player.options.percentUpg && !hasMM4Upg(app.hover_upg)) {
        b = player.volumes.logarithm(10).div(mm4_upgrades[app.hover_upg - 1].cost.logarithm(10)).mul(100);
        a = a.concat(" (")
        if (b.lt("100")) {
            a = a.concat(b.format())
            a = a.concat("%")
        } else {
            a = a.concat("<span class='green'>Buyable</span>")
        }

        a = a.concat(")")
    }
    if (mm4_upgrades[app.hover_upg - 1].effectDisplay !== void 0) {
        a = a.concat("<br>")
        a = a.concat(`<span class="green">Currently: ${mm4_upgrades[app.hover_upg - 1].effectDisplay}</span>`)
    }
    return a
}
function e114e514() {
    ExpantaNum.prototype.format = function () {
        if (this.gte("ee3") && this.lt("ee8")) {
            let a = this.logarithm(10)
            let b = a.logarithm(10).floor()
            let c = a.div(E(10).pow(b));

            return `e${format(c)}e${format(b)}`;
        } else {
            return format(this)
        }
    }
    ExpantaNum.prototype.formatA = function () {
        if (this.gte("ee3") && this.lt("ee8")) {
            let a = this.logarithm(10)
            let b = a.logarithm(10).floor()
            let c = a.div(E(10).pow(b));
            return `e${format(c)}e${format(b)}`;
        } else {
            return format(this)
        }
    }
}
function getGameSpeedText() {
    let temp = developer.timeboost * player.options.gamespeed * (player.inMM3Challenge === 8 ? 0.001 : 1);
    if (temp === 1) {
        return "Game speed is normal: 1.000"
    } else {
        return `Game speed is altered: ${temp}`
    }

}

function togglePercentUpg() {
    player.options.percentUpg = !player.options.percentUpg
}
const EnglishOrdinals = [
    "1<sup>st</sup>",
    "2<sup>nd</sup>",
    "3<sup>rd</sup>",
    "4<sup>th</sup>",
    "5<sup>th</sup>",
    "6<sup>th</sup>",
    "7<sup>th</sup>",
    "8<sup>th</sup>",
    "9<sup>th</sup>",
]

function displayStat() {
    if (player.volumes.lt("ee5")) {
        return `如果对4维体积进行单位换算，You can get ${display_volumes(player.volumes)}`
    } else if (player.volumes.lt(E.E_MAX_SAFE_INTEGER)) {
        return `如果你每秒写1个数字，那么把你的4维体积写下来需要${formatTime.fromSeconds(player.volumes.log10().floor().add(1))}`
    }else if (player.volumes.lt(E.EE_MAX_SAFE_INTEGER)) {
        return `你的4维体积的指数为${player.volumes.log10().formatA()}`
    }
}

function getSoftcapType(a) {
    if (player.dimensions[DIMENSIONS_MULTI][a - 1].gte(tmp.dimension.softcap3)) {
        return "<span style='color: rgb(122, 0, 86);'>3<sup>rd</sup> softcap</span>"
    }
    if (player.dimensions[DIMENSIONS_MULTI][a - 1].gte(tmp.dimension.softcap2)) {
        return "<span style='color:rgb(121,0,0)'>2<sup>nd</sup> softcap</span>"
    }
    if (player.dimensions[DIMENSIONS_MULTI][a - 1].gte(tmp.dimension.softcap)) {
        return "<span style='color:red'>1<sup>st</sup> softcap</span>"
    }
}

function predictableRandom(x) {
    let start = Math.pow(x % 97, 4.3) * 232344573;
    const a = 15485863;
    const b = 521791;
    start = (start * a) % b;
    for (let i = 0; i < (x * x) % 90 + 90; i++) {
        start = (start * a) % b;
    }
    return start / b;
}

function randomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 50) + 192);
}

function wordCycle(list, noBuffer = false) {
    const len = list.length;
    const tick = Math.floor(Date.now() / 250) % (len * 5);
    const mod5 = ((Date.now() / 250) % (len * 5)) % 5;
    const largeTick = Math.floor(tick / 5);
    let v = list[largeTick];

    // Blend with adjacent words, in such a way that mod5 being 0 or 5 corresponds with a 0.5 blend parameter
    if (mod5 < 0.6) {
        v = this.blendWords(list[(largeTick + list.length - 1) % list.length], list[largeTick], (mod5 + 0.6) / 1.2);
    } else if (mod5 > 4.4) {
        v = this.blendWords(list[largeTick], list[(largeTick + 1) % list.length], (mod5 - 4.4) / 1.2);
    }

    v = this.randomCrossWords(v, 0.1 * Math.pow(mod5 - 2.5, 4) - 0.6);
    if (noBuffer) return v;

    const maxWordLen = Math.max(...list.map(x => x.length));
    const bufferSpace = (maxWordLen - v.length) / 2;

    // Buffer the result with ALT+255 on either side to prevent the ui from twitching.
    // Spaces do not work due to being automatically collapsed, and css fixing this causes other issues.
    return " ".repeat(Math.ceil(bufferSpace)) + v + " ".repeat(Math.floor(bufferSpace));
}

function randomCrossWords(str, frac = 0.7) {
    if (frac <= 0) return str;
    const x = str.split("");
    for (let i = 0; i < x.length * frac; i++) {
        const randomIndex = Math.floor(predictableRandom(Math.floor(Date.now() / 500) % 964372 + 1.618 * i) * x.length);
        x[randomIndex] = randomSymbol();
    }
    return x.join("");
}

function blendWords(first, second, param) {
    if (param <= 0) return first;
    if (param >= 1) return second;
    return first.substring(0, first.length * (1 - param)) +
        second.substring(second.length * (1 - param), second.length);
}
function becomeNaNed(){
    gameNaNed = true;
}

function fakeGoInfiniteText(){
    if (player.fakeGoInfinite){
        switch(true){
            case player.fGItime>30:
                return "Never gonna give you up~ Never gonna let you down~ Never gonna aaaaaaaaaaaaaa round and desert you"
            case player.fGItime>20:
                return "But..."
            
            case player.fGItime>15:
                return "It means 10^9007199254740991."
            case player.fGItime>10:
                return "Finally, you beated the game, e9.007e15."
        }
    }
    else return ""
}

function getPageOpacity(){
    if (player.fakeGoInfinite){
        return 1 - Math.min(1, player.fGItime/10)
    }else{
        return 1
    }
}

function overflowText(resourceName,resourceGainName,overflowStart,formatFunction=format,effect,inv=false) {
    let temp1 = E(effect);
    return `Because of ${resourceName} overflow at <b>${formatFunction(overflowStart)}</b>, your ${resourceGainName} is ${inv ? "raised" : "rooted"} by ${format(temp1)}`
    
}// tmp.mm595.mm595Overflow