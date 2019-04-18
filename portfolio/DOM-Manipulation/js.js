//DOM id manipulation
//Maniuplate header < h1 > by using querySelector target its id (#title)/////
//Changing background color, color, textcontent, padding and center h1 ///////

var headerTitle = document.querySelector("#title");

headerTitle.style.backgroundColor = "#0e7e05";
headerTitle.style.color = "#fff";
headerTitle.textContent = "WELCOME";
headerTitle.style.paddingTop = "15px";
headerTitle.style.textAlign = "center";

//ADD bottom border and background color on header element/////////////////////////

var headerMain = document.querySelector("#main-header");
headerMain.style.borderBottom = "5px solid #6f1515";
headerMain.style.backgroundColor = "#0e7e05";

//change input style/////////////////

var inputs = document.querySelector(".info");
inputs.style.marginLeft = "40px";
inputs.style.marginTop = "25px"


// DOM class manipulation  (ul.order)///////////
var list2 = document.querySelector(".order");
list2.style.paddingBottom = "25px";
list2.style.listStyle = "none"

//////Adding li element number 7
var items = document.querySelector(".lists:last-child");


items.insertAdjacentHTML('afterend', '<li class="lists">Added item8</li>')

////adding li element number 8

var items = document.querySelector(".lists:last-child");

items.insertAdjacentHTML('afterend', '<li class="lists">Added item9</li>')



var listItems = document.querySelectorAll(".lists:nth-child(even)");
for (var i = 0; i < listItems.length; i++) {
    listItems[i].style.backgroundColor = "#eee"
}
