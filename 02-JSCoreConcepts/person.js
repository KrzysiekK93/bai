class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getEvidence() {
        return `${this.name} ${this.surname.toUpperCase()}`
    }

    getInitials() {
        return `${this.name.slice()[0]}.${this.surname.slice()[0]}`
    }
}

const sample = new Person("Jan", "Nowak");
const me = new Person("Krzysztof", "Kowalik");

console.log("sample:", sample);
console.log("sample getEvidence:", sample.getEvidence());
console.log("sample getInitials:", sample.getInitials());
console.log("me:", me);
console.log("me getEvidence:", me.getEvidence());
console.log("me getInitials:", me.getInitials());