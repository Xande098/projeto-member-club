const modal = document.querySelector("dialog");
const button = document.querySelector("#close-modal");

export function modalShow(information) {
  const totalCuts = Number(information.loyaltyCard.totalCuts);

  if (totalCuts === 10) {
    modal.showModal();
  }

  button.onclick = function () {
    modal.close();
  };
}
