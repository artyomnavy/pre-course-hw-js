​const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString(arr) {
    return arr.filter(color => color === "черный" || color === "красный" || color === "желтый").join('-');
}

console.log(createColorString(colors));