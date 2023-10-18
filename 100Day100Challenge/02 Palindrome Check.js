// Given a string s, determine if it is a palindrome
//===================
//   SOLUTION #1   ||
//===================

const isPalindrome = (s) =>{
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    let left = 0;
    let right = s.length -1 

    while(left < right){
        if(s[left] !== s[right]) 
        return false
    left++
    right--
    }
    return true
}

console.log(isPalindrome("A man, a plan, a canal, Panama!"))
console.log(isPalindrome("A man, a plan, a canal!"))



//===================
//   SOLUTION #2   ||
//===================

const isPalindrome2 = (s) =>{
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    return s === s.split('').reverse().join('')
}


console.log('Second Method')
console.log(isPalindrome2("A man, a plan, a canal, Panama!"))

console.log(isPalindrome2("A man, a plan, a canal!"))