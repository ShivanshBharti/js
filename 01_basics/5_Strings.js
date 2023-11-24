//mention all te string functions along with examples and their results
//1. length
//2. indexOf
//3. lastIndexOf
//4. search
//5. slice
//6. substring
//7. substr
//8. replace
//9. toUpperCase
//10. toLowerCase
//11. concat
//12. trim
//13. charAt
//14. charCodeAt
//15. split
//16. reverse
//17. match
//18. localeCompare
//19. includes
//20. repeat
//21. startsWith
//22. endsWith
//23. fromCharCode
//24. fromCodePoint
//25. toString
//26. valueOf
//27. anchor

console.log("Hello World".length); //11
console.log("Hello World".indexOf("o")); //4
console.log("Hello World".lastIndexOf("o")); //7
console.log("Hello World".search("o")); //4
console.log("Hello World".slice(2, 5)); //llo
console.log("Hello World".substring(2, 5)); //llo
console.log("Hello World".substr(2, 5)); //llo W
console.log("Hello World".replace("World", "JavaScript")); //Hello JavaScript
console.log("Hello World".toUpperCase()); //HELLO WORLD
console.log("Hello World".toLowerCase()); //hello world
console.log("Hello".concat(" World")); //Hello World
console.log("Hello World".trim()); //Hello World
console.log("Hello World".charAt(2)); //l
console.log("Hello World".charCodeAt(2)); //108
console.log("Hello World".split(" ")); //[ 'Hello', 'World' ]
console.log("Hello World".split("")); //[ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]
console.log("Hello World".split(" ", 1)); //[ 'Hello' ]
console.log("Hello World".split(" ", 2)); //[ 'Hello', 'World' ]
console.log("Hello World".split(" ", 3)); //[ 'Hello', 'World' ]
console.log("Hello World".split(" ", 4)); //[ 'Hello', 'World' ]
console.log("Hello World".split(" ", 5)); //[ 'Hello', 'World' ]
console.log("Hello World".split(" ", 6)); //[ 'Hello', 'World' ]
