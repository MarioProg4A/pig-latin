const translatePigLatin = () => {
  let oldword = document.getElementById("wordInput").value;
  if (oldword.match(/ /)) {
    oldword = oldword.toLowerCase().trim();
    let wordArr = oldword.split(' ');
    let result = '';
    for (let i = 0; i < wordArr.length; i++) {
      if (i > 0) {
        result += ' ';
      }
      result += translate(wordArr[i]);
    }
    document.getElementById("showTranslation").innerHTML = result;
    return result;
  }
  let result = translate(oldword);
  document.getElementById("showTranslation").innerHTML = result;
  return result;
}

const translate = (oldword) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let newWord = "";
  if (vowels.indexOf(oldword[0]) > -1) {
    newWord = oldword + "yay";
    return newWord;
  } else {
    let firstVowelIndex = oldword.search(/[aeiou]/);
    if (firstVowelIndex === -1) {
      newWord = oldword + "ay";
    } else {
      newWord = oldword.substring(firstVowelIndex) + oldword.substring(0, firstVowelIndex) + "ay";
    }
    return newWord;
  }
}