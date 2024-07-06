// export async function fetchCoins() {
//   const response = await fetch("https://api.coinpaprika.com/v1/coins");
//   const json = await response.json();
//   return json;
// }
const BASE_URL = "https://disney_api.nomadcoders.workers.dev";
export function fetchCharacter() {
  return fetch(`${BASE_URL}/characters`).then((response) => response.json());
}
export function fetchCharacterInfo(id: string) {
  return fetch(`${BASE_URL}/characters/${id}`).then((response) =>
    response.json()
  );
}
