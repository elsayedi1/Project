//Create constructor function for Employee objects

////////////////////////////////////////////////Case#1/////////////////////////

function Employee(name) {
    this.name = name;
}
//Create a new emp1 object
var emp1 = new Employee("John");


//Create second constructor function for Manager objects
function Manager(name) {
    this.name = name;
}


//create new mgr1 object
var mgr1 = new Manager("mike");


//Adding one property (dep) on object's prototype to be shared among objects that created from different constructor functions- all emps and mrgs objects have access to "dep" property 

emp1.__proto__.__proto__.dep = "marketing"




// mgr1 has access to "marketing"

document.getElementById("test1").innerHTML = "I'm an Employee1 & My name is  " +
    emp1.name + " working in " + emp1.dep + " Department"

document.getElementById("test2").innerHTML = "I'm a Manager1 & My name is  " +
    mgr1.name + " working in " + mgr1.dep + " Department"

/////////////////////////////////////////////// Case#2////////////////////////////////

// create one property on Employee prototype (getName Method) 

Employee.prototype.getName = function () {
    return this.name;
}

// Modify default behavior of Manager prototype inorder to have acccess to Employee prototype properties & methods

mgr1.__proto__.__proto__ = Employee.prototype;

document.getElementById("test3").innerHTML = "I'm an Employee1 & My name is  " +
    emp1.getName()

document.getElementById("test4").innerHTML = "I'm a Manager1 & My name is  " +
    mgr1.getName()
