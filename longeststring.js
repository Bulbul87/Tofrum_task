function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let seen = new Map(); 

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
       
        if (seen.has(char) && seen.get(char) >= start) {
            start = seen.get(char) + 1; 
        }
        seen.set(char, end); 
        maxLength = Math.max(maxLength, end - start + 1); 
    }

    return maxLength;
}


const input ="abcbc";
console.log(lengthOfLongestSubstring(input)); 
