import startOfGame from '../index.js';
import randomInt from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.round(num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const logic = () => {
  const questionLine = randomInt(1, 50);
  const correctAnswer = isPrime(questionLine) ? 'yes' : 'no';

  return [questionLine, correctAnswer];
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  startOfGame(logic, rules);
};

export default prime;
