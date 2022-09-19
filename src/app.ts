import inquirer from 'inquirer';

const chosenNumbers: Array<number> = [10];
const randomNumbers: Array<number> = [];

const validateInput = (text: string): boolean => {

  const number = parseInt(text);

  if (!chosenNumbers.includes(number) && number >= 1 && number <= 49)
    return true;
  else
    return false;
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
      console.log('OK');
    }
  } while (chosenNumbers.length < 6);
  console.log('chosenNumbers:', chosenNumbers);
};

// validateInput('3');


startApp();
