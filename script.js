const minVal = document.getElementById("minVal");
const maxVal = document.getElementById("maxVal");
const main = document.getElementById("body");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");

// default
minVal.value = 1;
maxVal.value = 100;

const create = function () {            
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    };

    for (i = minVal.value; i <= maxVal.value; i++) {
        let newDiv = document.createElement("div");
        let newPar = document.createElement("p");

        newDiv.appendChild(newPar);
        main.appendChild(newDiv).setAttribute("id", "div_" + i); 
        
        // adding classes to divs
        

        if (i < minVal.value || i > maxVal.value) {
            newDiv.style = "display: none";
        } else {
            if (i % 3 === 0 && i % 5 === 0) {
                newPar.appendChild(document.createTextNode(i + ' = FIZZ BUZZ'));
                main.appendChild(newDiv).setAttribute("class", "fizzbuzz");  

            } else if (i % 3 === 0) {
                newPar.appendChild(document.createTextNode(i + ' = FIZZ'));
                main.appendChild(newDiv).setAttribute("class", "fizz");

            } else if (i % 5 === 0) {
                newPar.appendChild(document.createTextNode(i + ' = BUZZ'));
                main.appendChild(newDiv).setAttribute("class", "buzz");

            } else {
                newPar.appendChild(document.createTextNode(i));
                main.appendChild(newDiv).setAttribute("class", "num");
            }
        }
    }
};

create();

//setting the value min

minVal.onkeyup = function (e) {
    this.value = minVal.value.replace(/^(0*)/, "");
    if (minVal.value >= 1 && minVal.value <= 100) {
        this.value = minVal.value;
    } else if (minVal.value.length === 0) {
        minVal.value = null;
    } else {
        minVal.value = null;
        alert("you cannot do that!");
    }
    if (!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58)
        || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
    )) {
        return false;
    }
    create();
};

//setting max value

maxVal.onkeyup = function (e) {
    this.value = maxVal.value.replace(/^(0*)/, "");
    if (maxVal.value >= 1 && maxVal.value <= 100) {
        this.value = maxVal.value;
    } else if (maxVal.value.length === 0) {
        maxVal.value = null;

    } else {
        maxVal.value = null;
        alert("Incorrect number!");
    }
    if (!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58)
        || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
    )) {
        return false;
    }
    create();
};

// JQuery scripts 

$(document).ready(function () {
    $("#b3").click(function () {
        $(".num, .buzz, .fizzbuzz").toggle();
    });
});

$(document).ready(function () {
    $("#b4").click(function () {
        $(".num, .fizz, .fizzbuzz").toggle();
    });
});

$(document).ready(function () {
    $("#b5").click(function () {
        $(".num, .buzz, .fizz").toggle();
    });
});

// Clear and Reset functions

b1.onclick = function () {
    minVal.value = "";
    maxVal.value = "";
    create();
};

b2.onclick = function () {
    minVal.value = 1;
    maxVal.value = 100;
    create();
};