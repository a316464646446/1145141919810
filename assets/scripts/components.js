



function loadVue() {
    Vue.component("rainbow", {
        name: "rainbow",
        get template() {
            return `<div :style="{color: getUndulatingColor()}"><slot></slot></div>`
        }
    })
    window.app = new Vue({
        el: "#app",
        data: {
            tabShow: '1',
            hasNewsTickerError: false,
            player: player,
            hasLoaded: hasLoaded,
            developer_mode: !location.hostname.endsWith("github.io"),
            developer_get_mm4: "1e100",
            dimensions: [
                { id: 1, label: '1st Dimension' },
                { id: 2, label: '2nd Dimension' },
                { id: 3, label: '3rd Dimension' },
                { id: 4, label: '4th Dimension' },
                { id: 5, label: '5th Dimension' },
                { id: 6, label: '6th Dimension' },
                { id: 7, label: '7th Dimension' },
                { id: 8, label: '8th Dimension' },
            ],
            save: "",
            mm5_upg: chunkArrayIntoGroupsOfTen(mm5_upgrades),
            mm4_upg: chunkArrayIntoGroupsOfTen(mm4_upgrades),
            mm3_upg: chunkArrayIntoGroupsOfTen(mm3_opt.upgrades),
            mm6_upg: chunkArrayIntoGroupsOfTen(mm6_upgrades),

            mm3_chal: chunkArrayIntoGroupsOfTen(mm3_challenges),
            mm5_chal: chunkArrayIntoGroupsOfTen(mm5_challenges),

            isShowingPopup: false,
            hasError: false,
            errortext: "",
            pianyi0: "aa",
            pianyi1: 0,
            hover_upg: 0,
            parallelUniverseId,
            hover_3upg: 0,
            hover_5upg: 0,
            hover_6upg: 0,
            developer_code: "",
            whistle_unlock: false,
            devNews: window.texts,
            parallelUniverseModal: false,
            input1: "1",
            input2: "1",
            input3: "1",
            changelogs: [
                {
                    version: "v1.2.1", title: "",
                    changes: [
                        "添加了Fractal, Fractal Engine, Fractal Engine MK2, Research, 6DPoint-Allocation",
                        "解禁了部分新闻中的REDACTED"
                    ]
                },
                {
                    version: "v1.2.0", title: "Exponenting Update!",
                    changes: [
                        "添加了mm<sup>6</sup>"
                    ]
                },
                {
                    version: "v1.1.7", title: "",
                    changes: [
                        "添加了Compress"
                    ]
                },
                {
                    version: "v1.1.6", title: "",
                    changes: [
                        "添加了Reactor"
                    ]
                },
                {
                    version: "v1.1.5", title: "",
                    changes: [
                        "修改了升级塔的升级方式",
                        "添加了平行宇宙切换"
                    ]
                },
                {
                    version: "v1.1.4", title: "",
                    changes: [
                        "Just a update, i can't descript it"
                    ]
                },
                {
                    version: "v1.1.3", title: "",
                    changes: [
                        "添加了<del>Time Studies</del><ins>升级塔</ins>",
                        "修复了某些情况下mm<sup>3</sup>升级画面卡的bug"
                    ]
                },
                {
                    version: "v1.1.2", title: "",
                    changes: [
                        "削弱了mm<sup>4</sup>升级1到第一次mm<sup>3</sup>重置所需的时间"
                    ]
                },
                {
                    version: "v1.1.1", title: "",
                    changes: [
                        "Add 5D Dimensions",
                        "Add 5D galaxies",
                        "Add 2 mm<sup>5</sup> Upgrades"
                    ]
                },
                {
                    version: "v1.1", title: "mm<sup>5</sup>",
                    changes: [
                        "修复了拥有10 mm<sup>4</sup>时无法正常购买第一4d维度的bug",
                        "Add secutitation reset",
                        "Add mm<sup>5</sup> volumes",
                        "Add 5D Dimensions(画饼)"
                    ]
                },
                {
                    version: "v1.0.7.1", title: "Project-sort",
                    changes: [
                        "项目文件整理"
                    ]
                },
                {
                    version: "v1.0.7", title: "",
                    changes: [
                        "软上限推迟至1.000e1.000e5",
                        "No 折算",
                        "Add 1 mm<sup>4</sup> Upgrade",
                        "Add 1 mm<sup>3</sup> Upgrade",
                        "Add 1 mm<sup>3</sup> Challenge"
                    ]
                },
                {
                    version: "v1.0.6", title: "",
                    changes: [
                        "Add 1 mm<sup>4</sup> Upgrade",
                        "Add 2 mm<sup>3</sup> Upgrades"
                    ]
                },
                {
                    version: "v1.0.5", title: "",
                    changes: [
                        "Add 5 mm<sup>4</sup> Upgrades",
                        "<del>Add 1 mm<sup>3</sup> Upgrade</del>",
                        "Add 3.5D (Just a 过渡期)",
                        "Add Offlined time",
                        "Add music",
                        "Add more news"
                    ]
                },

                {
                    version: "v1.0.4", title: "mm4升级",
                    changes: [
                        "Add 1 mm<sup>4</sup> Upgrade"
                    ]
                },
                {
                    version: "v1.0.3", title: "...",
                    changes: [
                        "Language -> English",
                        "Change Style"
                    ]
                }
            ],
            mm3: mm3_opt,
        },
        computed: {},
        methods: {
            inTab(a) {
                return (this.tabShow > (a - 1) * 10 && this.tabShow < (a) * 10);

            }
        }
    })
    
}

