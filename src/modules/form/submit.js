const form = document.querySelector("form");
const cardId = document.getElementById("card-id");

form.onsubmit = (event) => {
  event.preventDefault();

  try {
    const card = cardId.value.trim();

    if (!card) {
      return alert("Informe o ID do cartão!");
    }
  } catch (error) {
    alert("Não foi possível buscar os dados para esse ID!");
    console.log(error);
  }
};
