//  Add javascript to your project

// PLAN
// create a js file

// create an alert message to test if the files have connected
alert("Click on the table to find a pie emoji 🥧")

// connect html file to the javascript file
  // add the following code to the html file before the closing body tag
  // <script src="pie.js"></script>

// create a function that takes in data to return an emoji
  // html content --> emoji --> id
  // Granny Smith --> 🍏 --> granny
  // Honey Crisp --> 🍯 --> honey
  // Golden Delicious --> 🍎 --> gold
  // Pie Crust --> 🥧 --> pie

// assign id attribute to the open html tags that surround the html content
  // <td id="granny">Granny Smith</td>

// document.getElementById("granny").innerHTML
  // the screen that the user sees: document
  // searches the web browser for the id assigned "granny": .getElementById("granny")
  // stating what part of the html element to modify: .innerHTML
  
// document.getElementById("granny").innerHTML = "🍏"
// switch Granny Smith to 🍏

// function
  // create a function named pie 
  // that takes in data named id
  // use conditional statements to return an emoji

const pieFinder = (id) => {
  if(id === "granny") {
    document.getElementById("granny").innerHTML = "🍏"
  } else if(id === "honey") {
    document.getElementById("honey").innerHTML = "🍯"
  } else if(id === "gold") {
    document.getElementById("gold").innerHTML = "🍎"
  } else if(id === "pie") {
    document.getElementById("pie").innerHTML = "🥧"
  }
}

// function will need a value now because it was told to expect data
// pieFinder("pie")
// this function call will be automatically triggered by placing it on the js file

// instead of doing a function call on the js file as above, we will allow an onclick attribute to trigger the function
// this will allow the user to click a space to trigger the function call
// this onclick attribute will be placed on the opening tag with the id attribute in the html file
  // onclick="pieFinder('pie')"