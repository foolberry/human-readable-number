module.exports = function toReadable (number) {
  const digits = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven',
                    'twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const tens = ['','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  const hundreds = 'hundred';
  const thousand ='thousand';
  let result = '';
  let index = 0;
    if (number == 0) return 'zero';
    if (number < 100) {
        result = getDigit(number);  
    }
    else if (number < 1000) {
        count = Math.trunc(number/100);
        index = number % 100;
        result = getDigit(count) + ' ' + hundreds + ' ' + getDigit(index);
    }
   
 function getDigit(number) {
    if (number < 20) {          
    return digits[number];
    } 
    else { 
      index = Math.trunc(number/10) - 1;
      remain = number % 10;
    return tens[index] + ' ' + getDigit(remain);
    }
    
  }
  
  return result.trim();
}
