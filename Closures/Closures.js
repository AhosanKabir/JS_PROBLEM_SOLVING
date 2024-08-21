// basic practice without arguments------------->>
function closuresDemoWithoutArguments(){
    let x = 10;
    return function(){
        let y = 20;
        console.log(`Sum: ${x + y}`);
    }
}
closuresDemoWithoutArguments()();

// basic practice with arguments --------------->>
function closuresDemoWithArguments(x){
    return function(y){
        console.log(`Sum: ${x + y}`);
    }
}
closuresDemoWithArguments(10)(30);

// basic practice with Loops --------------->>
for(let i = 0; i < 5; i++){
    (function(val) {
        setTimeout(()=>{
            console.log(`values----- ${val}`);
        }, 1000);
    }(i));
}



// Problem 1 ----------------->>
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

let createHelloWorld = () => {
    return function(){
        return console.log("Hello World");
    }
}
createHelloWorld()();