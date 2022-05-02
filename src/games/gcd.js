import game from "../index.js";
import getRandomNumber from "../random.js";

const rules = 'Find the greatest common divisor of given numbers.';

// Нашла 2 алгоритма назождения НОД: с помощью алгоритма Евклида и рекурсии. 
// Оставляю сразу два для примера, буду использовать рекурсивный.

const euclideanAlgorithm = (firstArgument, secondArgument) => {
    while (firstArgument != 0 && secondArgument != 0) {
        if (firstArgument > secondArgument) {
            firstArgument = firstArgument % secondArgument
        } else {
            secondArgument = secondArgument % firstArgument
        }
    }
    return (firstArgument + secondArgument);
}

const getGCD = (firstArgument, secondArgument) => {
    if (0 === secondArgument) {
        return firstArgument;
    }

    return getGCD(secondArgument, firstArgument % secondArgument);
}

const getQuestionAndAnswer = () => {
    let firstArgument = getRandomNumber(1, 100);
    let secondArgument = getRandomNumber(1, 100);
    const question = `${firstArgument} ${secondArgument}`;
    let correctAnswer = String(getGCD(firstArgument, secondArgument));

    return [question, correctAnswer];
};

const startGame = () => {
    game(rules, getQuestionAndAnswer);
}

export default startGame;