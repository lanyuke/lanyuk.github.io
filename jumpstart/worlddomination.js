
var userName = prompt("What is your name?")
var question1 = prompt("Do you know how to code?")

if (question1 === "yes"){
    alert(`You will rule the world, ${userName}`)
} else if (question1 === "no"){
    alert("Well, no luck with that!")
} else{
    alert("Well, you are on you own!")
}