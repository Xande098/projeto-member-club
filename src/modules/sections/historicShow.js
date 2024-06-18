const span = document.querySelector("#historic .box-historic span");
const ul = document.querySelector("#historic .box-dates");

export function historicShow(information) {
  span.innerHTML = "";
  ul.innerHTML = "";

  const totalCuts = Number(information.loyaltyCard.totalCuts);
  span.textContent = `${totalCuts} cortes`;

  const appointmentHistory = information.appointmentHistory;
  console.log(appointmentHistory);

  appointmentHistory.forEach((item) => {
    const li = document.createElement("li");

    const divDates = document.createElement("div");
    divDates.classList.add("h-dates");

    const divBgImg = document.createElement("div");
    divBgImg.classList.add("bg-img");

    const img = document.createElement("img");
    img.setAttribute("src", "./src/assets/icons/seal-check.svg");
    img.setAttribute("alt", "ícone de check");

    const h2Dates = document.createElement("h2");
    const spanDates = document.createElement("span");

    h2Dates.textContent = item.date;
    spanDates.textContent = item.time;

    divDates.append(h2Dates, spanDates);
    divBgImg.append(img);
    li.append(divDates, divBgImg);
    ul.append(li);
  });
}
