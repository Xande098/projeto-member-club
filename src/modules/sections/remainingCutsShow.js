const h1 = document.querySelector(
  "#remaining-cuts .box-cut .write-information h1"
);
const span = document.querySelector(
  "#remaining-cuts .box-cut .constructor #s-cut"
);

export function remainingCutsShow(information) {
  h1.innerHTML = "";
  span.innerHTML = "";

  const cutsRemaining = Number(information.loyaltyCard.cutsRemaining);
  h1.textContent = cutsRemaining;

  const totalCuts = Number(information.loyaltyCard.totalCuts);
  span.textContent = `${totalCuts} de 10`;
}
