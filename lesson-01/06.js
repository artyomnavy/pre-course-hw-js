let str = "zzzzyzz";
str = Array.from(str);
if (str.includes("y")) {
    console.log("нашел");
} else {
    console.log("заблудился");
}