//promise
//1 promise are used in asynchronous operation
//2 promise has 3 states
//a  pending    --initial
//b  fulfilled  --success
//c  rejected   --error
//3 promise is a built-in class
//4 promise result can be handled using 3 methods
//a  then()     --success
//b  catch()    --error
//c  finally()  --always execute

//declaring a global variable
let v = true;
// creating a promise
//let promiseobj =new Promise(function(cbfn));
let promiseobj = new Promise(function (resolve, reject) {
    if (v == true) {
        resolve(" the value is true")
    } else {
        reject("the value is false")
    }
});
console.log(promiseobj);

promiseobj.then(function (value) {
    console.log(" the async operation is successful" + value);
}).catch(function (value) {
    console.log(`the async operation is failed due to error ${value}`);
}).finally(function (value) {
    console.log("this block will execute everytime");
})