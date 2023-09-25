function calculateDeductions(basicSalary, benefits) {
    const taxRates = {
      rate1: 0.1,
      rate2: 0.25,
      rate3: 0.3,
      };
 
    const nhifRates = {
      low: 1500,
      medium: 2000,
      high: 2500,
    };
 
    const nssfRate = 0.06;
 

    const grossSalary = basicSalary + benefits;

    let paye = 0;
 
    if (grossSalary <= 24000) {
      paye = grossSalary * taxRates.rate1;
    } else if (grossSalary <= 32333) {
      paye = 2400 + (grossSalary - 24000) * taxRates.rate2;
    } else {
      paye = 2400 + 1649.95 + (grossSalary - 32333) * taxRates.rate3;
    }
 
    let nhifDeduction = 0;
 
    if (grossSalary <= 5999) {
      nhifDeduction = nhifRates.low;
    } else if (grossSalary <= 7999) {
      nhifDeduction = nhifRates.medium;
    } else {
      nhifDeduction = nhifRates.high;
    }
 
    const nssfDeduction = grossSalary * nssfRate;
 
    return {
      grossSalary,
      paye,
      nhifDeduction,
      nssfDeduction,
      netSalary: grossSalary - paye - nhifDeduction - nssfDeduction,
    };
  }
 
  module.exports = calculateDeductions;
