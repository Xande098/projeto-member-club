const section = document.querySelector("#perfil");

export function informationShow(information) {
  section.innerHTML = "";

  const div = document.createElement("div");
  const img = document.createElement("img");
  const h1 = document.createElement("h1");
  const span = document.createElement("span");

  span.textContent = `Cliente desde ${information.clientSince}`;

  img.setAttribute("src", information.image);
  img.setAttribute("alt", "Imagem de Perfil");

  div.classList.add("information");

  h1.append(information.name);
  div.append(h1, span);

  section.append(img, div);
}
