/*
Author: chankruze (chankruze@gmail.com)
Created: Sat Oct 29 2022 15:33:32 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

const countWords = (str) => str.match(/\b\S+\b/g).length;

const countLines = (str) => (str.match(/\n/g) || '').length + 1;

const toTitleCase = (str) =>
  str.replace(
    /\b\w+/g,
    (s) => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase()
  );

const toSentenceCase = (str) =>
  str
    .toLowerCase()
    .replace(/(^\s*\w|[\.\!\?\,]\s*\w)/g, (char) => char.toUpperCase());

const toAlternateCase = (str) =>
  [...str]
    .map((char, i) => (i % 2 == 0 ? char.toLowerCase() : char.toUpperCase()))
    .join('');

const toInverseCase = (str) =>
  [...str]
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join('');

const uid = (length) =>
  btoa(
    String.fromCharCode(...crypto.getRandomValues(new Uint8Array(length * 2)))
  )
    .replace(/[+/]/g, '')
    .substring(0, length);

const download = (file, text) => {
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8, ' + encodeURIComponent(text)
  );
  element.setAttribute('download', file);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
