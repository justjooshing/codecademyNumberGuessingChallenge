let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, secretGuess) => {
  if (userGuess > 9) {
    alert(`Your number needs to be between 0 and 9`);
  }

  const userGuessDifference = getAbsoluteDistance(userGuess, secretGuess);
  const computerGuessDifference = getAbsoluteDistance(
    computerGuess,
    secretGuess
  );

  if (userGuessDifference <= computerGuessDifference) {
    return true;
  } else {
    return false;
  }
};

const getAbsoluteDistance = (number1, number2) => {
  return Math.abs(number1 - number2);
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
