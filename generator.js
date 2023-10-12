//generate infinite ids- a use case e.g roll numbers
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
}

const generateID = idGenerator();

// Generate IDs
console.log(generateID.next().value); // 1
console.log(generateID.next().value); // 2
console.log(generateID.next().value); // 3
console.log(generateID.next().value); // 4

