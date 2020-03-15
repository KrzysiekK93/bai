function isCar(car1, car2, car3) {
    const items = [car1, car2, car3];
    const allEqual = items => items.every(item => item === items[0])
    
    if (allEqual(items)) {
        return true;
    }
    return false
}

console.log(isCar(true, true, true));
console.log(isCar(false, false, false));
console.log(isCar(true, true, false));
console.log(isCar(false, false, true));
console.log(isCar(true, false, true));

