var win = Math.floor(Math.random() * 24)
var lose = Math.floor(Math.random() * 24)

if(win === lose) {
    var win = Math.floor(Math.random() * 24)
    var lose = Math.floor(Math.random() * 24)
}

const treasure = (location) => {
    
    if(win === location){
        document.getElementById(location).innerHTML = "🎊"
        return alert("Win!")
    }else if(lose === location){
        document.getElementById(location).innerHTML = "💥"
        return alert("You lose!!!!")
    }else if(lose === location){
            document.getElementById(location).innerHTML = "💥"
            return alert("You lose!!!!")
    }else {
        document.getElementById(location).innerHTML = "🎄"
        return alert("Try again!")
    }
}