import inquirer from 'inquirer';

const chosenNumbers: Array<number> = [];
const randomNumbers: Array<number> = [];
const hitNumbers: Array<number> = [];

const validateInput = (text: string): boolean => {
  const number = parseInt(text);

  if (!chosenNumbers.includes(number) && number >= 1 && number <= 49)
    return true;
  else
    return false;
};

const validateRandomNumber = (number: number): boolean => {
  if (!randomNumbers.includes(number) && number >= 1 && number <= 49)
    return true;
  else
    return false;
};

const randomNewNumber = (max: number): number => {
  return Math.floor(Math.random() * max);
};

const startApp = async (): Promise<void> => {
  do {
    const result = await inquirer.prompt([{
      name: 'number',
      type: 'input',
      message: 'Podaj liczbę...'
    }]);

    if (validateInput(result.number)) {
      chosenNumbers.push(parseInt(result.number));
    }
  } while (chosenNumbers.length < 6);

  do {
    const randomNumber = randomNewNumber(49);

    if (validateRandomNumber(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  } while (randomNumbers.length < 6);

  chosenNumbers.forEach(element => {
    if (randomNumbers.includes(element)) hitNumbers.push(element);
  });


  console.log('chosenNumbers:', chosenNumbers);
  console.log('randomNumbers:', randomNumbers);
  console.log('hitNumbers:', hitNumbers);
  console.log('number of hit:', hitNumbers.length);
};

startApp();
