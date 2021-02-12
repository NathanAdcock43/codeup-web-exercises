// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49

// BREAK AND CONTINUE: Ways to manipulate the behavior of your loop [stop vs skip]



var x = 0;

while (true) { //When is this condition going to change?
    alert("This is the song that never ends. It just goes on and on my friends. " +
        ");
    x++;
    if (x === 5) {
        alert("LambChop, cut it out!!")
        break;
    }
        break;
}

for (var i = 5; i < 100000; i = i + 5){
    console.log(i)
    if (i === 5){

        break;
    }

}

Let's talk about . . . continue :)

for (var i = 0; i < 100; i++){

    if (i % 2 !== 0) {

        continue;
        console.log(i)
    }
    console.log(i);
}
