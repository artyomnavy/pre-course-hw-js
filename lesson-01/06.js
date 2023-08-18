let str = "zzzzyzz";

let arr = [];
for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
}

if (arr.includes("y")) {
    console.log("нашел");
} else {
    console.log("заблудился");
}