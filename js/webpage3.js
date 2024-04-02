/* Sri Harshini Jilloju - N01649103 March 19th,2023*/
// Function to simplify selecting DOM elements by their CSS selector
function $(selector) {
    return document.querySelector(selector);
}

// Function to process user's input and calculate income tax
function processEntry() {
    // Selecting input elements
    const incomeInput = $('#income');
    const taxResultInput = $('#taxResult');

    // Parsing income value as a floating point number
    const income = parseFloat(incomeInput.value);

    // Checking if the input is valid
    if (isNaN(income) || income <= 0) {
        // Displaying error message for invalid input
        taxResultInput.value = 'Invalid input. Please enter a positive number.';
    } else {
        // Calculating tax based on income and updating the result input
        const tax = calculateTax(income);
        taxResultInput.value = tax.toFixed(2); // Fixing the result to 2 decimal places
    }

    // Focusing back on the income input field for convenience
    incomeInput.focus();
}

// Function to calculate income tax based on the given income
function calculateTax(income) {
    if (income <= 9875) {
        return income * 0.10;
    } else if (income <= 40125) {
        return 987.50 + (income - 9875) * 0.12;
    } else if (income <= 85525) {
        return 4617.50 + (income - 40125) * 0.22;
    } else if (income <= 163300) {
        return 14605.50 + (income - 85525) * 0.24;
    } else if (income <= 207350) {
        return 33271.50 + (income - 163300) * 0.32;
    } else if (income <= 518400) {
        return 47367.50 + (income - 207350) * 0.35;
    } else {
        return 156235.00 + (income - 518400) * 0.37;
    }
}
