function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
  
    if (speed <= speedLimit) {
      return 'Ok';
    }
  
    const excessSpeed = speed - speedLimit;
    const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);
  
    if (demeritPoints >= 12) {
      return 'License suspended';
    }
  
    return `Points: ${demeritPoints}`;
  }
  
  module.exports = calculateDemeritPoints;
