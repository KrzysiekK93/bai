const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createArray = () => {
    let arr = [];
    while (arr.length < 10) {
        arr.push(randomNumber(5,20))
    }
    return arr;
}

console.log(createArray());