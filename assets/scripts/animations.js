function animationBigCrunch() {
    document.querySelectorAll("body")[0].style.animation = "2s ease 0s 1 normal none running bigcrunch"
    setTimeout(function () {
        document.querySelectorAll("body")[0].style.animation = ""
    }, 2000)
}