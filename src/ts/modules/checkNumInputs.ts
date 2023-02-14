export const checkNumInputs = (selector: string) => {
  const numInputs = document.querySelectorAll(
    selector
  ) as NodeListOf<HTMLInputElement>;

  numInputs.forEach((numInput) => {
    numInput.addEventListener('input', () => {
      numInput.value = numInput.value.replace(/\D/, '');
    });
  });
};
