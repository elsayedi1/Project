//////////////////////////////Scope/////////////////

var a = 10;

function outer() {
    var b = a;

    var inner = function () {
        var b = 20;
        var c = 30;
        return ["value of a :" + a + "<br>" +
                "value of b :" + b + "<br>" +
                "value of c :" + c + "<br>"]
    }
    return inner;
}


var y = outer();

function myFun() {
    document.getElementById("test1").innerHTML = y();
}

///////////////////////////Closure/////////////////////

var a = 100;

function outer1() {
    var b = 200;
    inner1 = function () {
        var c = 300
        return ["value of a :" + a + "<br>" +
                "value of b :" + b + "<br>" +
                "value of c :" + c + "<br>"]
    }
    return inner1;
}
x = outer1();

function myFun1() {
    document.getElementById("test2").innerHTML = x()
}


///////////////////////////////////
//
//
var add = (function () {
    counter = 0;
    var plus = function () {
        return counter += 1;
    }
    return plus;

})()




function myFun2() {
    document.getElementById("test3").innerHTML = add();
}
