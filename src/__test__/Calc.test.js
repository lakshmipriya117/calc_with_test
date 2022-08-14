import CalcCommand from '../Calculation/Calc'
const calc = new CalcCommand

/**
* This method executes the calculate method based on the buttons clicked
* and returns the resultant value
*
* @param buttons - array of buttons that are to be clicked
*
* @return value - the value that results after calculate is executed on all button values
*/

function pressButtons(buttons){
  let value = 0;
  buttons.forEach((button) => {
    value = calc.calculate(button, value);
  });

  return value;
}

/**
* This method executes the calculate method based on the buttons clicked
* and returns the resultant value
*
* @param buttons - array of buttons that are to be clicked
* @param expectation - the value that os expected as a result of the calculation
*
*/

function expectButtons(buttons, expectation) {
  expect(pressButtons(buttons)).toEqual(expectation);
  calc.reset();
}

// tests based on various combination of button clicks

it('should support 6', () => {
  expectButtons(['6'], '6');
});

it('should support 53', () => {
  expectButtons(['5','3'], '53');
});

it('should support 7 + 5', () => {
  expectButtons(['7','+','5'], '5');
});

it('should support addition', () => {
  expectButtons(['9','+','3','='], 12);
});

it('should support subtraction', () => {
  expectButtons(['12','-','3','='], 9);
});

it('should support nultiplication', () => {
  expectButtons(['9','*','2','='], 18);
});

it('should support division', () => {
  expectButtons(['18','/','3','='], 6);
});

it('should support Clear', () => {
  expectButtons(['C'], 0);
});
