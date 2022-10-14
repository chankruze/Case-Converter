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
const inverseBTN = document.getElementById('inverseBtn');
const alternateBTN  = document.getElementById('alternateBtn');
const downloadBTN = document.getElementById('downloadBtn')

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


    // LINE COUNT
    const lines = textarea.value.split('\n');
    counterLines.innerText = lines.length;
}
// ALL BUTTONS

// CLEAR BTN
clearBTN.addEventListener("click", () => {
    textarea.value = "";
    counterWD.innerText = "0";
    counterCH.innerText = "0";
});

// LOWERCASE BTN
lowerBTN.addEventListener('click', () => {
    textarea.value = textarea.value.toLowerCase();
})

// UPPERCASE BTN
upperBTN.addEventListener('click', () => {
    textarea.value = textarea.value.toUpperCase();
})
const Newsplit = 0;


// COPY BTN
copyBTN.addEventListener('click', () => {
    // Select the text field
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(textarea.value);
})

// INVERSE BTN
 inverseBTN.addEventListener('click', () =>{
    str =  textarea.value;
    str2 = "";
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === str.charAt(i).toLowerCase()) {
            str2 += str.charAt(i).toUpperCase();
        } else if (str.charAt(i) === str.charAt(i).toUpperCase()) {
            str2 += str.charAt(i).toLowerCase();
        } else {
            str2 += str.charAt(i);
        }
    }
    textarea.value = str2;
 })


//  ALTERNATE BTN
 alternateBTN.addEventListener('click', ()=>{
   str = textarea.value;
   str2 = '';
   for(var i=0;i<str.length;i++){
    if(i % 2 == 0){
       if(str.charAt(i) === str.charAt(i).toLowerCase()){
        str2 += str.charAt(i).toUpperCase();
       }
       else if(str.charAt(i) === str.charAt(i).toUpperCase()){
        str2 += str.charAt(i).toLowerCase();
       }
    } else {
        str2 += str.charAt(i);
      }
   }
   textarea.value =str2;
 })
 
//  DOWNLOAD BTN
 // Start file download.
downloadBTN.addEventListener("click", function() {
     // Generate download of hello.txt 
     // file with some content
     var text = textarea.value;
     var filename = "CaseConverter.txt";
   
     download(filename, text);
 }, false);

 function download(file, text) {
              
    //creating an invisible element
    var element = document.createElement('a');
    element.setAttribute('href', 
    'data:text/plain;charset=utf-8, '
    + encodeURIComponent(text));
    element.setAttribute('download', file);
  
    // Above code is equivalent to
    // <a href="path of file" download="file name">
  
    document.body.appendChild(element);
  
    //onClick property
    element.click();
  
    document.body.removeChild(element);
}



                    //    TODO

// SENTENCECASE BTN
 sentenceBTN.addEventListener('click', ()=>{
    SentenceCASE();
})
 function  SentenceCASE(){
     var text = textarea.value.toLowerCase();
    //  console.log(text[16])
    var newSTR ='';
    for(i =0;i<text.length;i++){
        if(i == 0){
            newSTR += text[i].toUpperCase() + text.slice(1);
        }
        // "." TODO
        // if(text[i] == '.'){
        //     console.log("yes")
        //     newSTR += text.replace("text[i+1],text[i+1].toUpperCase()");
        // }
        // else newSTR = text.toLowerCase();
    }
    textarea.value = newSTR;
 }

 //  TITLECASE BTN
titleBTN.addEventListener('click', () => {

    str = textarea.value.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        // TODO
    //   if(str[i].includes('\n')){
        //  newStr =   str[i].replace(/(\r\n|\n|\r)/gm, " ")
        // //   console.log(newStr.split(" "));  
        //   const Newsplit = newStr.split(" ");
        //   console.log(Newsplit);
        //   for(var j = 0; j < Newsplit.length; j++) {
        //   Newsplit[j] = Newsplit[j][0].toUpperCase() + Newsplit[j].slice(1);
        //   console.log(Newsplit[j]);
        // //   textarea.value = Newsplit.join(' ')
        // str[i] = `${Newsplit[0]}\n${Newsplit[1]}`
        //   }
      str[i] = str[i][0].toUpperCase() + str[i].slice(1); 
    }
    textarea.value = str.join(' ');
    }
)