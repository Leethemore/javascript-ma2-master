//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
var volvo = {
				type: 'car'
			}
			
var v70 = {};

v70 = volvo;
console.log(v70.type)
			

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numbers = [1,2,3,4,5,6,7,8,9,10];
var fifth = numbers.slice(4,5);
console.log(fifth);

//3. Delete the last number in the array that you created above.
var numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.splice(-1,1); 
console.log(numbers);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
//Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.
function ChangeWords(paragraph)
{
	var longpara = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied."


function ChangeWords(paragraph)
{
	paragraph = paragraph.replace('strawberry', 'banana');
	paragraph = paragraph.replace('strawberries', 'bananas');
	paragraph = paragraph.replace('Strawberries', 'Bananas');
	return paragraph;
}
console.log(ChangeWords(longpara));
}

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var fourElementArray = ["Liverpool","Arsenal","Chelsea", "Manchester United"];
console.log(fourElementArray);

function ChangeToCars()
{
	fourElementArray = [];
	console.log(fourElementArray);
	fourElementArray = ["Tesla","Byton","Audi", "Volvo"];
	console.log(fourElementArray);
}

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var people =  [{
    name: "Oliver",
    },
  {
    name: "Leah",
  },
  {
    name: "Ludvik",
  }];

console.log(people.filter(FilterByName))  
  
function FilterByName(person)
{
	return person.name == "Ludvik";
}
  

  
//7. Create a simple function that logs the date.
function CurrentDate()
{
	console.log(new Date());
}
CurrentDate();

