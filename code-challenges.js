// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "LACKADAISICAL"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

const coder = (string) => {
    //splitting the string into an array so you can iterate over the letters
    let arrayOfLetters = string.split("")
    // mapping through each letter of an array to code
    return arrayOfLetters.map(letter => {
        //creating if/else statements for each letter to code
        //the reason why i invoked toLowerCase upon each conditional is because I wanted to do a case check for the argument while still returning the original casing. I wanted to return "L4CK4D41S1C4L" if it was all caps, not "l4ck4d41s1c4l". Although it seems less DRY, I just thought this would be more true to the user experience for what you would expect from a coder. If there is a better way, please let me know haha.
        if (letter.toLowerCase() === "a"){
            return letter = 4
        }
        else if (letter.toLowerCase() === "e"){
            return letter = 3
        }
        else if (letter.toLowerCase() === "i"){
            return letter = 1
        }
        else if (letter.toLowerCase() === "o"){
            return letter = 0
        }
        // if the letter doesnt need to be coded, return the letter back as normal
        else{
            return letter
        }
    //joining the array of letters back into a string
    }).join("")
}

console.log(coder(secretCodeWord1));
console.log(coder(secretCodeWord2));


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

//const containsA = (array) => {
//    //filter through each individual word
//    return array.filter(word =>{
//        //only return words if, when lowercased, include 'a'
//        return word.toLowerCase().includes('a')
//    })
//}

//console.log(containsA(arrayOfWords));

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

const fullHouse = (array) => {
    // create an array to hold unique values
    let uniqueCards = []
    //map through array to find unique ranks of cards
    //i admit that I received help from Brian during our study session haha. but we all took the time to teach each other why this works!
    array.map(value => {
        //push rank of card into uniqueCards if it doesnt already exist in that array
        if (!uniqueCards.includes(value)) {
            uniqueCards.push(value)
        }
    })
    //compare original array to unique cards to see if duplicates
    //if there are more than 2 ranks in hand, not possible to have a full house
    if (uniqueCards.length !== 2) {
        return false
    }
    //we only need index of unique cards
    //for each index of unique cards, compare that unique card to each value of original array to check for pairs
    //if a pair exists, it's ok if the other 3 cards are not a pair bc they are all the same card, thus being a triple
    else if (uniqueCards.map((value, index) => array.filter(value => value === uniqueCards[index]).length === 2).includes(true)) {
        return true
    }
    else {
        return false
    }
}

console.log(fullHouse(hand1));
console.log(fullHouse(hand2));
console.log(fullHouse(hand3));