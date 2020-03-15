/* const pizza = {
  toppings: ["cheese", "sauce", "pepperoni"],
  crust: "deep dish",
  serves: 2
}

console.log(pizza); */


var umbrella = { 
  color: "pink",
  isOpen: false,
  open: function() { 
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   },
  close: function(){
    if (umbrella.isOpen === true){
      umbrella.isOpen === false;
      return "Julia closed the umbrella";
    } else {
      return "The umbrella is already closed"
    }
  }
};

var sister = {
  name: "Sarah", 
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true
};

console.log("Sisters name is " + sister.name + " and she is " + sister.age + "years old.")