let name = "hello world";
function reverse(s: String): String { 
    return s.split("").reverse().join("");
};

function reverse2(s: string):string{ 
    return s.split(" ").
        map(x=>x.split("").reverse().join("")).
        join(" ");
}

console.log(reverse2(name));

let x = name.split("");
console.log(x, typeof (x));