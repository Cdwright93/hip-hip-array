/* This assignment will give you some practice with creating arrays and using their methods. */


console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
  // Challenge 1 Code
students.forEach(student => console.log(student));


  console.log("\n");
  console.log("Challenge 2");
  // Challenge 2
  // Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
  const grades = [100, 80, 110, 75, 83, 64];
  //Challenge 2 Code
  reverseGrades=grades.reverse()
  reverseGrades.forEach(grade => console.log(grade))
  


  console.log("\n");
  console.log("Challenge 3");
  // Challenge 3
  // Console.log out only the even numbers in the following array.
  const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
  // Challenge 3 Code
  positiveNumbers.forEach(number => {
      if (number % 2 == 0){
          console.log(number)
      }
  });



  console.log("\n");
  console.log("Challenge 4");
  // Challenge 4
  // Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
  const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

  mixedSignNumbers.forEach(number => {
    if (number % 2 == 0){
        console.log(number)
    }
});
  // Challenge 4 Code



  
  console.log("\n");
  console.log("Challenge 5");
  // Challenge 5
  // Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
  const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
  newArr = symmetricalCapitals.slice(0,2).forEach(letter => console.log(letter))
  newArr1 = symmetricalCapitals.pop()
  console.log(newArr1)
  // Challenge 5 Code
    


  console.log("\n");
  console.log("Challenge 6");
  // Challenge 6
  // Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
  const fibonacciNumbers = [3, 1, 1, 2, 3, 5, 8, 13, 10, 11];
  fibonacciNumbers.forEach(number => console.log(number));
  // Challenge 6 Code
  
  


  console.log("\n");
  console.log("Challenge 7");
  // Challenge 7
  // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
  newNumbs = [1,3,4,5,6]
  newNumbs.forEach(number => console.log(number));
  // Challenge 7 Code





  console.log("\n");
  console.log("Challenge 8");
  // Challenge 8
  // Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
  const emptyArray = [];
  let fillerArray = [5,6,7]
  fillerArray.forEach(number => emptyArray.push(number));
  emptyArray.unshift(1,2)
  emptyArray.forEach(number => console.log(number));
  // Challenge 8 Code




  console.log("\n");
  console.log("Challenge 9");
  // Challenge 9
  // Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
  let newStudents = []
  students.slice(3).forEach(student=> {
      newStudents.push(student)
      })
    while(newStudents.length > 8)
    newStudents.pop()
    newStudents.forEach(student => {
        console.log(student)
    });
  // Challenge 9 Code
  
  
  console.log("\n");
  console.log("Challenge 10");
  // Challenge 10
  // Loop through the `students` array from Challenge 1, making a COPY of the array , starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
  // Do NOT use slice, you will be using that for the next challenge!
  
    // I basically did this on the last one.




  console.log("\n");
  console.log("Challenge 11");
  // Challenge 11
  // Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
  students.slice(3).forEach(student => {
    console.log(student)
  })
  console.log("old array----------------")
  students.forEach(student => console.log(student));
  // Challenge 11 Code
  



  console.log("\n");
  console.log("Challenge 12");
  // Challenge 12
  // Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
  const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
  dinosaurs.splice(4,1)
  dinosaurs.splice(6,1)
  dinosaurs.forEach(dino => {
      console.log(dino)
  });
  // Challenge 12 Code

  
  
  
  console.log("\n");
  console.log("Challenge 13");
  // Challenge 13
  // Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
  console.log(dinosaurs.join(' * '))
  // Challenge 13 Code



  
  console.log("\n");

  console.log("Challenge 14");
  console.log(dinosaurs.reverse())
  // Challenge 14
  // Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
  // Challenge 14 Code



  
  console.log("\n");
  console.log("Challenge 15");
  // Challenge 15
  // Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
  array1 = [1,4,5,3,2]
  array2 = [7,8,9,11]
let combinedArr = []
  console.log(combinedArr.concat(array1,array2))
  // Challenge 15 Code


  