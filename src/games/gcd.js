import game from '../index.js';
import getRandomNumber from '../random.js';

const rules = 'Find the greatest common divisor of given numbers.';

// Нашла 2 алгоритма назождения НОД: с помощью алгоритма Евклида и рекурсии.
// Оставляю сразу два для примера, буду использовать рекурсивный.

// const euclideanAlgorithm = (firstArgument, secondArgument) => {
//   while (firstArgument !== 0 && secondArgument !== 0) {
//     if (firstArgument > secondArgument) {
//       firstArgument %= secondArgument;
//     } else {
//       secondArgument %= firstArgument;
//     }
//   }
//   return firstArgument + secondArgument;
// };

const getGCD = (firstArgument, secondArgument) => {
  if (secondArgument === 0) {
    return firstArgument;
  }

  return getGCD(secondArgument, firstArgument % secondArgument);
};

const getQuestionAndAnswer = () => {
  const firstArgument = getRandomNumber(1, 100);
  const secondArgument = getRandomNumber(1, 100);
  const question = `${firstArgument} ${secondArgument}`;
  const correctAnswer = String(getGCD(firstArgument, secondArgument));

  return [question, correctAnswer];
};

const startGame = () => {
  game(rules, getQuestionAndAnswer);
};

export default startGame;
