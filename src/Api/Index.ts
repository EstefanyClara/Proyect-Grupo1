export async function getGames() {
  const url = "https://api.rawg.io/api/games?key=f13a63b2d5ab4736a9ba944db1d8debb"; //habria que poner la key en una variable por seguridad 
  try {
    const response = await fetch(url);
    if (response.ok) {
      const payload = await response.json();
      return payload;
    } else {
      console.error("An error happened");
      return [];
    }
  } catch (error) {
    console.error(error);
  }
};



export async function getGame(gameID) {
  const key = "?key=f13a63b2d5ab4736a9ba944db1d8debb"
  const url = 'https://api.rawg.io/api/games/' + gameID + key
  // console.log(url)
  try {
    let response = await fetch(url);
    if (response.ok) {
      const payload = await response.json();
      console.log(payload);
      return payload;
    } else {
      console.error("An error happened");
      return [];
    }
  } catch (error) {
    console.error(error);
  }
}