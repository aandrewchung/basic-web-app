export default function QueryProcessor(query: string): string {
  const lowerQuery = query.toLowerCase();

  if (lowerQuery.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (lowerQuery.includes("andrew id")) {
    return (
      "Your Andrew ID is awchung"
    );
  }

  if (query.match("What is your name?")) {
    return (
      "awchung"
    );
  }

  if (query.match(/Which of the following numbers is the largest:\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\?/)) {

    const match = query.match(/Which of the following numbers is the largest:\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\?/);

    if (match) {
      const num1 = parseInt(match[1]);
      const num2 = parseInt(match[2]);
      const num3 = parseInt(match[3]);
      
      const largest = Math.max(num1, num2, num3);
      
      return largest.toString();
    } else {
      return "No valid query found.";
    }
  }

  

  if (query.match(/What is (\d+) plus (\d+)\?/)) {

    const match = query.match(/What is (\d+) plus (\d+)\?/);

    if (match) {
      const num1 = parseInt(match[1]);
      const num2 = parseInt(match[2]);
    
      const result = num1 + num2;
    
      return result.toString();
    } else {
      return "Invalid format. Please provide a valid addition query.";
    }
    
  }

  if (query.match(/Which of the following numbers is both a square and a cube:\s*((?:\d+\s*,\s*)+\d+)\s*\?/)) {

    const match = query.match(/Which of the following numbers is both a square and a cube:\s*((?:\d+\s*,\s*)+\d+)\s*\?/);

    if (match) {
      const numbersString = match[1];
      const numbers = numbersString.split(',').map(Number);
    
      // Find numbers that are both squares and cubes
      const resultNumbers = numbers.filter(num => {
        const squareRoot = Math.sqrt(num);
        const cubeRoot = Math.cbrt(num);
        return squareRoot === Math.floor(squareRoot) && cubeRoot === Math.floor(cubeRoot);
      });
    
      if (resultNumbers.length > 0) {
        return resultNumbers.join(', ');
      } else {
        return "None of the numbers are both a square and a cube.";
      }
    } else {
      return "Invalid format. Please provide a valid query.";
    }
    
    
  } 

  



  return "";
}
