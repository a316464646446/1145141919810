var saves;
var categoriesCount;
var updateDisplayInterval;
var displays;
var savesFetch = fetch("../../json/saveBank/index.json")
    .then(function (response){
        return response.text()
    })
    .then(function (text){
        let temp1 = JSON.parse(text)
        let categories = []
        for (const category in temp1){
            let categoryName = temp1[category].name
            let categoryRawSaves = temp1[category].saves

            let categorySaves = []
            for (const save of categoryRawSaves){
                categorySaves.push(new Save({
                    name: save.name,
                    data: save.data,
                    author: save.author,
                    desc: save.desc,
                    style: temp1[category].saveStyle
                }))
            }
            categories.push(new Category(categoryName, temp1[category].style, categorySaves))
        }
      /*  return categories
    }).then(function (categories) {*/
        categoriesCount = categories.length;
        saves = new CategorySaveGroup(categories)
        saves.applyAllHTML();
        displays = Array(categoriesCount).fill(false);
        updateDisplayInterval = setInterval(function () {
            for (let i = 0;i < categoriesCount;i++) {
                document.getElementById(`category${i}`).style.display = displays[i]? 'block' : 'none'
                document.getElementById(`categoryText${i}`).innerHTML = displays[i]? '▲' : '▼'
            }
        })
        return true;
    })
console.log(saves);