// FUNCTIONS
    // Functions - little coding machines, reusable blocks of code that perform a particular task
    // variable that stores logic
    // variableName() to perform the logic/ function call

    // Structure
    const ageFunction = () => {
        return("something")
      }
  
      // variable declaration: const
      // name of the function: ageFunction
      // assignment operator: =
      // anonymous function syntax: () => {}
        // pass in data: ()
        // arrow syntax: =>
          // everything to the left of the arrow syntax is the data and variable
          // everything to the right is the logic
      // code block or executable code/logic: {}
  
      // invoke the function/function call/function invocation
      ageFunction()
  
  // Challenge: Magic 8 Ball
  
  // PLAN
  // Create a function that asks the user a question and returns a random answer.
  // Create a prompt where the user can ask a question.
  
  // After the user submits a question, create an alert that gives a random answer from the magic 8 ball.
  // const magic8 = () => {
  //   prompt("Ask me any yes or no question!")
  //   alert("")
  // }
  
  // Traditional 8 ball answers include the following but creative liberties are always encouraged:
  // Better not tell you now --> 0
  // It is decidedly so --> 1
  // Don't count on it  --> 2
  // Signs point to yes  --> 3
  // Outlook not so good  --> 4
  
    // Math.random() - generates a random number < 1
      console.log(Math.random())
      // Output: 0.6899806470955765
  
    // Math.floor() - rounds down to the nearest whole number
      console.log(Math.floor(0.6899806470955765))
      // Output: 0
      console.log(Math.floor(Math.random()))
      // Output will always be 0
  
    // To give more options, multiply the random method by the amount of values you need
      console.log(Math.floor(Math.random() * 5))
      // Output: 4
      
      // function
      const magic8 = () => {
        prompt("Ask me any yes or no question!")
        var numberGenerator = Math.floor(Math.random())
        // alert("")
        if(numberGenerator === 0) {
          alert("Better not tell you now")
        } else if(numberGenerator === 1) {
          alert("It is decidedly so")
        } else if(numberGenerator === 2) {
          alert("Don't count on it")
        } else if(numberGenerator === 3) {
          alert("Signs point to yes")
        } else if(numberGenerator === 4) {
          alert("Outlook not so good")
        } else {
          alert("Try again")
        }
      }
  
      // function call
      magic8()