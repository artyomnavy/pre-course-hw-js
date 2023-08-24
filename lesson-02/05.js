let passport = {
    name: "Petr",
    surname: "Petrov",
};

let clonePassport = Object.assign({}, passport);

clonePassport.name = "Ivan";

console.log(passport);
console.log(clonePassport);