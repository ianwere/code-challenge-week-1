// Import the readline module
const readline = require('readline');

// Import the calculateDeductions function from your module
const calculateDeductions = require('./CalculateSalary');

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for basic salary and benefits
rl.question('Enter Basic Salary: ', (basicSalary) => {
  rl.question('Enter Benefits: ', (benefits) => {
    // Parse the input as numbers
    basicSalary = parseFloat(basicSalary);
    benefits = parseFloat(benefits);

    if (isNaN(basicSalary) || isNaN(benefits)) {
      console.log('Invalid input. Please enter valid numbers for Basic Salary and Benefits.');
      rl.close();
      return;
    }

    // Calculate deductions and net salary using the calculateDeductions function
    const deductions = calculateDeductions(basicSalary, benefits);

    // Display the results
    console.log('========== Deductions and Net Salary ==========');
    console.log('Gross Salary: Ksh', deductions.grossSalary);
    console.log('Paye (Tax): Ksh', deductions.paye);
    console.log('NHIF Deduction: Ksh', deductions.nhifDeduction);
    console.log('NSSF Deduction: Ksh', deductions.nssfDeduction);
    console.log('Net Salary: Ksh', deductions.netSalary);
    
    // Close the readline interface
    rl.close();
  });
});
