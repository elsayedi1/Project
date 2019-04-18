var btn = document.querySelector("#btn");
var animalContainer = document.querySelector("#info");

var htmlString = "";
btn.addEventListener('click', function () {
    var myRequest = new XMLHttpRequest();
    myRequest.open('get', 'json.txt');
    myRequest.send();
    myRequest.onload = function () {
        var myData = JSON.parse(myRequest.responseText);

        for (var i = 0; i < myData.length; i++) {



            htmlString = ""
            htmlString += "<p>" + myData[i].name + " " + " is a " + myData[i].species + "</p>";
            animalContainer.insertAdjacentHTML('beforeend', htmlString)

            var odd = document.querySelectorAll('p:nth-child(odd)');
            for (n = 0; n < odd.length; n++) {
                odd[n].style.backgroundColor = "#eee"

            }

        }

    }
});
