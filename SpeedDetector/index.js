const readline = require('readline');
const calculateDemeritPoints = require('./SpeedDetector'); 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the speed of the car (in km/h): ', (input) => {
  const speed = parseFloat(input);

  if (!isNaN(speed)) {
    const result = calculateDemeritPoints(speed);
    console.log(result);
  } else {
    console.log('Invalid input. Please enter a valid speed.');
  }

  rl.close();
});