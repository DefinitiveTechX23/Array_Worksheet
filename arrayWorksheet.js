


//PART 1 

let fruits = ["apple", "banana", "cherry"];

console.log(fruits[1]); //Value of array at index 1

console.log(fruits.length); /// length of the array 

//PART 2

fruits.push("orange"); /// adds "orange to array"

console.log(fruits); 

fruits.pop(); // removes last element from array

console.log(fruits);

//CHALLENGE

fruits.push("avocado"); // adds "avocado"

fruits.push ("coconut"); // adds "coconut"

console.log(fruits);

fruits.pop();

console.log(fruits);

console.log(fruits.length);

//Part 3 

for (let i = 0; i < fruits.length ; i++ ){



console.log(fruits[i]);
 


}

//UPPERCASE VERSION

for (let i = 0; i < fruits.length ; i++ ){

    

     console.log(fruits[i].toUpperCase()); 

}

//COUNTING SPECIFIC ITEMS

let Counter = 0; 

let LookFor = "apple";

let appleFound = 0; 

for (Counter = 0; Counter<fruits.length; Counter++) {


    if(fruits[Counter] == LookFor){
        appleFound++

        console.log(appleFound);
    }



}

//PART 4

let cart = [];

cart.push("bacon");
cart.push("eggs");
cart.push("steak");

console.log(cart);

cart.pop();

console.log(cart);
console.log(cart.length);

//REVERSE ORDER

let numbers = [1, 2, 3, 4, 5];

for( let x = numbers.length - 1 ; x >= 0 ; x--){


console.log(numbers[x]);

}

//PART 5

let array1 = ["a", "b", "c", "d"];

let array2= ["red", "green", "blue"];

if(array1.length > array2.length){

    console.log("array1 has a greater length than array 2"); }

    else if (array2.length > array1.length) {

        console.log("array2 has a greater length than array 1");

    
}

//PART 6

