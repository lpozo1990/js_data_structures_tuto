// Stacks

// functions: push , pop, peek, length

var letters = [];
var word = process.argv[2] || "racecar"; // now you can pass a argument via node cmdline to check for palindrome


var rword = "";

// put letters of word into the stack
for (let i = 0; i < word.length; i++) {
        letters.push(word[i])
}
// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if(rword === word){
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindrome.");
}




