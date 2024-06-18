import { perfilFetchByCard } from "../../services/perfilFetchByCard.js";
import { informationShow } from "../sections/informationShow.js";
import { loyaltyCardShow } from "../sections/loyaltyCardShow.js";
import { remainingCutsShow } from "../sections/remainingCutsShow.js";
import { historicShow } from "../sections/historicShow.js";

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
    remainingCutsShow(information);
    historicShow(information);
  } catch (error) {
    alert("Não foi possível buscar os dados para esse ID!");
    console.log(error);
  }
};
