const result = document.getElementById("result");
const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
let word;

checkButton.onclick = function() {
   word = textInput.value;
   if (palindromeOrNot(word)) {
    result.innerHTML = `${word} is a palindrome`;
   } else {
    result.innerHTML = `${word} is not a palindrome`;
   }
}

function palindromeOrNot(s) {
    let cnt = 0;
    const size = s.length;
    for (let i = 0; i < size; i++) {
        if (s[i] == s[size - 1 - i]) {
            cnt++;
        }
    }
    if (cnt == size) {
        return true;
    } else {
        return false;
    }
}

