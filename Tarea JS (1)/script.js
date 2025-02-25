function determineTransport(distance) {
    if (distance <= 1000) {
        return "pie";
    } else if (distance <= 10000) {
        return "bicicleta";
    } else if (distance <= 30000) {
        return "colectivo";
    } else if (distance <= 100000) {
        return "auto";
    } else {
        return "avion";
    }
}

const distanceInput = prompt("Ingrese la distancia en metros:");
const transport = determineTransport(Number(distanceInput));
alert(`El medio de transporte apropiado es: ${transport}`);

function findMaxNumber(numbers) {
    return Math.max(...numbers);
}

const numbersInput = prompt("Ingrese un array de números separados por comas:");
const numbersArray = numbersInput.split(',').map(Number);
const maxNumber = findMaxNumber(numbersArray);
alert(`El número mayor es: ${maxNumber}`);


