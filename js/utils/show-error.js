const removeMessageTime = 5000;
const errorDataTemplate = document.querySelector('#data-error').content;

export const showErrorMessage = (message) => {
  const newError = errorDataTemplate.cloneNode(true);
  if (message) {
    newError.querySelector('.data-error__title').textContent = message;
  }
  document.body.append(newError);

  const newErrorArea = document.body.querySelector('.data-error');

  setTimeout(() => newErrorArea.remove(), removeMessageTime);
};
