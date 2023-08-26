let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let deepClone = structuredClone(passportWithAddress);

deepClone.address.city = 'Bobryisk';

console.log(passportWithAddress.address.city);
console.log(deepClone.address.city);