const getStringLength = function (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}

console.log(getStringLength('Шапка', 5))
