import { apiConfig } from "./apiConfig.js";

export async function perfilFetchByCard(id) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients/${id}`);

    const data = await response.json();

    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar as informações do perfil!");
  }
}
