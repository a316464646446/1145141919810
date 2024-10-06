const today = new Date();
hotkeys("*",function (event,handler){
    event.preventDefault();
    /*if (today.getMonth()-1===0){
        console.log("神金")
    }*/
})
hotkeys("m",function (event,handler){
    event.preventDefault();
    buyAll();
})

hotkeys("n",function (event,handler){
    event.preventDefault();
    if (tmp.mm3.resetable){
        doMM3resetManmade();
    }
})
hotkeys("b",function (event,handler){
    event.preventDefault();
    if (tmp.mm5.resetable){
        doMM5resetManmade();
    }
})
hotkeys("1",function(event,handler){event.preventDefault();buydim(1)})
hotkeys("2",function(event,handler){event.preventDefault();buydim(2)})
hotkeys("3",function(event,handler){event.preventDefault();buydim(3)})
hotkeys("4",function(event,handler){event.preventDefault();buydim(4)})
hotkeys("5",function(event,handler){event.preventDefault();buydim(5)})
hotkeys("6",function(event,handler){event.preventDefault();buydim(6)})
hotkeys("7",function(event,handler){event.preventDefault();buydim(7)})
hotkeys("8",function(event,handler){event.preventDefault();buydim(8)})
hotkeys("ctrl+shift+c",function (event,handler){
    event.preventDefault();
    addNotify("No opening console.")
    clearInterval(window.qqq);
    clearInterval(window.www);
})
hotkeys("f12",function (event,handler){
    event.preventDefault();
    addNotify("No opening console.")
    clearInterval(window.qqq);
    clearInterval(window.www);
})