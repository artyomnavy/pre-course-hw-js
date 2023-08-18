let str = "zzzzyzz";

let arr = Array.from(str);

if (arr.includes("y")) {
    console.log("нашел");
} else {
    console.log("заблудился");
}