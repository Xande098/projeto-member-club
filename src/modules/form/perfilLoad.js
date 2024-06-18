import { perfilFetchByCard } from "../../services/perfilFetchByCard.js";
import { informationShow } from "../sections/informationShow.js";
import { loyaltyCardShow } from "../sections/loyaltyCardShow.js";

const form = document.querySelector("form");
const cardId = document.getElementById("card-id");

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const id = cardId.value.trim();

    if (!id) {
      return alert("Informe o ID do cartão!");
    }

    const information = await perfilFetchByCard(id);

    informationShow(information);
    loyaltyCardShow(information);
  } catch (error) {
    alert("Não foi possível buscar os dados para esse ID!");
    console.log(error);
  }
};
