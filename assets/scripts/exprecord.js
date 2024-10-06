
var records = [
    {
        name: "#1 Unknown 4D Volumes?",
        id: "1",
        date: "2022/10/24 08:00",
        desc: "我们貌似发现了一种新的体积，在1维（线） 2维（面） 3维（体） 以外的。<br>",
        get unlocked() {
            return true
        }
    },
    {
        name: "#2 1个维度？",
        id: "2",
        date: "2022/10/24 08:03",
        desc: "我们还发现了1个生产4维体积的生产器。也许是Dimensions？",
        get unlocked() {
            return true
        }
    },
    {
        name: "#3 8个维度？",
        id: "3",
        date: "2022/10/24 08:32",
        desc: "我们发现了8个生产器，似乎有规律，我们将其按照生产顺序组成了8个生产器。第8个生产器生产第7个生产器，第7个生产器生产第6个生产器，以此类推。",
        get unlocked() {
            return player.dimensions[DIMENSIONS_POINTS][7].gte(1);
        }
    },
    {
        name: "#4 新的加成？",
        id: "4",
        date: "2022/10/25 03:42",
        desc: "我们似乎发现了一个加成器，但需要消耗4维体积。",
        get unlocked() {
            return player.volumes.gte("1e75")
        }
    },
    {
        name: "#5 3.5维",
        id: "5",
        date: "2022/10/25 15:42",
        desc: "我们发现了一个奇怪的维度体积，他在自我增长。",
        get unlocked() {
            return player.mm35_volumes.unl
        }
    },
    {
        name: "#6 坍缩",
        id: "6",
        date: "2022/10/25 20:19",
        desc: "4维体积在坍缩，不知后面发生什么。",
        get unlocked() {
            return player.mm35_volumes.points.gte('1e100')
        }
    },
    {
        name: "#7 3维体积",
        id: "7",
        date: "2022/10/25 20:53",
        desc: "4维体积坍缩成为了3维体积。但是我们不能直接使用这些3维体积...",
        get unlocked() {
            return player.mm3_volumes.unl
        }
    },
    {
        name: "#8 坍缩失败",
        id: "8",
        date: "2022/10/26 07:39",
        desc: "4维体积并不像之前一样坍缩...",
        get unlocked() {
            return player.mm3_volumes.unl && player.mm35_volumes.points.gte('1e100')
        }
    },
    {
        name: "#9 过多的体积",
        id: "9",
        date: "2022/10/26 18:43",
        desc: "4维体积过多了，我们可以再次重置。",
        get unlocked() {
            return player.volumes.gte("1.797e308")
        }
    },
    {
        name: "#10 挑战？",
        id: "10",
        date: "2022/10/27 18:43",
        desc: "3维体积的挑战？",
        get unlocked() {
            return hasMM4Upg(8)
        }
    },
    {
        name: "#11 mm<sup>4.5</sup>？",
        id: "11",
        date: "2022/11/03 15:29",
        desc: "解锁了一个，4.5维体积？？？",
        get unlocked() {
            return hasMM4Upg(17)
        }
    },
    
    /*,
    {
        name: "The destruction",
        id: "666",
        date: "2024/3/27 21:30",
        desc: "意外还是发生了。4维体积过多导致了一场大爆炸点為炻炼炽锟斤拷锟斤拷烫烫烫烫烫烫",
        get unlocked() {
            return false
        }
    }*/
]
var pageIndex = 0
var pageTotal = Math.ceil(records.length/10)
function getRecordUnlocked(id) {
    if (player.recordUnlocked.includes(id)){
        return true;
    }else{
        for (const key in records){
            if (records[key].unlocked){
                player.recordUnlocked.push(id)
                return true;
            }else{
                return false;
            }
        }
    }
}
function previous() {
    if (pageIndex<=0){
        pageIndex = 1
    }
    pageIndex = pageIndex-1
}
function next() {
    if (pageIndex>=(pageTotal-1)){

    }else{
        pageIndex = pageIndex+1
    }
}
window["Vue"].component("exprecord", {
    name: "exprecord",
    data () {
        return {
            records,
            pageIndex,
            player
        }
    },
    template: `
    <div>
        <h1>Experimental records</h1>
        <p>下列是一系列实验记录，从2022/8/24开始到<span class="corrupted">锟斤拷烫烫ElV  In   a ֱ        ߈烫烫结束{{wordCycle(["无论如何","请你记住","不要超过"])}}<span v-html="display_volumes(E.E_MAX_SAFE_INTEGER)"></span>...</span></p>
        <p>Page {{pageIndex+1}}/{{pageTotal}} <a @click="previous()" href="javascript:void(0)">Previous</a>|<a @click="next()" href="javascript:void(0)">Next</a></p>
        <div v-for="record in records" :key="record.id" v-if="getRecordUnlocked(record.id) && pageIndex*10<record.id && record.id <= (pageIndex+1)*10">
            
            <h3 v-html="record.name"></h3>
            <p v-html="record.date"></p>
            <div v-html="record.desc"></div>
        </div>
        <p style="color: #020202">Don't make your <span v-html="display_volumes(player.volumes)"></span> volumes reach K2.327e15...</p>
    </div>
    `
})