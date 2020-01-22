function hello() {
    console.log("hello");
    
}

hello();

function saySomething(x:string) {
    console.log(x);
    
}
saySomething("Hello World");

function charCount(word:string):number {
    return word.replace(/\s/g, '').length;
    
}

let myCount = charCount("Test 1");
console.log(myCount);

function both_charCount(word:String, spaces?: boolean):number {
    if(spaces){
        return word.replace(/\s/g, '').length;
    }
    else{
        return word.length;
    }
}
  
let bothchar = both_charCount("Test 1", false);
let bothchar1 = both_charCount("Test 1", true);
let bothchar2 = both_charCount("Test 1");

console.log(bothchar);
console.log(bothchar1);
console.log(bothchar2);
