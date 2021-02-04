//function someFunctionNoParameter(){
    //inside of here -we tell our function to do something
   // return alert("Hello, How are you?");
//}

//someFunctionNoParameter()

// function someFunctionWithParameter(name){
//     //indside of here - we tell our function to do something
//     return alert("Hello there " + name);
// }
// someFunctionWithParameter(Nathan);
//
//
// //A function that returns a value >> assign that value to a variable
//
// function increment (num){
//     return num + 1;
// }
//console.log(increment(num: 1));

//var result = increment (num: 1);
//console.log(result);

//var four = increment(num: 3)
//var five = increment(increment(num:3));
//var six = increment(increment(increment(num:3)))

//console.log(four)
//console.log(five)
//console.log(six)

// function numberExperiment (num){
//     return num
// }
// console.log(numberExperiment(1, 2));
//
//
//**********setting a default parameter
// function sayhello(name = "Marco"){
//     return alert("hello there, " + name)
// }
//
// console.log(sayhello("Nathan"))

//******scope lesson






//**********IIFE: The first way to put your code behind a gate

(function(){
    // where our JS code exists - use local scope to deny accessibility
    "use strict"
    function someFunctionNoParameters(){
        // where our JS code exists - use local scope to deny accessibility
        return alert("Hello there , Marco")
}
    var iffeVar = "I'm behind the IFFE- everything is okay";
    console.log(iffeVar);
})();