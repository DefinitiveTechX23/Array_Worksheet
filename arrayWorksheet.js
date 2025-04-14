


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


