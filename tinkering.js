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



*/


