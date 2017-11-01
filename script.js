// //Create new p element

// var newP = document.createElement("p");
// newP.className = "new";
// newP.innerHTML = "this is a new paragraph";


// //create a new h1
// var newH1 = document.createElement("h1");
// newH1.className = "title";
// newH1.innerHTML = "New title, who dis?";

// //insert into DOM using append
// var main = document.getElementById("main");
// main.append(newP);

// //Insert into DOM using insertBefore
// main.insertBefore(newH1, newP);

// //remove p's from DOM
// newH1.className = "hidden-title";
var button = document.getElementById("submit");
  button.addEventListener("click", function() {
  var input = document.getElementById("my-input");
  var newParagraph = document.createElement("p");
  newParagraph.innerHTML = input.value;
  var section = document.getElementById("main");
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete";
  section.append(newParagraph);
  section.append(deleteButton);
})
