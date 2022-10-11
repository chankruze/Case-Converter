const counterCH = document.getElementById("ch-counter");
const counterWD = document.getElementById("wdCounter");
const textarea = document.getElementById("textarea");
const clearBTN = document.getElementById("clear");

textarea.addEventListener("keyup", () => {
    updateCounter();
});

// clearButton
clearBTN.addEventListener("click", () => {
    textarea.value = "";
    counterWD.innerText = "0";
    counterCH.innerText = "0";
});

//    is it called earlier to set the values of  "counter"  and the reaming
// updateCounter();
var countWD = 0;
function updateCounter() {
    // taking the "valuelength" in the textarea that we entered
    // it will happen at every keypress
    counterCH.innerText = textarea.value.length;

    // Split the words on each
    // space character
    var split = textarea.value.split(" ");

    for (var i = 0; i < split.length; i++) {
        if (countWD == 0) {
            counterWD.innerText = "0";
        }
        if (split[i] == "") {
            countWD += 1;
        }
    }
    counterWD.innerText = countWD;
}
