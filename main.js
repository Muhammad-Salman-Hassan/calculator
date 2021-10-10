let accumulator = "";
let total = 0;

const updateaccumulatorView = (newValue) => {
  accumulator = newValue;
  const accElem = document.querySelector(".calculator__output__accumulator");
  accElem.innerHTML = accumulator;
};

const updateTotalValue = (newValue) => {
  total = newValue;
  const totalElem = document.querySelector(".calculator__output__total");
  const isFloat = total % 1 !== 0;

  totalElem.innerHTML = isFloat ? total.toFixed(3) : total;
};

const buttonPress = (num) => {
  const totalElem = document.querySelector(".calculator__output__total");
  totalElem.setAttribute("hidden", true);
  updateaccumulatorView(accumulator + num);
};

const equalPress = () => {
  if (accumulator.length === 0) {
    return;
  }
  try {
    const totalElem = document.querySelector(".calculator__output__total");
    totalElem.removeAttribute("hidden");
    const result = eval(accumulator);
  
    updateTotalValue(result);
    updateaccumulatorView("");
  } catch (error) {
      alert("You Broke Calculator");
  }
};

const operatorPress = (operator) => {
  if (accumulator.length === 0) {
    if (total === 0) {
      return;
    } else {
      accumulator = `${total}`;
    }
  }
  const lastOperator = accumulator[accumulator.length - 1];
  if (isNaN(lastOperator)) {
    accumulator = accumulator.substr(0, accumulator.length - 1);
  }
  updateaccumulatorView(accumulator + operator);
};

const clearbtnelem = () => {
  updateaccumulatorView("");
  updateTotalValue(0);
};

const main = () => {
  updateTotalValue(0);
};
main();
