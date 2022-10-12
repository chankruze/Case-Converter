const counterCH = document.getElementById("ch-counter");
const counterLines = document.getElementById("linesCount");
const counterWD = document.getElementById("wdCounter");
const textarea = document.getElementById("textarea");
const clearBTN = document.getElementById("clear");
const lowerBTN = document.getElementById('LowerBtn');
const upperBTN = document.getElementById('upperBtn');
const sentenseBTN = document.getElementById('sentenceBtn');
const copyBTN = document.getElementById('copyBtn');

textarea.addEventListener("keyup", () => {
    updateCounter();
});

// initially LineCount will be 0 and after any keyup it will change
counterLines.innerText = '0';


function updateCounter() {
    // taking the "valuelength" in the textarea that we entered
    // it will happen at every keypress
    counterCH.innerText = textarea.value.length;

    // counter for words
    var countWD = 0;
    // Split the words on each
    // space character
    var split = textarea.value.split(" ");
    for (var i = 0; i < split.length; i++) {
        if (countWD == 0) {
            counterWD.innerText = "0";
        }
        if (split[i] != "") {
            countWD += 1;
        }
    }
    counterWD.innerText = countWD;


    // line count
    const lines = textarea.value.split('\n');
    counterLines.innerText = lines.length;
}
// ALL BUTTONS

// clearButton
clearBTN.addEventListener("click", () => {
    textarea.value = "";
    counterWD.innerText = "0";
    counterCH.innerText = "0";
});

// LowerCase BTN
lowerBTN.addEventListener('click', () => {
    textarea.value = textarea.value.toLowerCase();
})

// UpperCase BTN
upperBTN.addEventListener('click', () => {
    textarea.value = textarea.value.toUpperCase();
})

//  sectenceCASE
sentenseBTN.addEventListener('click', () => {
    sentenceCASE();
})
function sentenceCASE() {
    console.log(textarea.value.charAt(0))
    var split = textarea.value.toLowerCase().split("");
    // console.log( s;
    for (var i = 0; i < split.length; i++) {
        // textarea.value = split.charAt(0).toUpperCase()+ split;
    }
}

copyBTN.addEventListener('click', () => {
    // Select the text field
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(textarea.value);
})



