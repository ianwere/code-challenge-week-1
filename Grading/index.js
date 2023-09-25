const readline = require('readline');
const calculateGrade = require('./grading'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter student marks (between 0 and 100): ', (input) => {
  const marks = parseFloat(input);

  if (!isNaN(marks) && marks >= 0 && marks <= 100) {
    const grade = calculateGrade(marks);
    console.log(`Student's grade: ${grade}`);
  } else {
    console.log('Invalid input. Marks should be between 0 and 100.');
  }

  rl.close();
});