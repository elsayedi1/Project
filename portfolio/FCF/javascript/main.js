//First class functions act as a primitive data type such as a number

// it can be stored in variable

var num = 5;
var fun = function () {
    return "Hello from variabel";
};

document.getElementById("test1").innerHTML =
    fun();

// it can be store in array


var arr = [4, 7, function () {
    return "Hi from an array";
}];

document.getElementById("test2").innerHTML = arr[2]();

// it can be stored in object
var obj = {
    num1: 20,
    fun1: function () {
        return "Hello from an Object";
    }
};
document.getElementById("test3").innerHTML = obj.fun1();

// it can be initialized and immediatly-invoked (IIFE);
document.getElementById("test4").innerHTML = (function () {
    return 'Hello from "IIFE"';
}())

// it can be passed in function as an argument

var fun2 = function (fn) {
    return fn();
};

document.getElementById("test5").innerHTML = fun2(function () {
    return "Hi from passed argument function"
})

// it can be returned from  function

var returnFun = function () {
    return function () {
        return "Hi from return function";
    }
}
var newFun = returnFun();
document.getElementById("test6").innerHTML = newFun();
