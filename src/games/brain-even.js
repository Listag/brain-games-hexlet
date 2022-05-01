import game from "../index.js";
import getRandomNumber from "../random.js";

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
    const question = getRandomNumber();
    const correctAnswer = isEven(question) ? "yes" : "no";
    return [question, correctAnswer];

};

const startGame = () => {
  game(rules, getQuestionAndAnswer);
}

export default startGame;