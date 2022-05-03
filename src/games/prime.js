import game from '../index.js';
import getRandomNumber from '../random.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    number % i === 0 ? false : true;
  }
};

const getAnswerAndQuestion = () => {
  const question = String(getRandomNumber(0, 100));
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => {
  game(rules, getAnswerAndQuestion);
};

export default startGame;
