// Проверка длины строки
const getStringLength = function (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
};

getStringLength('Шапка', 5);

// Проверка на палиндром
const isPalindrome = function (string) {
  string = string.replaceAll(' ', '');
  const example = string.toUpperCase();
  let palindrome = '';

  for (let i = example.length - 1; i >= 0 ; i--) {
    palindrome += example[i];
    if (palindrome === example) {
      return palindrome;
    }
  }
};

isPalindrome('Леша на полке клопа нашел');

// Функция, извлекающая числа из строки
const getNumber = function (string) {
  if (typeof string !== 'string') {
    string = string.toString();
  }

  let result = '';
  for (let i = 0; i <= string.length - 1; i++) {
    // eslint-disable-next-line radix
    if (!isNaN(parseInt(string[i]))) {
      result += string[i];
    }
  }

  if (result === '') {
    return NaN;
  }

  // eslint-disable-next-line radix
  return parseInt(result);
};

getNumber('1 кефир, 0.5 батона');
