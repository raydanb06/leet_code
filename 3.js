/* 
Given a string s, find the length of the longest substring without repeating characters. 
*/

/**
 * @param {string} s
 * @return {number}
*/

/* 
init maxLength = array
init currentLength = array
loop through string
 {
     push char to currentLength
     check if next char is in currentLength or next char is end of string length
     {
         if currentLength.length is greater than maxLength.length
         {
            set currentLength to maxLength
            reset currentLength
         } else {
             reset currentLength
         }
     }
 }
 return maxLength.length
*/

var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let maxSize = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = 0; i < s.length; i++) {

        while (set.has(s[i])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[i])
        maxSize = Math.max(maxSize, i - left + 1)
    }
    
    return maxSize;
}

console.log(lengthOfLongestSubstring('bbbb'));
console.log(lengthOfLongestSubstring('c'));