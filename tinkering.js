/* 
 * Programming Quiz: Inline Functions (5-6)


// don't change this code
function emotions(myString, myFunc) {
	console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression

emotions("happy", function laugh(num){
	let ha = "";
	for(let i = 1; i <= num; i++){
		ha += "ha";
	}
	return ha + "!"
});

const sayHello = function(){
	alert("Hello");
}
setTimeout(sayHello,3000);



 let sumLargestNumbers = function(array){
	let largestNum = 0;
	let secondLargestNum = 0;
	for(let i = 0; i < array.length; i++){
		if (array[i] > largestNum){
			largestNum = array[i];
		}
	}
	for(let j = 0; j < array.length; j++){
		if (array[j] > secondLargestNum && array[j] < largestNum)
			secondLargestNum = array[j];
	}
	return largestNum + secondLargestNum;
}


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


const conditionalSum = function(values, condition){
	let even = 0;
	let odd = 0;
	if(condition === "even"){
		for(let i = 0; i < values.length; i++){
			if(values[i] % 2 === 0){
				even += values[i];
			}
		} return even;
	} else if(condition === "odd"){
			for (i = 0; i < values.length; i++)
				if(values[i] % 2 !== 0){
				odd += values[i];
		} return odd;
	} else {
		return 0;
	}
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

let numberOfVowels = function(data){
	let array = data.split("");
	let vowels = 0;
	array.forEach(function(element){
		if(element === "a" || element === "e" || element === "i" || element === "o" || element === "u"){
			vowels += 1;
		}
	});	
	return vowels;		
}

let numberOfVowels = function(data){
	let vowels = 0;
	for (let letters of data){
			if(letters === "a" || letters === "e" || letters === "i" || letters === "o" || letters === "u"){
					vowels += 1;
			}
	}
	return vowels;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

const chooseStations = function(stations){
	let options = [];
	for (let station of stations){
		if (station[1] >= 20 && (station[2] === "school" || station[2] === "community centre")){
			options.push(station[0]);
		}
	} return options;
}

const chooseStations = function(stations){
	let options = [];
	for(let station of stations){
		if(station[1] >= 20 && (station[2] === "school" || stations[2] === "community centre")){
			options.push(station[0]);
		}
	} return options;
}
		

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);




 const finalPosition = function(moves){
	 let final = [];
	 let x = 0;
	 let y = 0;
	 for(let move of moves){
		if (move === "north"){
			y += 1;
		} else if (move === "south"){
			y -= 1;
		} else if (move === "east"){
			x += 1;
		} else if (move === "west"){
			x -= 1;
		}
	 } final.push(x,y);
	 return final;
 }

 const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);

const smartGarbage = function(trash, bins){
	const binTypes = Object.keys(bins);
	for (let binType of binTypes){
		if(binType === trash){
			bins[binType] += 1;
		}
	} return(bins)
}


smartGarbage("waste", {waste: 4, recycling: 2, compost: 5});



 const carPassing = function(cars,speed){
	let newCar = {};
	newCar.time = Date.now();
	newCar.speed = speed;
	cars.push(newCar);
	return cars;
 }

 const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

carPassing(cars,speed);



const judgeVegetable = function(vegetables, metric){
	let rednessWin = 0;
	let plumpnessWin = 0;
	let winner = "";
	if(metric === "redness"){
		for (let veggie of vegetables){
			if(veggie.redness > rednessWin){
				rednessWin += veggie.redness;
				winner = veggie.submitter
			}
		}
	} else if (metric === "plumpness"){
		for (let veggie of vegetables){
			if(veggie.plumpness > plumpnessWin){
				plumpnessWin += veggie.plumpness;
				winner = veggie.submitter;
			}
		}
	}
	return winner;
} 

// KATA 4
const instructorWithLongestName = function(instructors){
	let letters = 0;
	let longestName = {};
	for (let instructor of instructors){
		if(instructor.name.length > letters){
			letters = instructor.name.length;
			longestName = instructor;
		}
	}return longestName;
}


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
 
// KATA 5

const urlEncode = function(string){
	let newURL = "";
	for(let i = 0; i < string.length; i++){
		if ((i === 0 && string[i] !== " ") || ((i === string.length - 1) && string[i] !== " ")){
			newURL += string[i];
		} else if (i > 0 && i < (string.length - 1) && string[i] !== " "){
			newURL += string[i];
		} else if (i > 0 && i < (string.length - 1) && string[i] === " "){
			newURL += "%20";
		}
	} return newURL;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure "));


 //KATA 6
 const whereCanIPark = function (spots, vehicle){
	for (let rows = 0; rows < spots.length; rows++){
		for (let cols = 0; cols < spots[rows].length; cols ++){
			const spot = spots[rows][cols];
			if (vehicle === "regular"){
				if (spot === "R"){
					return [rows, cols];
				} 
			} else if (vehicle === "small"){
				if (spot === "S" || spot === "R"){
					return [rows, cols];
				} 
			} else if (vehicle === "motorcycle"){
				if (spot === "M" || spot === "S" || spot === "R"){
					return [rows, cols];
				} 
			}	
		}
	} return false;
}


console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))


// KATA 7

const checkAir = function(samples, threshold){
	let dirtySamples = 0;
	for (let i = 0; i < samples.length; i++){
		if (samples[i] === "dirty"){
			dirtySamples += 1;
		}
	}
	if (dirtySamples / samples.length >= threshold){
		return "Pulluted"
	} else {
		return "Clean";
	}
}

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))



*/



