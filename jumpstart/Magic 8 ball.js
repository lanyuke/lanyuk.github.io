// Challenge: Magic 8 Ball

//Plan
// Create a function that asks the user a question and returns a random answer.


// Create a prompt where the user can ask a question.


// After the user submits a question, create an alert that gives a random answer from the magic 8 ball.

// const magic = () => {
//     prompt("Ask me any yes or no question")
//     alert("")
// }

// Traditional 8 ball answers include the following but creative liberties are always encouraged:
// Better not tell you now ->0
// It is decidedly so-1
// Don’t count on it-2
// Signs point to yes-3
// Outlook not so good-4

//Math.random()
console.log(Math.random())

//Math.floor()
console.log(Math.floor(0.68998))

console.log(Math.floor(Math.random()))

//To give more options, multiply the random method by the amount of values you need

console.log(Math.floor(Math.random()*100))


const magic8 = () => {
    prompt("Ask me any yes or no question!")
var numberTool = Math.floor(Math.random())
if(numberTool === 0){
    alert("Better not tell you now")
} else if(numberTool === 1) {
    alert("It is decidedly so")
} else if(numberTool === 2) {
    alert("Don’t count on it")
} else if(numberTool === 3) {
    alert("Signs point to yes")
} else if(numberTool === 4) {
    alert("Outlook not so good")
} else {
    alert("Try again")
}
}

magic8()