// Problem:Given a string s, return its reverse.

// Input: "hello"

// Output: "olleh"



// solution one

const reverseString = (s) =>{
    return s.split('').reverse().join('')
}

console.log(reverseString('Hello World'))
// dlroW olleH

const reverseString2 = (s) =>{
    let arr = s.split('')
    let left = 0
    let right = arr.length - 1

    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }

    return arr.join('');
}

console.log(reverseString2('Hello World'))