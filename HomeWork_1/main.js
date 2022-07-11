//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    var arrLength = dog_names.length;
    for (let i = 0; i < arrLength; i++){
        if (dog_names = dog_string){
            console.log("Matched dog_name")
        }else {
            console.log("No Matches")
        }
    }
}

console.log(findWords(dog_string, dog_names))


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    removeValFromIndex = [0, 2, 4, 5];    

    for (var i = removeValFromIndex.length -1; i >= 0; i--)
    Given_arr.splice(removeValFromIndex[i],1);
    Given_arr.splice(0, 0, 'even index')
    Given_arr.splice(2, 0, 'even index')
    Given_arr.splice(4, 0, 'even index')
}
console.log(Given_arr)
console.log(replaceEvens())

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","