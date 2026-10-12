 
// This object stores the calculator values.
const Calculator = {
    // Displays the current number.
    Display_Value: '0',

    // Stores the first number.
    First_Operand: null,

    // Checks if we are waiting for the second number.
    Wait_Second_Operand: false,

    // Stores the selected operator.
    operator: null,
};

// Updates the calculator screen.
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

// Handles number buttons.
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;

    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_Value =
            Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// Handles decimal points.
function Input_Decimal(dot) {
    if (Calculator.Wait_Second_Operand === true) {
        Calculator.Display_Value = '0';
        Calculator.Wait_Second_Operand = false;
    }

    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

// Handles operators.
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator;
    const Value_of_Input = parseFloat(Display_Value);

    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }

    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const result = Calculate(
            First_Operand,
            Value_of_Input,
            operator
        );

        Calculator.Display_Value = String(result);
        Calculator.First_Operand = result;
    }

    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

// Performs the calculation.
function Calculate(first, second, operator) {
    if (operator === '+') {
        return first + second;
    }

    if (operator === '-') {
        return first - second;
    }

    if (operator === '*') {
        return first * second;
    }

    if (operator === '/') {
        if (second === 0) {
            return 'Error';
        }

        return first / second;
    }

    return second;
}

// Clears the calculator.
function Clear_Calculator() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// Handles button clicks.
function Button_Click(event) {
    const button = event.target;

    if (button.tagName !== 'BUTTON') {
        return;
    }

    const button_value = button.value;

    if (button.classList.contains('all-clear')) {
        Clear_Calculator();
    } else if (button.classList.contains('decimal')) {
        Input_Decimal(button_value);
    } else if (button.classList.contains('equal-sign')) {
        if (Calculator.operator !== null &&
            Calculator.Wait_Second_Operand === false) {

            const second = parseFloat(Calculator.Display_Value);

            const result = Calculate(
                Calculator.First_Operand,
                second,
                Calculator.operator
            );

            Calculator.Display_Value = String(result);
            Calculator.First_Operand = null;
            Calculator.operator = null;
            Calculator.Wait_Second_Operand = true;
        }
    } else if (button.classList.contains('operator')) {
        Handle_Operator(button_value);
    } else {
        Input_Digit(button_value);
    }

    Update_Display();
}

// Listen for calculator button clicks.
document.querySelector('.calculator-keys')
    .addEventListener('click', Button_Click);

// Show the starting value.
Update_Display();
 
