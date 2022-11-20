// counters
const characterCount = document.getElementById('characterCount');
const lineCount = document.getElementById('lineCount');
const wordCount = document.getElementById('wordCount');
// textarea
const editor = document.getElementById('editor');
// casing buttons
const btnLowerCase = document.getElementById('btnLowerCase');
const btnUpperCase = document.getElementById('btnUpperCase');
const btnSentenceCase = document.getElementById('btnSentenceCase');
const btnTitleCase = document.getElementById('btnTitleCase');
const btnInverseCase = document.getElementById('btnInverseCase');
const btnAlternateCase = document.getElementById('btnAlternateCase');
// action buttons
const btnClear = document.getElementById('btnClear');
const btnCopy = document.getElementById('btnCopy');
const btnDownload = document.getElementById('btnDownload');

// listen for keyup in editor textarea
editor.addEventListener('keyup', () => updateCounter());

// counters
const updateCounter = () => {
  if (editor.value) {
    // count characters
    characterCount.innerText = editor.value.length;
    // count words
    wordCount.innerText = countWords(editor.value);
    // count lines
    lineCount.innerText = countLines(editor.value);
  } else {
    // reset counters
    // useful when multiple backspace event is pending and
    // text is selected and backspaced
    characterCount.innerText = 0;
    wordCount.innerText = 0;
    lineCount.innerText = 0;
  }
};

/**
 * Casing buttons
 */

// 1. lower case button
btnLowerCase.addEventListener('click', () => {
  editor.value = editor.value.toLowerCase();
});

// 2. upper case button
btnUpperCase.addEventListener('click', () => {
  editor.value = editor.value.toUpperCase();
});

// 3. sentence button
btnSentenceCase.addEventListener('click', () => {
  editor.value = toSentenceCase(editor.value);
});

//  4. title case button
btnTitleCase.addEventListener('click', () => {
  editor.value = toTitleCase(editor.value);
});

//  5. alternate case button
btnAlternateCase.addEventListener('click', () => {
  editor.value = toAlternateCase(editor.value);
});

// 6. inverse case button
btnInverseCase.addEventListener('click', () => {
  editor.value = toInverseCase(editor.value);
});

/**
 * Action buttons
 */

//  A1. download buttton
btnDownload.addEventListener('click', () =>
  download(`CaseConverter-${uid(5)}.txt`, editor.value)
);

// A2. copy button
btnCopy.addEventListener('click', () =>
  navigator.clipboard.writeText(editor.value)
);

// A3. clear button
btnClear.addEventListener('click', () => {
  editor.value = '';
  updateCounter();
});
