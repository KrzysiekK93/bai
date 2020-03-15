title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

const notFormated = 
`${title} ${name} ${surname}
ul. ${street}
${zip} ${city}
${country}`

const formated = 
`${title} ${name} ${surname}
ul. ${street}
${zip} ${city}
${country.toUpperCase()}`

console.log(notFormated);
console.log(formated);