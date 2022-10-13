const counterCH = document.getElementById("ch-counter");
const counterLines = document.getElementById("linesCount");
const counterWD = document.getElementById("wdCounter");
const textarea = document.getElementById("textarea");
const clearBTN = document.getElementById("clear");
const lowerBTN = document.getElementById('LowerBtn');
const upperBTN = document.getElementById('upperBtn');
const sentenceBTN = document.getElementById('sentenceBtn');
const titleBTN = document.getElementById('titleBtn');
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

//  TitleCASE
titleBTN.addEventListener('click', () => {
   

    titlecase(textarea.value);



//     var text = textarea.value.toLowerCase().split(" ").map( (elem) => {
//        return elem[0].toUpperCase() + elem.slice(1);
// })
//      var formated =  text.join(" ")
//  console.log(formated)
//  textarea.value = formated;

})

// TODO
function titlecase(textt){
    var text = textt.toLowerCase().split(' ');
//  console.log(textarea.value.split('\n'))

    // console.log(text)
    for(var i=0;i<text.length;i++){
        // text.split('\n')
      text[i]  = text[i][0].toUpperCase() + text[i].slice(1);
    }
    textarea.value = text.join(' ')
}



copyBTN.addEventListener('click', () => {
    // Select the text field
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(textarea.value);
})

// TODO
sentenceBTN.addEventListener('click', ()=>{
    SentenceCASE();
})
// TODO BUG
 function  SentenceCASE(){
     var text = textarea.value;
     console.log(text[16])
    var newSTR ='';
    for(i =0;i<text.length;i++){
        if(i == 0){
            newSTR += text[i].toUpperCase();
        }
        if(text[i] == '.'){
            newSTR +="." + text[i+1].toUpperCase();
        }
        if(text[i] == '.' && text[i+1] ==" "){
            newSTR +=  text[i+2].toUpperCase();
        }
        else newSTR += text[i].toLowerCase();
    }
    textarea.value = newSTR;
 }

 
