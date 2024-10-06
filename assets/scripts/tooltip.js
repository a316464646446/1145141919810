Vue.component("tooltip", {
    get template() {
        return '<div class="tooltipBox"><slot></slot><div class="tooltip">{{ tip }}</div></div>'
    },
    props: ["tip"]
})