//---------------------------------------------------
//challenge not completed

/* const smartGarbage = function(trash, bins){
	const binTypes = Object.keys(bins);
	for (let binType of binTypes){
		if(binType === trash){
			bins[binType] += 1;
		}
	} return(bins)
} 

smartGarbage("waste", {waste: 4, recycling: 2, compost: 5});

const judgeVegetable = function(vegetables, metric){
	let highestScore = 0
	let winner = "";
	for(let index = 0; index < vegetables.length; index++){
	let score = vegetables[index][metric];
	if(score > highestScore){
		highestScore = score
		winner = vegetables[index].submitter;
	}
	}
	console.log(winner);
}




// loop through each object
// find matching metric
// track metric score to find highest ranking


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3

]

const metric = 'redness'

judgeVegetable(vegetables, metric);
ls
ls

// 1. determine the multiples
// 2. determine the range
// 3. replace the words

const loopyLighthouse = function(range, multiples, words){
  for(i = range[0]; i <= range[1]; i++){
	  if(i % multiples[0] === 0 && i % multiples[1] === 0){
			console.log(words[0]+words[1]);
		} else if (i % multiples[0] === 0){
      console.log(words[0]);
		} else if (i % multiples[1] === 0){
			console.log(words[1]);
		} else {
			console.log(i);
		}
	}	
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);



const merge = function(array1, array2){
let newArray = [];
for (let i = 0; i < array1.length; i++){
	newArray.push(array1[i]);
}
for (let j = 0; j < array2.length; j++){
	newArray.push(array2[j])
}
console.log(newArray.sort());
}




console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
let repeatNumbers = function(data){
	let newString = "";
	if (data.length === 1){
		for (let i = 0; i < data.length; i++ ){
			for (let j = 0; j < data[i][1]; j++){
				newString += data[i][0];
			}
		}
	} else {
		for (let i = 0; i < data.length; i++ ){
			for (let j = 0; j < data[i][1]; j++){
				newString += data[i][0];	
			}
			if (i !== data.length -1){
				newString += ", "
			}
		}
	}
	return newString;
}


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

const camelCase = function(input){
	newString = "";
	for (let i = 0; i < input.length; i++){
		if(input[i] !== " "){
			if(input[i-1] === " "){
				newString += input[i].toUpperCase()
			} else {
				newString += input[i];
			}
		}
	}
	return newString;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

const multiplicationTable = function(maxValue){
	let newString = "";
	for(let rows = 1; rows <= maxValue; rows++){
		for(let cols = 1; cols <= maxValue; cols++){
			if(rows <= maxValue){
				newString += (rows * cols) + " ";
			} 
		}
		newString += "\n" 

		if(rows !== maxValue){
			newString += "\n"
			} 
		}
		return newString;
	}
	
	console.log(multiplicationTable(1));
	console.log(multiplicationTable(5));
	console.log(multiplicationTable(10));
	
const PI = 3.14159 ;

	const sphereVolume = function (radius) {
		return ((4/3) * Math.pow(radius, 3)) * 3.14159;
		
	}
	
	console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);


//********************************************************
	
	const coneVolume = function (radius, height) {
		return (((1/3) * Math.pow(radius, 2)) * height) * 3.14159
	}
	
	console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

	//********************************************************
	
	const prismVolume = function (height, width, depth) {
		return (width * depth) * height;
	}
	
	console.log(prismVolume(3, 4, 5) === 60);
	
//********************************************************

	const totalVolume = function (solids) {
		let total = 0;
		for(let solid of solids){
			if(solid.type === "sphere"){
				total += sphereVolume(solid.radius);
			} else if (solid.type === "cone"){
				total += coneVolume(solid.radius, solid.height);
			} else if (solid.type === "prism"){
				total += prismVolume(solid.height, solid.width, solid.depth);
			}
		}
		return total;
	}

	
	const largeSphere = {
		type: 'sphere',
		radius: 40
	}
	
	const smallSphere = {
		type: 'sphere',
		radius: 10
	}
	
	const cone = {
		type: 'cone',
		radius: 3,
		height: 5
	}
	
	const duck = [
		largeSphere,
		smallSphere,
		cone
	]
	
	console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

	//	KATA 10 TALKING CALENDAR
	let talkingCalendar = function(date) {
		let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Ocotber", "November", "December"];
		let newDate = new Date(date);
		let year = newDate.getFullYear(date);
		let month = months[newDate.getMonth(date)];
		let day = newDate.getDate(date);
		if(day === 1 || day === 21 || day === 31){
			return month + " " + day + "st, " + year;
		} else if (day === 2 || day === 22){
			return month + " " + day + "nd, " + year;
		} else if(day === 3 || day === 23){
			return month + " " + day + "rd, " + year;
		} else {
			return month + " " + day + "th, " + year;
		}
	};
	
	console.log(talkingCalendar("2017/12/02"));
	console.log(talkingCalendar("2007/11/11"));
	console.log(talkingCalendar("1987/08/24"));

let calculateChange = function(total, cash) {
		let change = cash - total;
		let result = {};
		if(Math.floor(change/2000) > 0){
			result.twentyDollar = Math.floor(change/2000);
			change = change - (2000 * (Math.floor(change/2000)));
		}
		if (Math.floor(change/1000) > 0){
			result.tenDollar = Math.floor(change/1000);
			change = change - (1000 * (Math.floor(change/1000)));
		}
		if (Math.floor(change/500) > 0){
			result.fiveDollar = Math.floor(change/500);
			change = change - (500 * (Math.floor(change/500)));
		}
		if (Math.floor(change/200) > 0){
			result.twoDollar = Math.floor(change/200);
			change = change - (200 * (Math.floor(change/200)));
		}
		if(Math.floor(change/100) > 0){
			result.oneDollar = Math.floor(change/100);
			change = change - (100 * (Math.floor(change/100)));
		}
		if (Math.floor(change/25) > 0){
			result.quarter = Math.floor(change/25);
			change = change - (25 * (Math.floor(change/25)))
		}
		if(Math.floor(change/10) > 0){
			result.dime = Math.floor(change/10);
			change = change - (10 * (Math.floor(change/10)));
		}
		if(Math.floor(change/5) > 0){
			result.nickel = Math.floor(change/5);
			change = change - (5 * (Math.floor(change/5)));
		}
		if(Math.floor(change/1) > 0){
			result.penny = Math.floor(change/1);
			change = change - (1 * (Math.floor(change/1)));
		}
		return result;
	};
	
	console.log(calculateChange(1787, 2000));
	console.log(calculateChange(2623, 4000));
	console.log(calculateChange(501, 1000));

	const organizeInstructors = function(instructors) {
		let courseInstructors = {};
		for(let i = 0; i < instructors.length; i++){
			if(instructors[i].course in courseInstructors){
				courseInstructors[instructors[i].course].push(instructors[i].name)
			} else {
				courseInstructors[instructors[i].course] = [instructors[i].name]
			}
		}
		return courseInstructors
	}
	
	console.log(organizeInstructors([
		{name: "Samuel", course: "iOS"},
		{name: "Victoria", course: "Web"},
		{name: "Karim", course: "Web"},
		{name: "Donald", course: "Web"}
	]));
	console.log(organizeInstructors([
		{name: "Brendan", course: "Blockchain"},
		{name: "David", course: "Web"},
		{name: "Martha", course: "iOS"},
		{name: "Carlos", course: "Web"}
	]));

		let string = "test"
		newObject[string] = "amy"
		return newObject

		RETURNED { TEST: "AMY"}

//KATA 14 - 
	const urlDecode = function(text) {
		let newObject = {};
		let arrayOne = text.split("&");
		let arrayTwo = [];
		let property = "";
		let propValue = "";
		let index;
		for(let array1 of arrayOne){
			arrayTwo.push(array1.split(""));
		}
		for(let x of arrayTwo){
			for(let y = 0; y < x.length; y++){
				if(x[y] === "="){
					index = y;
				}	
			}	
			for (let i = 0; i < x.length; i++){
				if(i < index){
					property += x[i];
				} else if (i > index){
					propValue += x[i];
				}
			}
			newObject[property] = propValue.replace(/%20/g," ");
			property = "";
			propValue = "";	
		}	
		return newObject;
	};
	
	
	console.log(urlDecode("duck=rubber"));
	console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
	console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
	console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

	const squareCode = function(message) {
		let newMessage = message.replace(/ /g, "")
		let totalChars = newMessage.length;
		let lineLength = Math.ceil(Math.sqrt(totalChars));
		let square = "";
		let code = [];
		let output = "";
		
		for(let x = 0; x < totalChars; x++){
			if((x+1) % lineLength === 0 || (x+1) === totalChars){
				square += newMessage[x];
				code.push(square);
				square = "";
			} else {
				 square += newMessage[x];
			}
		}

		for(let i = 0; i <= code.length; i++){
			for(let index of code){
				if(index[i] !== undefined){
					output += index[i];
				} else {
					output += "";
				}
			}
			output += " ";
		}
		return output;
		
	};
	
	console.log(squareCode("chill out"));
	console.log(squareCode("feed the dog"));
	console.log(squareCode("have a nice day"));
	console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

	*/
	
