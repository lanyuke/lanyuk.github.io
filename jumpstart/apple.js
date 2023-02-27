const pieFinder = (id) => {
if (id === "granny"){
document.getElementById("granny").
innerHTML = "🍏"
} else if (id === "honey"){
    document.getElementById("honey").
    innerHTML = "🍯"
} else if (id === "gold"){
    document.getElementById("gold").
    innerHTML = "💡"
} else if (id === "pie"){
    document.getElementById("pie").
    innerHTML = "🥮"
}
}

onclick="pieFinder('pie')"