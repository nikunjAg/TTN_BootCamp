const inputStrEl = document.querySelector('.inputStr');
const checkBtn = document.querySelector('.checkBtn');
const result = document.querySelector('.result');

const checkPalindrome = (str) => {
    const len = str.length;

    let res = true, l = 0, r = len-1;
    while (l < r) {
        if (str[l] != str[r]) {
            res = false;
            break;
        }
        ++l;
        --r;
    }
    
    return res;
}

checkBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const str = inputStrEl.value;
    
    const res = checkPalindrome(str);

    result.textContent = str + ` is ${res ? '' : 'not'} a palindrome`;
    result.className = res ? 'success' : 'failure';

    inputStrEl.value = '';

});