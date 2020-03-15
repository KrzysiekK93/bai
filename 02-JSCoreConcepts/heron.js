// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

//Połowa obwodu trójkąta 
const p = (a + b + c)/2; 

//Zmienna pomocnicza
const helper = (p-a) * (p-b) * (p-c); 

//Wzror Herona
const P = () => p * Math.sqrt(helper);

console.log(`Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ${P()}`);