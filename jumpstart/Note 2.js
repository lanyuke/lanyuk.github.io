// Jumpstart JavaScript Notes

// This is a great way to keep working on code

// Data types 
    // Lets our computer know what information we are giving it
    // Numbers, strings, and boolean

    // Numbers
    // work really well with computers
    8
    10.1
    5 + 17
    18 - 7
    9 * 7
    16 / 2

    7 * (6-3) + 1

    // Strings
    // words, sentences, etc
    // collection of characters in single or double quotes
    //Example
    "Hello February Jumpstart, we are all excited to have you here with us!"
    'This works too'

    // Boolean 
    // useful for making decisions
    true
    false

// Variables
    // There are 4 parts to a variable
    // the declaration, var
    // the name, its going to be camelCase 
    // the assignment operator, =
    // the data itself can be any data type

var guineaPigName = "Guizmo"
//call on that variable
guineaPigName
// Output --> "Guizmo"

// change the data in the variable 
guineaPigName = "Hector"

var petAge = 18

var isMean = true

// String Interpolation
    // allows you to inject data into a string
    // use back ticks, ``
    // ${variableName}

// "Have you met Guizmo?"
// "Have you met Hector?"
`Have you met ${guineaPigName}?`
`${guineaPigName} is awesome`

// Built in methods
    // pop up 
    alert("Hey, how's it going?")
    // pop up with an input box
    prompt("How old are you?")

    
    
// Strict Equality Operator
    // strict comparison
    // essentially, it asks are these the same?

    3 === 4
    // Output --> false
    3 === 2+1
    // Output --> true

    //Different data types
    3 === "3"
    // Output --> false

    // different than the assignment operator, just one =

// Relational operators
    // will also give us boolean value
    3 > 4
    65 < 100

// Conditional Statements
    // IF is a keyword in JavaScript, signals the beginning of a conditional statement
    // else if, allows for additional conditions to be checked
    // else , works as a catch all

    // Plain english
    // if(this condition is met){
    //     perform this action
    // } else if(this condition is met){
    //     perform this action
    // } else {
    //     do this thing
    // }

    // 18- we can move out
    // 21- we can drink, and we can also move out

    var yourAge = prompt("How old are you?")

    if(yourAge > 20){
        alert("You can drink and move out!")
    } else if(yourAge > 17){
        alert("You can move out, but no drinking!")
    } else {
        alert(`You are stuck at home with your folks and can't drink! Sucks to be ${yourAge}!`)
    }