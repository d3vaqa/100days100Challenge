// Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.

const isValid = (s) =>{
    const stack = []
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    }


    for (let char of s){
        if(mapping[char]){
            const topElement = stack.pop()
            if(mapping[char] !== topElement) return false

        }else{
            stack.push(char)
        }
    }

    return stack.length === 0
}



console.log(isValid('[]'))
console.log(isValid('['))