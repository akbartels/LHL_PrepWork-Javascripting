
	const makeCase = function(input, caseType) {
		let newString = "";
		
		let cases = {
			camel: function(input){
				for(let i = 0; i < input.length; i++){
					if(i === 0){
						newString += input[i].toLowerCase();
					} else if (input[i-1] === " "){
						newString += input[i].toUpperCase();
					} else if (input[i] !== " "){
						newString += input[i];
					}					
				}
			},		
			pascal: function(input){
				for(let i = 0; i < input.length; i++){
					if(i === 0){
						newString += input[i].toUpperCase();
					} else if (input[i-1] === " "){
						newString += input[i].toUpperCase();
					} else if (input[i] !== " "){
						newString += input[i];
					}					
				}
			},
			snake: function(input){
				for(let i = 0; i < input.length; i++){
					if(input[i] === " "){
						newString += "_"
					} else {
						newString += input[i];
					}					
				}
			},
			kebab: function(input){
				for(let i = 0; i < input.length; i++){
					if(input[i] === " "){
						newString += "-"
					} else {
						newString += input[i];
					}					
				}
			},
			title: function(input){
				for(let i = 0; i < input.length; i++){
					if(i === 0){
						newString += input[i].toUpperCase();
					} else if (input[i-1] === " "){
						newString += input[i].toUpperCase();
					} else {
						newString += input[i];
					}					
				}
			},
			vowel: function(input){
				for(let i = 0; i < input.length; i++){
					if(input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u"){
						newString += input[i].toUpperCase();
					} else {
						newString += input[i];
					}					
				}
			},
			consonant: function(input){
				for(let i = 0; i < input.length; i++){
					if(input[i] !== "a" && input[i] !== "e" && input[i] !== "i" && input[i] !== "o" && input[i] !== "u"){
						newString += input[i].toUpperCase();
					} else {
						newString += input[i];
					}					
				}
			},
			upper: function(input){
				newString = input.toUpperCase();
			},
			lower: function(input){
				newString = input.toLowerCase();
			}
		};
		

		if(typeof caseType === "string"){
			if(caseType === "camel"){
				cases.camel(input);
			} else if(caseType == "pascal"){
				cases.pascal(input);
			} else if(caseType === "snake"){
				cases.snake(input);
			} else if(caseType === "kebab"){
				cases.kebab(input);
			} else if(caseType === "title"){
				cases.title(input);
			} else if(caseType === "vowel"){
				cases.vowel(input);
			} else if(caseType === "consonant"){
				cases.consonant(input);
			} else if(caseType === "upper"){
				cases.upper(input);
			} else if(caseType === "lower"){
				cases.lower(input);
			}
		} else if (Array.isArray(caseType)){
			let keys = Object.keys(cases);
			
			for(let key of keys){
				for(let type of caseType){
					if(key === type){
						return key()
					}
				}
			}
			
			
			
		
		}
		return newString
	}


/* 	console.log(makeCase("this is a string", "camel"));
	console.log(makeCase("this is a string", "pascal"));
	console.log(makeCase("this is a string", "snake"));
	console.log(makeCase("this is a string", "kebab"));
	console.log(makeCase("this is a string", "title"));
	console.log(makeCase("this is a string", "vowel"));
	console.log(makeCase("this is a string", "consonant")); */
  console.log(makeCase("this is a string", ["upper", "snake"]));
  
  //Already spend 2 hours