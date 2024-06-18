const h2 = document.querySelector("#loyalty-card header #id");
const boxChecked = document.querySelector("#loyalty-card .box-checked");

export function loyaltyCardShow(information) {
  h2.innerHTML = "";
  boxChecked.innerHTML = "";

  h2.textContent = `ID: ${information.id}`;

  const divGift = document.createElement("div");
  divGift.classList.add("checked-gift");

  const totalCuts = Number(information.loyaltyCard.totalCuts);

  const imgGift = document.createElement("img");

  if (totalCuts === 10) {
    imgGift.setAttribute("src", "./src/assets/icons/gift-color.svg");
  } else {
    imgGift.setAttribute("src", "./src/assets/icons/gift-opacity.svg");
  }

  imgGift.setAttribute("alt", "Icone de gift");

  for (let item = 0; item < 9; item++) {
    const div = document.createElement("div");
    div.classList.add("checked");

    const img = document.createElement("img");
    img.setAttribute("src", "./src/assets/pin-check.png");
    img.setAttribute("alt", "Icone de check");

    if (item < totalCuts) {
      div.append(img);
      boxChecked.append(div);
    } else {
      boxChecked.append(div);
    }
    divGift.append(imgGift);
    boxChecked.append(divGift);
  }
}
