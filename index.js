document.addEventListener("DOMContentLoaded", function(){
  console.log("The content is loaded");
  // write code here

  var myButton = document.getElementById('myButton');

  //First param - type of action
  //Second param - what will happen (callback)

  // myButton.addEventListener("click", function() {
  //   console.log("Button was clicked");
  // })

  myButton.addEventListener("click", handleClick);

  function handleClick(){
    console.log("Button was clicked via a function");
  }

  var myForm = document.getElementById("myForm");

  myForm.addEventListener("submit", function(event){
    console.log("Form was submitted");
    event.preventDefault();
  });

  var buttons = document.querySelectorAll(".myButtons");
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("click", function(event){
      console.log(this.value + " was clicked.");
    })
  }

  //Bubbling and Catching (use of third param: true)
  var div1 = document.getElementById('div1');
  var div2 = document.getElementById('div2');
  var div3 = document.getElementById('div3');

  div1.addEventListener("click", function(event){
    //stops bubbling
    event.stopPropagation();
    console.log("div1 was clicked");
  });

  div2.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("div2 was clicked");
  });

  div3.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("div3 was clicked");
  });
//reminder end of parameters
})
