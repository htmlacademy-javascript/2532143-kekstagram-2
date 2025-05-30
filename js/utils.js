// Генератор случайных значений
const randomCalculate = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export {randomCalculate};
