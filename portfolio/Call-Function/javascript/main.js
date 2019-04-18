//Create Bicycle constructor function

function Bicycle(color, speed, tirePressure) {
    this.color = color;
    this.speed = speed;
    this.tirePressure = tirePressure;
    this.inflateTire = function () {
        return this.tirePressure += 5;
    }
}

//Create new object bicycle1

var bicycle1 = new Bicycle("red", 5, 10);

//bicycle1 using inflatetire method to increase tirepressur buy rate of 5

document.getElementById("test1").innerHTML = "Bicycle1 will increase its own tirepressure to " + bicycle1.inflateTire();

//Create new object bicycle2

var bicycle2 = new Bicycle("green", 2, 100);

//bicycle2 using inflatetire method to increase tirepressur buy rate of 5

document.getElementById("test2").innerHTML = "Bicycle2 will increase its own tirepressure to " + bicycle2.inflateTire();

///////////////////create Mechanic constructor function ////////

function Mechanic(name) {
    this.name = name;
}

///////////// create instance Mike from Mechanic//////////

var mike = new Mechanic("Mike")
mike.inflateTire = bicycle1.inflateTire;

///////////////using call() to bind ( this keyword) to reference bicycle1 object


document.getElementById("test3").innerHTML = "Mike will increase the Bicycle1's tirepressure to " + mike.inflateTire.call(bicycle1);

///////////////using call() to bind ( this keyword) to reference bicycle1 object


document.getElementById("test4").innerHTML = "Mike will increase  the Bicycle2's tirepressure to " + mike.inflateTire.call(bicycle2);
