let passport = {
    name: "Petr",
    surname: "Petrov",
};

let clonePassport = Object.assign({}, passport);

clonePassport.name = "Ivan";

console.log(passport.name);
console.log(clonePassport.name);