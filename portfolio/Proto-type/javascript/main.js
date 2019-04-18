//prototype
function Employee(name, age) {
    this.name = name;
    this.age = age;
}

//Setup prototype for sharing among objects created from Employee function
Employee.prototype.getName = function () {
    return this.name;

};

//Create new emp1 from Employee constructor function
var emp1 = new Employee("John", 22);

//Create new emp2 from Employee constructor function
var emp2 = new Employee("Mike", 44);

// emp1 using prototype to have access to (getName method)

document.getElementById("test1").innerHTML = "I'm Employee1 & My name is : " +
    emp1.getName()

// emp2 using prototype to have access to (getName method)

document.getElementById("test2").innerHTML = "I'm Employee2 & My name is : " +
    emp2.getName()
